import { combineReducers } from "redux";

import appReducer from "./app";
import authReducer from "./auth";

export default combineReducers({
  app: appReducer,
  auth: authReducer,
});
