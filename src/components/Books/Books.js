import React from "react";
import BookItem from "../BookItem/BookItem";

export default class Books extends React.Component {
  state = { fetching: true, books: [] };

  componentDidMount() {
    fetch("https://www.googleapis.com/books/v1/volumes?q=quilting")
      .then(response => response.json())
      .then(book => {
        this.setState({ fetching: false, books: book.items });
      });
  }

  render() {
    // console.log("this state book?");
    // console.log(this.props);
    console.log("state variable");
    console.log(this.state);
    if (!this.state.fetching) {
      return (
        <div>
          {this.state.books.length > 0 && (
            <div>
              {this.state.books.map(book => (
                <BookItem key={book.id} book={book.volumeInfo} />
              ))}
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

//   componentDidMount() {
//     fetch("https://www.googleapis.com/books/v1/volumes?q=quilting")
//       .then(res => res.json())
//       .then(book => {
//         this.setState({ fetching: false, books: book.results });
//       });
//   }

//   render() {
//     if (!this.state.fetching) {
//       return (
//         <div>
//           <h1>Books</h1>
//

//             </Book>)}
//         </div>
//       );
//     }
//   }
// }
