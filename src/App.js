import React from "react";
import { Route } from "react-router-dom";
import SignupFormContainer from "./components/Signup/SignupFormContainer";
import LoginFormContainer from "./components/Login/LoginFormContainer";
import NavBar from "./components/NavBar/NavBar";
import BookSearch from "./components/Books/BookSearch";
import "./App.css";

function App() {
  return (
    <div className="wholePage">
      <div>
        <NavBar />
        <BookSearch />
        <Route path="/signup" component={SignupFormContainer} />
        <Route path="/login" component={LoginFormContainer} />
      </div>
    </div>
  );
}

export default App;

//boek zoeken in api
//isbn toevoegen bij de user.
//zoekveld maken --> search for harry potter --> alle boeken --> api clal naar database als je op boek klikt. array met boeken.
//superagent post --> auth request--> isbn nummer
//
