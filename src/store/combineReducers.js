import { combineReducers } from "redux";
import users from "./users";
import error from "./login/error";
import loggedInUser from "./loggedInUser";

export default combineReducers({
  users,
  loggedInUser,
  error
});
