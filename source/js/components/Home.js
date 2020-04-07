import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Button = styled.button`
  padding: 15px;
  background-color: hotpink;
  border: 2px solid hotpink;
  margin: 5px;
  font-size: 17px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    background-color: white;
    color: hotpink;
    border: 2px solid hotpink;
  }
`

const Home = () => {
  return (
    <div>
      <div>
        <h1>Customer</h1>
        <Link to="/userlogin" ><Button>Login</Button></Link>
        <Link to="/usersignup" ><Button>Signup</Button></Link>
      </div>
      <div>
        <h1>Supplier</h1>
        <Link to="/loginstore" ><Button>Login</Button></Link>
        <Link to="/storesignup" ><Button>Signup</Button></Link>
      </div>
    </div>
  );
}

export default Home;
