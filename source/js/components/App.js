import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Navigation from './Navigation';
import DashBoard from './DashBoard';
import UserSignUp from './UserSignUp';
import StorePage from './StorePage';
import Orders from './Orders';

function App() {
return (
  <Router>
    <div className="App">
      <Navigation />
        <Route exact path="/" component={ Home } />
        <Route path="/dashboard" component={ DashBoard } />
        <Route path="/orders" component={ Orders } />
        <Route path="/dashboard/:storepage" component={ StorePage } />
    </div>
  </Router>
);
}

export default App;
