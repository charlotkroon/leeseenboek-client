import { ALL_USERS } from "./action";
import { NEW_USER } from "../signup/action";

export default function(state = [], action = {}) {
  switch (action.type) {
    case ALL_USERS:
      return action.payload;
    default:
      return state;
  }
}
