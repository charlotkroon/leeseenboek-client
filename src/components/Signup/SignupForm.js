import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};

const SignupForm = props => {
  if (props.loggedInUser.length === 0) {
    return (
      <Grid container justify="center">
        <Paper style={style.Paper}>
          <form onSubmit={props.onSubmit}>
            <Grid item sm>
              <Typography variant="h3">Sign Up</Typography>
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
            </Grid>
            <Grid item sm>
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
            </Grid>
            <Grid item sm>
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
            </Grid>
            <Grid Item justify="centered">
              <Button variant="contained" color="primary" type="submit">
                Sign Up
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
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
