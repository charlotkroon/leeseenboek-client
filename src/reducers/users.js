import { ALL_USERS, NEW_USER } from "../actions/users";

export default function(state = [], action = {}) {
  switch (action.type) {
    case ALL_USERS:
      return action.payload;
    case NEW_USER:
      return [...state, action.payload];
    default:
      return state;
  }
}
