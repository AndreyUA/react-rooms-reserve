import { SET_CURRENT_WEEK, SET_NEXT_WEEK } from "./actionTypes";

export function calculateDates(array) {
  return {
    type: SET_CURRENT_WEEK,
    dates: array
  };
}

export function calculateNextDates(array) {
  return {
    type: SET_NEXT_WEEK,
    datesNext: array
  };
}
