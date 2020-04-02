import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/login/action";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
//step 1 import useState from react so i can use it

const style = {
  Paper: { padding: 50, marginTop: 25, marginBottom: 25 }
};
export default function BookSearchForm(props) {
  // const dispatch = useDispatch();

  const [keyword, set_keyword] = useState(""); //my first hook!

  return (
    <Grid container justify="center">
      <Paper style={style.Paper}>
        <Typography variant="h3" align="center">
          Books
        </Typography>
        <div>
          <form onSubmit={e => props.handleSearch(keyword)}>
            <label>
              <input
                type="text"
                name="search"
                placeholder="Search for your book here.."
                onChange={e => set_keyword(e.target.value)}
                value={keyword}
              />
            </label>
            <input type="submit" value="Search" />
          </form>
        </div>
      </Paper>
    </Grid>
  );
}
