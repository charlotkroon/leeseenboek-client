import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AddBookFormContainer from "../AddBook/AddBookFormContainer";
// import PropTypes from "prop-types";
// import withStyles from "@material-ui/core/styles/withStyles";
// import Button from "@material-ui/core/Button";

class ProfilePage extends React.Component {
  render() {
    if (!this.props.user) {
      return (
        <div>
          <h4>This page is only for useres. Please login or sign up first</h4>
          <Link to="/login">Login</Link>
          <br />
          <Link to="/signup">Sign Up</Link>
        </div>
      );
    } else {
      return (
        <div>
          <h4>Hi, {this.props.loggedInUser.username}</h4>
          <AddBookFormContainer />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    error: state.error,
    loggedInUser: state.loggedInUser,
  };
}

export default connect(mapStateToProps)(ProfilePage);
