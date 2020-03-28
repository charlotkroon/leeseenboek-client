import { ERROR } from "../actions/users";

export default function error(state = "", action = {}) {
  switch (action.type) {
    case ERROR:
      return action.payload;
    default:
      return state;
  }
}
