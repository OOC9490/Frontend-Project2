import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import NavBar from './NavBar';
import LoginUser from './LoginUser';
import DashBoard from './DashBoard';
import LoginStore from './LoginStore';
import UserSignUp from './UserSignUp';
import StoreSignUp from './StoreSignUp';

function App() {
return (
  <Router>
    <div className="App">
      <NavBar />
      <Route exact path="/" component={ Home } />
      <Route path="/userlogin" component={ LoginUser } />
      <Route path="/dashboard" component={ DashBoard } />
      <Route path="/loginstore" component={ LoginStore } />
      <Route path="/usersignup" component={ UserSignUp } />
      <Route path="/storesignup" component={ StoreSignUp } />
    </div>
  </Router>
);
}

export default App;
