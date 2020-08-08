import {
  SET_EMAIL,
  SET_PASSWORD,
  SET_EMAIL_VALID,
  SET_PASSWORD_VALID,
  AUTH_LOGOUT,
  AUTH_SUCCES,
  INCORRECT_PASSWORD,
  CORRECT_PASSWORD,
  CONFIRM_EMAIL,
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
  token: null,
  isPasswordCorrect: true,
  isNeedToConfirm: false,
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
    case AUTH_LOGOUT:
      return {
        ...state,
        token: null,
      };
    case AUTH_SUCCES:
      return {
        ...state,
        token: action.token,
      };
    case INCORRECT_PASSWORD:
      return {
        ...state,
        isPasswordCorrect: false,
      };
    case CORRECT_PASSWORD:
      return {
        ...state,
        isPasswordCorrect: true,
      };
    case CONFIRM_EMAIL:
      return {
        ...state,
        isNeedToConfirm: true,
      };
    default:
      return state;
  }
}
