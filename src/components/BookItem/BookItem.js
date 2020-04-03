import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  media: {
    height: 400
  },
  content: {
    flex: "1 0 auto"
  }
});

export function BookItem(props) {
  const classes = useStyles();
  if (!props.book) {
    return "wacht op book";
  }
  if (!props.book.imageLinks) {
    return "wacht op imagelinks";
  }
  if (!props.book.imageLinks.smallThumbnail) {
    return "wacht op imagelinks.smallThumbnail";
  }

  console.log("wat is imagethumbnail", props.book.imageLinks.smallThumbnail);

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <CardHeader title={props.book.title} />
          <CardMedia
            className={classes.media}
            component="img"
            image={props.book.imageLinks.smallThumbnail}
          />

          <Typography variant="body2" color="textSecondary" component="p">
            {" "}
            Author: {props.book.authors}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Publisher: {props.book.publisher}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Description: {props.book.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Categories: {props.book.categories}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}

export default BookItem;

// <CardMedia src={this.props.book.imageLinks.smallThumbnail} />
