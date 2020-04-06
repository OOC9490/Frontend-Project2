import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

class NavBar extends Component {
  render(){
      return (
        <header>
          <h1 className="logo">ok</h1>
          <ul className="nav">
            <Link to="/" className="navlink">Home</Link>
            <li className="navlink"><a href="#">Orders</a></li>
            <li className="navlink"><a href="#">Cart</a></li>
            <li className="navlink"><a href="#">Search</a></li>
          </ul>
        </header>
      );
  }
};

export default NavBar;
