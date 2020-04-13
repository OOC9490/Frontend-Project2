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
import styled from "@emotion/styled";

// for development only
import { hot } from "react-hot-loader";
>>>>>>> 8feccefd32070fd477fb0bc2fc187538a8f946e9

const AppWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template:
    [row1-start] "header" 50px [row1-end]
    [row2-start] "main" auto[row2-end]
    [row3-start] "footer" 50px [row1-end]
    / 100vw;
  align-items: center;
`;

const Footer = styled.div`
  background-color: #333a40;
  padding: 1rem;
  color: #fff;
  font-size: 1.25em;
`;

function App() {
  return (
    <Router>
      <AppWrapper >
        <Navigation />
<<<<<<< HEAD
          <Route exact path="/" component={ Home } />
          <Route path="/dashboard/" exact component={ DashBoard } />
          <Route path="/dashboard/:orders" component={ Orders } />
=======
        <Route exact path="/" component={Home} />
        <Route path="/dashboard/" exact component={DashBoard} />
        <Route path="/dashboard/:orders" component={Orders} />
<<<<<<< HEAD
>>>>>>> 8feccefd32070fd477fb0bc2fc187538a8f946e9
      </div>
=======
        <Footer>We hope you enjoy shopping!</Footer>
      </AppWrapper>
>>>>>>> z-ajax
    </Router>
  );
}

export default hot(module)(App);
