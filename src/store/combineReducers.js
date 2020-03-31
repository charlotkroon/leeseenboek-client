import { combineReducers } from "redux";
import users from "./login/users";
import error from "./login/error";
import loggedInUser from "./login/loggedInUser";

export default combineReducers({
  users,
  loggedInUser,
  error
});
