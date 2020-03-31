import React from "react";

export default class Books extends React.Component {
  state = { fetching: false, books: [] };

  search = async keyword => {
    this.setState({ fetching: true });
    const response = await fetch ("https://www.googleapis.com/books/v1/volumes?q=quilting");

    const parsedData = await response.json()
    const resultData = [...parsedData.results];
    this.setState({ fetching: true, books: 

    
}

//map over title/url. 