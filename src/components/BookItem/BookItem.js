import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";

export class BookItem extends Component {
  render() {
    if (!this.props.book) {
      return "wacht op book";
    }
    if (!this.props.book.imageLinks) {
      return "wacht op imagelinks";
    }
    if (!this.props.book.imageLinks.smallThumbnail) {
      return "wacht op imagelinksthumbnail";
    }

    return (
      <Grid container justify="center">
        <Typography variant="h5" align="center">
          Result{" "}
        </Typography>
        <Grid item xs={12} justify="center">
          <Card>
            <CardHeader title={this.props.book.title} />
            <CardMedia>
              <img src={this.props.book.imageLinks.smallThumbnail} />
            </CardMedia>
            <CardContent justify="center">
              <Typography variant="body2" color="textSecondary" component="p">
                {" "}
                Author: {this.props.book.authors}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Publisher: {this.props.book.publisher}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Description: {this.props.book.description}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Categories: {this.props.book.categories}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default BookItem;
