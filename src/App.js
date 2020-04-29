import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Layouts/Header";
import SignupFormContainer from "./components/Signup/SignupFormContainer";
import LoginFormContainer from "./components/Login/LoginFormContainer";
import Footer from "./components/Layouts/Footer";
import Homepage from "./components/Home/HomePage";
import About from "./components/About/About";
import ProfilePage from "./components/Profile/ProfilePage";
import Shelf from "./components/Shelf/Shelf";

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={Homepage} />
      <Route path="/signup" component={SignupFormContainer} />
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/about" component={About} />
      <Route path="/profilepage" component={ProfilePage} />
      <Route path="/shelf" component={Shelf} />
      <Footer />
    </div>
  );
}

export default App;
