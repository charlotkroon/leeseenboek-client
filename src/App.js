import React from "react";
import { Route } from "react-router-dom";
import LoginFormContainer from "./components/Login/LoginFormContainer";

function App() {
  return (
    <div>
      <h1>HALLO</h1>
      <Route path="/login" component={LoginFormContainer} />
    </div>
  );
}

export default App;
