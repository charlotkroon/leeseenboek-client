import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "../src/store/store";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";

const theme = createMuiTheme();

console.log("theme??", theme);

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
