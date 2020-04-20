import React from "react";
import Book from "../Books/Book";

class Shelf extends React.Component {
  render() {
    return (
      <div>
        <h2>Currently Reading</h2>
        <div>
          <ol>
            {/*List 3 shelves*/}
            <Book />
            <Book />
            <Book />
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
