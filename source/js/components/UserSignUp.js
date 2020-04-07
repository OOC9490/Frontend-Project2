import React, { Component } from 'react';

class UserSignUp extends Component {
  render(){
    return (
        <div>
            <form>
              <label>Name:</label>
              <input type="text" value="Uwais" />

              <label>Suburb:</label>
              <input type="text" value="Macqurie Links" />

              <label>Email:</label>
              <input type="text" value="bob@ga.co" />

              <label>Avatar:</label>
              <input type="text" value="https://.." />

              <label>Password:</label>
              <input type="text" value="secret" />

              <input type="submit" value="Submit" />
            </form>
        </div>
    );
  }
}

export default UserSignUp;
