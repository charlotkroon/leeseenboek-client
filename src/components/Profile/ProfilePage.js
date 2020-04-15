import React from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import withStyles from "@material-ui/core/styles/withStyles";
// import Button from "@material-ui/core/Button";

class ProfilePage extends Component {
  render() {
    if (!this.props.user) {
      return <div>Please login or sign up first</div>;
    } else {
      return <div>This is your profile page</div>;
    }
  }
}

function mapStateToProps(state) {
  return;
  {
    loggedInUser: state.loggedInUser;
  }
}

export default connect(mapStateToProps)(ProfilePage);
