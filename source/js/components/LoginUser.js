import React, { Component } from 'react';

class LoginUser extends Component {
  render(){
    return (
        <div>
            <form>
              <label>User:</label>
              <input type="text" value="Submit" />
              <input type="submit" value="Submit" />
            </form>
        </div>
    );
  }
}

export default LoginUser;
