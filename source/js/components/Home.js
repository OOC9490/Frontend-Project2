import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginUser from './LoginUser';
import UserSignUp from './UserSignUp';
import styled from '@emotion/styled';
import 'bootstrap/dist/css/bootstrap.min.css';

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

// const ButtonEmotion = styled.button`
//   padding: 15px;
//   background-color: hotpink;
//   border: 2px solid hotpink;
//   margin: 5px;
//   font-size: 17px;
//   border-radius: 4px;
//   color: black;
//   font-weight: bold;
//   &:hover {
//     background-color: white;
//     color: hotpink;
//     border: 2px solid hotpink;
//   }
// `

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Jumbotron>
                <Row>
                    <Col className="text-center">
                        <h1>WELCOME</h1>
                          <LoginUser />
                          <UserSignUp />
                    </Col>
                </Row>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default Home;
