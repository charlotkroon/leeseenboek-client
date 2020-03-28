import request from "superagent";

export const NEW_USER = "NEW_USER";

const baseUrl = "http://localhost:4000";

function newUser(payload) {
  return {
    type: NEW_USER,
    payload
  };
}

//CREATE NEW USER

export const createUser = data => dispatch => {
  request
    .post(`${baseUrl}/users`)
    .send(data)
    .then(response => {
      const user = response.body;
      const action = newUser(user);
      dispatch(action);
    })
    .catch(console.error);
};
