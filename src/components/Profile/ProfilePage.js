import React from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import withStyles from "@material-ui/core/styles/withStyles";
// import Button from "@material-ui/core/Button";

class ProfilePage extends React.Component {
  render() {
    if (!this.props.user) {
      return <div>Please login or sign up first</div>;
    } else {
      return (
        <div>
          <h1>Hiiiiii {this.props.user.username}</h1>
        </div>
      );
    }
  }
}

// function mapStateToProps(state) {
//   return;
//   {
//     loggedInUser: state.loggedInUser;
//   }
// }

export default connect(null)(ProfilePage);
