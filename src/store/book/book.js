import request from "superagent";

export const ADD_BOOK = "ADD_BOOK";

const baseUrl = "http://localhost:4000";

function addBook(payload) {
  return {
    type: ADD_BOOK,
    payload,
  };
}
