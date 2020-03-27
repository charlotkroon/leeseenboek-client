import { combineReducers } from "redux";
import users from "./users";
import loggedInUser from "./loggedInUser";

export default combineReducers({
  users,
  loggedInUser
});
