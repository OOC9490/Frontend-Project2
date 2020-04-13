import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginUser from './LoginUser';
import UserSignUp from './UserSignUp';
import styled from '@emotion/styled';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Row,
    Col
} from 'reactstrap';

const Jumbotron = styled.div`
  background-color: lightgray;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Home extends Component {
  render() {
    return (
          <Jumbotron>
                <Row>
                    <Col className="text-center">
                        <h1>WELCOME</h1>
                          <LoginUser />
                          <UserSignUp />
                    </Col>
                </Row>
          </Jumbotron>
    );
  }
}

export default Home;
