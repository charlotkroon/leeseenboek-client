import React from "react";
import { Route } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import "typeface-roboto";

export default props => (
  <AppBar position="static">
    <Toolbar>
      {" "}
      <Typography variant="headline" color="inherit">
        LEES EEN BOEK
      </Typography>
    </Toolbar>
  </AppBar>
);
