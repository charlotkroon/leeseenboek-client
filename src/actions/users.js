import request from "superagent";

export const USER_LOGIN = "USER_LOGIN";
export const ALL_USERS = "ALL_USERS";
export const NEW_USER = "NEW_USER";
export const ERROR = "ERROR";

const baseUrl = "http://localhost:4000";

function allUsers(payload) {
  return {
    type: ALL_USERS,
    payload
  };
}
function newUser(payload) {
  return {
    type: NEW_USER,
    payload
  };
}

function userLogin(payload) {
  return {
    type: USER_LOGIN,
    payload
  };
}

function error(payload) {
  return {
    type: ERROR,
    payload
  };
}

//GET ALL USERS
export const getUsers = () => (dispatch, getState) => {
  const state = getState();
  const { users } = state;
  if (!users.length) {
    request(`${baseUrl}/users`)
      .then(response => {
        const action = allUsers(response.body);

        dispatch(action);
      })
      .catch(console.error);
  }
};

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

//LOGIN
export const login = (email, password) => (dispatch, getState) => {
  const state = getState();
  request
    .post(`${baseUrl}/login`)
    .set("Authorization", `Bearer ${state.loggedInUser.jwt}`)
    .send({ email, password })
    .then(response => {
      const { jwt, email, id } = response.body;

      const action = userLogin({ jwt, email, id });
      dispatch(action);
    })
    .catch(errorResponse => {
      console.error(errorResponse);
      const action = error("Wrong password or email. Please try again.");
      dispatch(action);
    });
};
