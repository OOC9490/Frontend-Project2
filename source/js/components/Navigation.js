import React, { Component } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/core";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <Link to="/">
          <NavbarBrand>Delivree</NavbarBrand>
        </Link>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link to="/">
              <NavLink>Home</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/search">
              <NavLink>Search</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/dashboard">
              <NavLink>Stores</NavLink>
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
