import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};

export function About() {
  return (
    <Grid container justify="center">
      <Paper style={style.Paper}>
        <Typography variant="body2" color="secondary" component="p">
          LEES EEN BOEK is an online community created to inspire people to read
          more books. Users can share what they are reading with their friends,
          and discover new books.
        </Typography>
      </Paper>
    </Grid>
  );
}

export default About;
