import is from "is_js";
import {
  SET_EMAIL,
  SET_PASSWORD,
  SET_EMAIL_VALID,
  SET_PASSWORD_VALID,
  AUTH_LOGOUT,
  AUTH_SUCCES,
  INCORRECT_PASSWORD,
  CORRECT_PASSWORD,
} from "./actionTypes";
import axios from "axios";
import { loggedIn, loggedOut } from "./app";

export function setEmail(obj) {
  return {
    type: SET_EMAIL,
    email: obj,
  };
}

export function setPassword(obj) {
  return {
    type: SET_PASSWORD,
    password: obj,
  };
}

export function setEmailCorrect(bool) {
  return {
    type: SET_EMAIL_VALID,
    isEmailValid: bool,
  };
}

export function setPasswordCorrect(bool) {
  return {
    type: SET_PASSWORD_VALID,
    isPasswordValid: bool,
  };
}

export function changeEmail(e) {
  return (dispatch, getState) => {
    const value = e.target.value;
    const email = getState().auth.email;

    let isValid = true;

    if (value.trim() === "" || !is.email(value)) {
      isValid = false;
    }

    if (isValid) {
      email.value = value;
    }

    dispatch(setEmail(email));
    dispatch(setEmailCorrect(isValid));
  };
}

export function changePassword(e) {
  return (dispatch, getState) => {
    const value = e.target.value;
    const password = getState().auth.password;

    let isValid = true;

    if (value.length <= 5) {
      isValid = false;
    }

    if (isValid) {
      password.value = value;
    }

    dispatch(setPassword(password));
    dispatch(setPasswordCorrect(isValid));
  };
}

//universal func for login and register
export function auth(email, password, isLogin) {
  return async (dispatch) => {
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };

    //for registration
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBsMASd0VkdSUSdIdbpsQN_LFml1Chi8L0";

    //for login
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBsMASd0VkdSUSdIdbpsQN_LFml1Chi8L0";
    }

    try {
      const response = await axios.post(url, authData);
      const data = response.data;
      const expirationDate = new Date(
        new Date().getTime() + data.expiresIn * 1000
      );
      //write token to global obj localStorage
      localStorage.setItem("token", data.idToken);
      //write email to global obj localStorage
      localStorage.setItem("email", data.email);
      //write userId to global obj localStorage
      localStorage.setItem("userId", data.localId);
      //life time of auth
      localStorage.setItem("expirationDate", expirationDate);

      console.log(`data: ${data}, localStorage: 
      token: ${localStorage.getItem("token")}
      userId: ${localStorage.getItem("userId")}
      expirationDate: ${localStorage.getItem("expirationDate")}
      `);
      dispatch(authSuccess(data.idToken));
      dispatch(autoLogout(data.expiresIn));
      dispatch(passwordCorrect());
    } catch (error) {
      console.log(error);
      dispatch(passwordIncorrect());
    }
  };
}

export function passwordIncorrect() {
  return {
    type: INCORRECT_PASSWORD,
    isPasswordCorrect: false,
  };
}

export function passwordCorrect() {
  return {
    type: CORRECT_PASSWORD,
    isPasswordCorrect: true,
  };
}

export function autoLogout(time) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
      dispatch(loggedOut());
    }, time * 1000);
  };
}

export function authSuccess(token) {
  return (dispatch) => {
    dispatch(loggedIn());
    return {
      type: AUTH_SUCCES,
      token,
    };
  };
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("email");
  return {
    type: AUTH_LOGOUT,
  };
}

export function autoLogin() {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
      dispatch(loggedOut());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
        dispatch(loggedOut());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000)
        );
        dispatch(loggedIn());
      }
    }
  };
}
