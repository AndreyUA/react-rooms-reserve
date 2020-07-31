import {
  SET_CURRENT_WEEK,
  SET_NEXT_WEEK,
  SET_LOGGED_IN,
  SET_CONTENT_FIRST,
  SET_CONTENT_FIRST_NEXT,
  SET_CONTENT_SECOND,
  SET_CONTENT_SECOND_NEXT,
} from "./actionTypes";

export function calculateDates(array) {
  return {
    type: SET_CURRENT_WEEK,
    dates: array,
  };
}

export function calculateNextDates(array) {
  return {
    type: SET_NEXT_WEEK,
    datesNext: array,
  };
}

export function loggedIn() {
  return {
    type: SET_LOGGED_IN,
    isLoggedIn: true,
  };
}

export function getContentFirst(array) {
  return {
    type: SET_CONTENT_FIRST,
    contentFirst: array,
  };
}

export function getContentNextFirst(array) {
  return {
    type: SET_CONTENT_FIRST_NEXT,
    contentNextFirst: array,
  };
}

export function getContentSecond(array) {
  return {
    type: SET_CONTENT_SECOND,
    contentSecond: array,
  };
}

export function getContentNextSecond(array) {
  return {
    type: SET_CONTENT_SECOND_NEXT,
    contentNextSecond: array,
  };
}
