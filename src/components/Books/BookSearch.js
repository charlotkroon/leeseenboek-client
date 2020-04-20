import React from "react";
import BookItem from "../BookItem/BookItem";
import BookSearchForm from "./BookSearchForm";

export default class BookSearch extends React.Component {
  state = { fetching: false, books: [], search: "" };

  search(keyword) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyword}`)
      .then((response) => response.json())
      .then((book) => {
        this.setState({ fetching: false, books: book.items });
      });
  }

  handleSearch = (keyword) => {
    this.setState({ ...this.state, fetching: true });
    this.search(keyword);
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    if (!this.state.books) {
      return "Wait for Booksearch on line 27";
    }

    if (!this.state.fetching) {
      return (
        <div>
          <BookSearchForm handleSearch={this.handleSearch} />
          {this.state.books.length > 0 && (
            <div>
              {this.state.books.map((book) => {
                return <BookItem key={book.id} book={book.volumeInfo} />;
              })}
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div>
          <h1>Books</h1>
          <h2>Loading books for you...</h2>
        </div>
      );
    }
  }
}
