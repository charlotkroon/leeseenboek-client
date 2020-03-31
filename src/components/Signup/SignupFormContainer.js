import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../../store/signup/action";
import { getUsers } from "../../store/login/action";
import Signup from "./SignupForm";
import { Redirect } from "react-router-dom";

class SignupFormContainer extends Component {
  state = { username: "", email: "", password: "", redirect: false };
  componentDidMount() {
    this.props.getUsers();
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();

    this.props.createUser(this.state);

    this.setState({
      username: "",
      email: "",
      password: "",
      redirect: true
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
    return (
      <Signup
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

const mapDispatchToProps = { getUsers, createUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupFormContainer);
