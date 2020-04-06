import React, { Component } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/core";
import "./navbar.scss";

//css values
const header_bg_color = "grey";

//css
const Header = css`
  /* height: 80px; */
  background-color: ${header_bg_color};
`;

const Navbar = css`
  padding-top: 24px;
  display: flex;
  /* place space between each element*/
  justify-content: space-between;
  /*align children properly along the cross axis of the navigation bar*/
  align-items: center;
`;

class NavBar extends Component {
  render() {
    return (
      <header css={Header}>
        <ul css={Navbar}>
          <Link to="/" className="navlink">
            Logo
          </Link>
          <Link to="/" className="navlink">
            Home
          </Link>
          <li className="navlink">
            <a href="#">Orders</a>
          </li>
          <li className="navlink">
            <a href="#">Cart</a>
          </li>
          <li className="navlink">
            <a href="#">Search</a>
          </li>
        </ul>
      </header>
    );
  }
}

export default NavBar;
