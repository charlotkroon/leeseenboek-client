import React from "react";
import { connect } from "react-redux";

const SignupForm = props => {
  if (props.loggedInUser.length === 0) {
    return (
      <div>
        <form onSubmit={props.onSubmit}>
          <h4>Sign Up: </h4>
          <label>
            username:
            <input
              type="text"
              name="username"
              value={props.values.username}
              onChange={props.onChange}
            />
          </label>
          <label>
            E-mail:
            <input
              type="text"
              name="email"
              value={props.values.email}
              onChange={props.onChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={props.values.password}
              onChange={props.onChange}
            />
          </label>
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h2>You are logged in as {props.loggedInUser.username}</h2>
        <button>Oh! Thanks</button>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser
  };
}

export default connect(mapStateToProps)(SignupForm);
