import React, { Component } from "react";

export class BookItem extends Component {
  render() {
    console.log("What is the book prop??", this.props.book);
    console.log("Tell me about the imageLinks", this.props.book.imageLinks);
    console.log(
      "Tell me about the imageLinks.thumbnail",
      this.props.book.imageLinks.thumbnail
    );
    return (
      <div>
        <div>
          <img src={this.props.book.imageLinks.thumbnail} />
        </div>
        <div>
          {this.props.book.title && (
            <div>
              <h3>Book Title: </h3> {this.props.book.title}
            </div>
          )}
          {this.props.book.authors && (
            <div>
              <h3>Author: </h3>
              {this.props.book.authors[0]}
            </div>
          )}
          {this.props.book.publisher && (
            <div>
              <h3>Publisher: </h3> {this.props.book.publisher}
            </div>
          )}
          {this.props.book.publishedDate && (
            <div>
              <h3>Originally Published: </h3> {this.props.book.publishedDate}
            </div>
          )}
          {this.props.book.description && (
            <div>
              <h3>Description: </h3> {this.props.book.description}
            </div>
          )}
          {this.props.book.pageCount && (
            <div>
              <h3>Number of Pages: </h3> {this.props.book.pageCount}
            </div>
          )}
          {this.props.book.categories && (
            <div>
              <h3>Categories</h3>: {this.props.book.categories[0]}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default BookItem;
