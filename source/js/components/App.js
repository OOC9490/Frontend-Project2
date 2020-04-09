import React from "react";
import ReactDOM from "react-dom";

import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Navigation from "./Navigation";
import LoginUser from "./LoginUser";
import DashBoard from "./DashBoard";
import UserSignUp from "./UserSignUp";
import StorePage from "./StorePage";

import { hot } from "react-hot-loader";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Home} />
        {/*<Route path="/userlogin" component={ LoginUser } />*/}
        <Route path="/dashboard" component={DashBoard} />
        {/*<Route path="/usersignup" component={ UserSignUp } />*/}
        <Route path="/dashboard/:storepage" component={StorePage} />
      </div>
    </Router>
  );
}

export default hot(module)(App);
