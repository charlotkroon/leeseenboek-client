import React from "react";
import BookItem from "../BookItem/BookItem";

export default class BookSearch extends React.Component {
  state = { fetching: true, books: [], search: "" };

  componentDidMount() {
    fetch("https://www.googleapis.com/books/v1/volumes?q=search+terms")
      .then(response => response.json())
      .then(book => {
        this.setState({ fetching: false, books: book.items });
      });
  }

  handleSearch = () => {
    this.setState({ ...this.state, fetching: true });
    this.componentDidMount();
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
          <h1>Books!</h1>
          <div>
            <form onSubmit={this.handleSearch}>
              <label>
                <input
                  type="text"
                  name="search"
                  placeholder="Search for your book here.."
                  onChange={this.handleChange}
                  value={this.state.search}
                />
              </label>
              <input type="submit" value="Search" />
            </form>
          </div>

          {this.state.books.length > 0 && (
            <div>
              {this.state.books.map(book => {
                console.log("what is booook jeroen?", book);
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
