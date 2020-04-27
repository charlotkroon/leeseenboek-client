import React from "react";
import Book from "../Books/Book";

class MyShelf extends React.Component {
  render() {
    return (
      <div>
        <h2>My Shelf</h2>
        <Book />
      </div>
    );
  }
}

export default MyShelf;
