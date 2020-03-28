import request from "superagent";

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const ALL_USERS = "ALL_USERS";
export const ERROR = "ERROR";

const baseUrl = "http://localhost:4000";

function allUsers(payload) {
  return {
    type: ALL_USERS,
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

function userLogout(payload) {
  return {
    type: USER_LOGOUT,
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

//LOGIN
export const login = (username, password) => (dispatch, getState) => {
  const state = getState();
  request
    .post(`${baseUrl}/login`)
    .set("Authorization", `Bearer ${state.loggedInUser.jwt}`)
    .send({ username, password })
    .then(response => {
      const { jwt, username, id } = response.body;

      const action = userLogin({ jwt, username, id });
      dispatch(action);
    })
    .catch(errorResponse => {
      console.error(errorResponse);
      const action = error("Wrong password or username. Please try again.");
      dispatch(action);
    });
};

//LOG UIT
export const logout = () => dispatch => {
  const action = userLogout({});
  dispatch(action);
};
