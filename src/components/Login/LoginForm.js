import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";


const LoginForm = props => {
  if (props.loggedInUser.length === 0) {
    return (
      <Grid container>
        <form onSubmit={props.onSubmit}>
          <Grid item>
            <Typography variant="h3">Login</Typography>
            Username:
            <TextField
              required
              id="standard-basic"
              label="username"
              name="username"
              placeholder="Username"
              value={props.values.username}
              onChange={props.onChange}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="standard-basic"
              label="email"
              name="email"
              placeholder="E-mail"
              value={props.values.email}
              onChange={props.onChange}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="standard-basic"
              label="password"
              name="password"
              placeholder="Password"
              value={props.values.password}
              onChange={props.onChange}
            />
          </Grid>
          <input type="submit" value="Login" />
        </form>
        {props.error.length > 0 && <p>{props.error}</p>}
      </Grid>
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
