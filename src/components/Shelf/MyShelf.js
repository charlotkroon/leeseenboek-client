import React from "react";
import Book from "../Books/Book";

class MyShelf extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.heading}</h2>
        {this.props.books.map((book) => (
          <Book
            changeShelf={this.props.changeShelf}
            book={book}
            key={book.id}
          />
        ))}
      </div>
    );
  }
}

export default MyShelf;
