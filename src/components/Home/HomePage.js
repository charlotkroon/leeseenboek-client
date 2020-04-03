import React from "react";
import Grid from "@material-ui/core/Grid";
import BookSearch from "../Books/BookSearch";
import Typography from "@material-ui/core/Typography";

export default function Homepage() {
  return (
    <Grid container justify="center">
      <BookSearch />
    </Grid>
  );
}
