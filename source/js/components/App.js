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
        <Route exact path="/" component={Home} />
        <Route path="/dashboard/" exact component={DashBoard} />
        <Route path="/dashboard/:orders" component={Orders} />
        <Footer>We hope you enjoy shopping!</Footer>
      </AppWrapper>
    </Router>
  );
}

export default hot(module)(App);
