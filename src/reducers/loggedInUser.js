import { USER_LOGIN } from "../actions/users";

export default function(state = [], action = {}) {
  switch (action.type) {
    case USER_LOGIN:
      return action.payload;
    default:
      return state;
  }
}
