import React, { Component } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/core";
// import "./navbar.scss";

// css values //
const header_bg_color = "grey";

// css //
  const Header = css`
  background-color: ${header_bg_color};
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Navbar = css`
  padding-top: 24px;
  display: flex;
  /* place space between each element*/
  justify-content: space-between;
  /*align children properly along the cross axis of the navigation bar*/
  align-items: center;
  width: 30%;
  list-style: none;
  color: white;
  font-size: 1.2em;
`;

const navlink = css`
  text-decoration: none;
  color: white;
  &:hover {
    color: black;
  }
`;

// Components //
class NavBar extends Component {
  render() {
    return (
      <header css={Header}>
        <ul css={Navbar}>
          <Link to="/" css={navlink}>
            Logo
          </Link>
          <Link to="/" css={navlink}>
            Home
          </Link>
          <li css={navlink}>
            <a href="#">Orders</a>
          </li>
          <li css={navlink}>
            <a href="#">Cart</a>
          </li>
          <li css={navlink}>
            <a href="#">Search</a>
          </li>
        </ul>
      </header>
    );
  }
}

export default NavBar;
