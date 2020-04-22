import React from "react";
import { connect } from "react-redux";
import BookSearchForm from "../Books/BookSearchForm";
import { login } from "../../store/login/action";

class AddBookFormContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>Add a Book To Your Shelf</h1>
        <BookSearchForm />
      </div>
    );
  }
}

const mapDispatchToProps = { login };

export default connect(null, {})(AddBookFormContainer);
