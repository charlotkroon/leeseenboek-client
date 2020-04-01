import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../styling/loginForm.css";

const LoginForm = props => {
  if (props.loggedInUser.length === 0) {
    return (
      <div className="headLogin">
        <form onSubmit={props.onSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={props.values.username}
              onChange={props.onChange}
            />
          </label>
          <label>
            E-mail:
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              value={props.values.email}
              onChange={props.onChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={props.values.password}
              onChange={props.onChange}
            />
          </label>
          <input type="submit" value="Login" />
        </form>
        {props.error.length > 0 && <p>{props.error}</p>}
      </div>
    );
  } else {
    return (
      <div>
        <h2>Hey, welcome {props.loggedInUser.username}</h2>

        <Link to={"/"}>Take me back</Link>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    error: state.error,
    loggedInUser: state.loggedInUser
  };
}

export default connect(mapStateToProps)(LoginForm);
