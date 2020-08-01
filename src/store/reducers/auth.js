import {
  SET_EMAIL,
  SET_PASSWORD,
  SET_EMAIL_VALID,
  SET_PASSWORD_VALID,
} from "../actions/actionTypes";

const initialState = {
  email: {
    value: "your email",
    errorMessage: "Enter correct email",
  },
  password: {
    value: "your password",
    errorMessage: "Enter correct password",
  },

  isEmailValid: true,
  isPasswordValid: true,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case SET_PASSWORD: {
      return {
        ...state,
        password: action.password,
      };
    }
    case SET_EMAIL_VALID:
      return {
        ...state,
        isEmailValid: action.isEmailValid,
      };
    case SET_PASSWORD_VALID:
      return {
        ...state,
        isPasswordValid: action.isPasswordValid,
      };
    default:
      return state;
  }
}
