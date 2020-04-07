import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { css } from "@emotion/core";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';

// import "./navbar.scss";

// css values //
// const header_bg_color = "grey";

// // css //
//   const Header = css`
//   background-color: ${header_bg_color};
//   width: 100%;
//   height: 70px;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
// `;
//
// const Navbar = css`
//   padding-top: 24px;
//   display: flex;
//   /* place space between each element*/
//   justify-content: space-between;
//   /*align children properly along the cross axis of the navigation bar*/
//   align-items: center;
//   width: 30%;
//   list-style: none;
//   color: white;
//   font-size: 1.2em;
// `;
//
// const navlink = css`
//   text-decoration: none;
//   color: white;
//   &:hover {
//     color: black;
//   }
// `;

// Components //
class Navigation extends Component {
  constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Link to="/"><NavbarBrand>eStore</NavbarBrand></Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/dashboard" ><NavLink>Stores</NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/" ><NavLink>Orders</NavLink></Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }


  // render() {
  //   return (
  //     <header css={Header}>
  //       <ul css={Navbar}>
  //         <Link to="/" css={navlink}>
  //           Logo
  //         </Link>
  //         <Link to="/" css={navlink}>
  //           Home
  //         </Link>
  //         <li css={navlink}>
  //           <a href="#">Orders</a>
  //         </li>
  //         <li css={navlink}>
  //           <a href="#">Cart</a>
  //         </li>
  //         <li css={navlink}>
  //           <a href="#">Search</a>
  //         </li>
  //       </ul>
  //     </header>
  //   );
  // }
}

export default Navigation ;
