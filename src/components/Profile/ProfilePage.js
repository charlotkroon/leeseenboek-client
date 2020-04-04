import React from "react";
import { connect } from "react-redux";
import MyShelf from "../Shelf/MyShelf";

function ProfilePage(props) {
  return <MyShelf />;
}
export default connect(ProfilePage);
