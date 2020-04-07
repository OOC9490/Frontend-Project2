import React, { Component } from 'react';

class StoreSignUp extends Component {
  render(){
    return (
        <div>
            <form>
              <label>Store Name:</label>
              <input type="text" value="Uwais" />

              <label>Email:</label>
              <input type="text" value="bob@ga.co" />

              <label>Suburb:</label>
              <input type="text" value="Macqurie Links" />

              <label>Logo:</label>
              <input type="text" value="https://.." />

              <label>Phone:</label>
              <input type="text" value="045392..." />

              <label>Password:</label>
              <input type="text" value="secret" />

              <input type="submit" value="Submit" />
            </form>
        </div>
    );
  }
}

export default StoreSignUp;
