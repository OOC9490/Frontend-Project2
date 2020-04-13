import React, { Component } from "react";
import ReactDOM from "react-dom";

import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Navigation from "./Navigation";
import DashBoard from "./DashBoard";
import UserSignUp from "./UserSignUp";
import Orders from "./Orders";
import Search from "./Search";
import styled from "@emotion/styled";

// for development only
import { hot } from "react-hot-loader";

const AppWrapper = styled.div`
  height: 100vh;
  display: grid;
  background-image: url('https://i.imgur.com/2bWntlW.png');
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

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isAuth: false,
      currentUser: "",
      token: ""
    };

    this.detectLogInOut = this.detectLogInOut.bind(this);
  };

  componentDidMount() {
    const userLoggedIn = localStorage.getItem("estoreUserCreds");
    if ( userLoggedIn ){
      const { userid, token } = JSON.parse(userLoggedIn);
      this.setState({
        isAuth: true,
        currentUser: userid,
        token: token
      });
    }else{
      this.setState({
        isAuth: false,
        currentUser: "",
        token: ""
      });
    };
  };

  detectLogInOut(){
    const userLoggedIn = localStorage.getItem("estoreUserCreds");
    if ( userLoggedIn ){
      const { userid, token } = JSON.parse(userLoggedIn);
      this.setState({
        isAuth: true,
        currentUser: userid,
        token: token
      });
    }else{
      this.setState({
        isAuth: false,
        currentUser: "",
        token: ""
      });
    };
  };

  render(){
    return (
      <Router>
        <AppWrapper>
          <Navigation />
          <Route exact path="/" render={(props) => <Home {...props} userDetails={this.state} updateUser={ this.detectLogInOut } />} />
          <Route path="/dashboard/" exact render={(props) => <DashBoard {...props} userDetails={this.state} />} />
          <Route path="/search/" render={(props) => <Search {...props} userDetails={this.state} />} />
          <Route path="/dashboard/:orders" render={(props) => <Orders {...props} userDetails={this.state} />} />
          <Footer>We hope you enjoy shopping!</Footer>
        </AppWrapper>
      </Router>
    );
  }
}

export default hot(module)(App);
