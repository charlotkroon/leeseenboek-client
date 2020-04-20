import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },

  media: {
    height: 400,
  },
});

export function BookItem(props) {
  const classes = useStyles();
  if (!props.book) {
    return "Wait for book";
  }
  if (!props.book.imageLinks) {
    return "Wait for imagelinks";
  }
  if (!props.book.imageLinks.smallThumbnail) {
    return "Wait for imagelinks.smallThumbnail";
  }

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

          <Typography variant="body2" color="secondary" component="p">
            {" "}
            Author: {props.book.authors}
          </Typography>
          <Typography variant="body2" color="secondary" component="p">
            Publisher: {props.book.publisher}
          </Typography>
          <Typography variant="body2" color="secondary" component="p">
            Description: {props.book.description}
          </Typography>
          <Typography variant="body2" color="secondary" component="p">
            Categories: {props.book.categories}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}

export default BookItem;
