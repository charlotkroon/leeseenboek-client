import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "typeface-roboto";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        {" "}
        <Typography variant="h6" className={classes.title}>
          LEES EEN BOEK
        </Typography>
        <Link to="/login">
          <Button color="inherit">Login</Button>
        </Link>
        <Link to="/signup">
          <Button color="inherit">Sign Up</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
