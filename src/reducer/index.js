import { combineReducers } from "redux";
import messages from "./msg";
import settings from "./settings";
//import app from "./app";

export default combineReducers({
  message: messages,
  settings: settings,
  //app
});
