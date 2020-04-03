import React from "react";
import BookItem from "../BookItem/BookItem";
import BookSearchForm from "./BookSearchForm";

export default class BookSearch extends React.Component {
  state = { fetching: false, books: [], search: "" }; //fetching moet altijd op false in 't begin

  search(keyword) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyword}`)
      .then(response => response.json())
      .then(book => {
        this.setState({ fetching: false, books: book.items });
      });
  }

  handleSearch = keyword => {
    // roep zoek functie aan door child component booksearchForm
    this.setState({ ...this.state, fetching: true }); //dit is om eventueel een mooie loading indicator te tonen
    this.search(keyword); //roep de zoekfuntie aan!
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    // console.log("this state book?");
    // console.log(this.props);
    console.log("what is my state", this.state);

    if (!this.state.books) {
      return "wacht op book booksearch regel 29";
    }
    console.log("state variable");
    console.log(this.state);
    console.log("STATE BOOKS LENGTH?!?", this.state.books.length);
    if (!this.state.fetching) {
      console.log("AFTER FETCHINGG?!?", this.state.books.length);
      return (
        <div>
          <BookSearchForm handleSearch={this.handleSearch} />
          {this.state.books.length > 0 && (
            <div>
              {this.state.books.map(book => {
                console.log("what is booook jeroen?", book);
                return <BookItem key={book.id} book={book.volumeInfo} />; //this is where i display it
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
