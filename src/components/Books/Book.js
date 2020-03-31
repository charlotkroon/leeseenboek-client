import React from "react";

export default class Book extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <p>{this.props.}</p>
        <p>By: {this.props.quoteAuthor}</p>
      </div>
    );
  }
}