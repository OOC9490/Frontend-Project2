<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Navigation from './Navigation';
import DashBoard from './DashBoard';
import UserSignUp from './UserSignUp';
import Orders from './Orders';
=======
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
>>>>>>> 8feccefd32070fd477fb0bc2fc187538a8f946e9

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
<<<<<<< HEAD
          <Route exact path="/" component={ Home } />
          <Route path="/dashboard/" exact component={ DashBoard } />
          <Route path="/dashboard/:orders" component={ Orders } />
=======
        <Route exact path="/" component={Home} />
        <Route path="/dashboard/" exact component={DashBoard} />
        <Route path="/dashboard/:orders" component={Orders} />
>>>>>>> 8feccefd32070fd477fb0bc2fc187538a8f946e9
      </div>
    </Router>
  );
}

export default hot(module)(App);
