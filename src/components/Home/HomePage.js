import React from "react";
import Grid from "@material-ui/core/Grid";
import BookSearch from "../Books/BookSearch";
import Shelf from "../Shelf/Shelf";
import Typography from "@material-ui/core/Typography";
import ProfilePage from "../Profile/ProfilePage";

export default function Homepage() {
  return (
    <Grid container justify="center">
      <BookSearch />
      <ProfilePage />
    </Grid>
  );
}
