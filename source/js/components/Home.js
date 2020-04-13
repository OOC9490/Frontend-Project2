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
  background-image: url('https://i.imgur.com/kxAIyoq.jpg');
  background-size: cover;
`;

const Wrapper = styled.div`
  background: linear-gradient(135deg, rgba(44,50,55,0.8) 22%, rgba(82,94,103,0.8) 100%);
  padding: 5em;
  border-radius: 1.5em;
  color: white;
`;

class Home extends Component {
  render() {
    return (
          <Jumbotron>
                <Row>
                    <Col className="text-center">
                      <Wrapper>
                        <img src="https://i.imgur.com/8UhPnoW.png" style={{ marginBottom: "2em", width: "15vh" }}/>
                          <LoginUser />
                          <UserSignUp />
                      </Wrapper>
                    </Col>
                </Row>
          </Jumbotron>
    );
  }
}

export default Home;
