import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginUser from './LoginUser';
import UserSignUp from './UserSignUp';
import Logout from './Logout';
import styled from '@emotion/styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { checkUser } from '../ajaxCalls'; 
import {
    Row,
    Col
} from 'reactstrap';
import { prop } from 'ramda';
import { filter } from 'underscore';

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
  constructor(props){
    super(props);

    this.state = {}

    this.setUser = this.setUser.bind(this);
  };

  async setUser(userId, isAuth){
    if ( isAuth ){
      const user = await checkUser();
      const currUser = filter(user.data, (user) => user._id === userId )[0];
      this.setState({...currUser});
    } else {
      return;
    }
  }

  render() {
    const { currentUser, isAuth, token } = this.props.userDetails;
    this.setUser(currentUser, isAuth);
    const guestLinks = (
      <div>
        <LoginUser updateUser={() => this.props.updateUser() } />
        <UserSignUp updateUser={() => this.props.updateUser() } />
      </div>
    );
    
    const authLinks = <Logout updateUser={() => this.props.updateUser() }/>;

    return (
          <Jumbotron>
                <Row>
                    <Col className="text-center">
                      <Wrapper>
                        <h1>Welcome, { isAuth ? this.state.name : "Guest"} </h1>
                        <img src="https://i.imgur.com/8UhPnoW.png" style={{ marginBottom: "2em", width: "15vh" }}/>
                          { isAuth ? authLinks : guestLinks }
                      </Wrapper>
                    </Col>
                </Row>
          </Jumbotron>
    );
  }
}

export default Home;
