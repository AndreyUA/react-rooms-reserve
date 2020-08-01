import is from "is_js";
import {
  SET_EMAIL,
  SET_PASSWORD,
  SET_EMAIL_VALID,
  SET_PASSWORD_VALID,
} from "./actionTypes";

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
