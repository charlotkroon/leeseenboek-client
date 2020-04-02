import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

const LoginForm = props => {
  if (props.loggedInUser.length === 0) {
    return (
      <Grid container>
        <form onSubmit={props.onSubmit}>
          <Grid item sm>
            <Paper>
              <Typography variant="h3">Login</Typography>

              <TextField
                required
                id="standard-basic"
                label="username"
                name="username"
                justify="center"
                placeholder="Username"
                value={props.values.username}
                onChange={props.onChange}
              />
            </Paper>
          </Grid>
          <Grid item sm>
            <Paper>
              <TextField
                required
                id="standard-basic"
                label="email"
                name="email"
                justify="center"
                placeholder="E-mail"
                value={props.values.email}
                onChange={props.onChange}
              />
            </Paper>
          </Grid>
          <Grid item sm>
            <Paper>
              <TextField
                required
                id="standard-basic"
                label="password"
                name="password"
                justify="center"
                placeholder="Password"
                value={props.values.password}
                onChange={props.onChange}
              />
            </Paper>
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
