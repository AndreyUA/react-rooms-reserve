import {
  SET_CURRENT_WEEK,
  SET_NEXT_WEEK,
  SET_LOGGED_IN,
  SET_CONTENT_FIRST,
  SET_CONTENT_FIRST_NEXT,
  SET_CONTENT_SECOND,
  SET_CONTENT_SECOND_NEXT,
} from "../actions/actionTypes";

const initialState = {
  dates: [],
  datesNext: [],
  isLoggedIn: false,
  contentFirst: [],
  contentNextFirst: [],
  contentSecond: [],
  contentNextSecond: [],
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_WEEK:
      return {
        ...state,
        dates: action.dates,
      };
    case SET_NEXT_WEEK:
      return {
        ...state,
        datesNext: action.datesNext,
      };
    case SET_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case SET_CONTENT_FIRST:
      return {
        ...state,
        contentFirst: action.contentFirst,
      };
    case SET_CONTENT_FIRST_NEXT:
      return {
        ...state,
        contentNextFirst: action.contentNextFirst,
      };
    case SET_CONTENT_SECOND:
      return {
        ...state,
        contentSecond: action.contentSecond,
      };

    case SET_CONTENT_SECOND_NEXT:
      return {
        ...state,
        contentNextSecond: action.contentNextSecond,
      };
    default:
      return state;
  }
}
