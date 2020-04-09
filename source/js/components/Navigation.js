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
    Button
} from 'reactstrap';

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
                <Navbar color="light" light expand="md" >
                    <Link to="/"><NavbarBrand>eStore</NavbarBrand></Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/" ><NavLink>Home</NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/dashboard" ><NavLink>Stores</NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/orders" ><NavLink>Cart</NavLink></Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation ;
