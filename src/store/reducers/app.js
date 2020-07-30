import { SET_CURRENT_WEEK, SET_NEXT_WEEK } from "../actions/actionTypes";

const initialState = {
  dates: [],
  datesNext: []
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_WEEK:
      return {
        ...state,
        dates: action.dates
      };
    case SET_NEXT_WEEK:
      return {
        ...state,
        datesNext: action.datesNext
      };
    default:
      return state;
  }
}
