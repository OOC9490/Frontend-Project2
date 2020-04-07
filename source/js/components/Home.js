import React from 'react';
import { Link } from 'react-router-dom';
import LoginUser from './LoginUser';
import UserSignUp from './UserSignUp';
// import styled from '@emotion/styled';
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

// const Button = styled.button`
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

const Home = () => {
  return (
    <div>
      <div>
        <Jumbotron>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1>WELCOME</h1>
                        <p>
                          <LoginUser />
                        </p>
                        <p>
                          <UserSignUp />
                        </p>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
      </div>
    </div>
  );
}

export default Home;
