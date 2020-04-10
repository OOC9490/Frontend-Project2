import React from "react";
import ReactDOM from "react-dom";

import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Navigation from "./Navigation";
import DashBoard from "./DashBoard";
import UserSignUp from "./UserSignUp";
import Orders from "./Orders";

// for development only
import { hot } from "react-hot-loader";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/dashboard/" exact component={DashBoard} />
        <Route path="/dashboard/:orders" component={Orders} />
      </div>
    </Router>
  );
}

export default hot(module)(App);
