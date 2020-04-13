import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Logout extends Component{
    constructor(props){
        super(props);

        this.logUserOut = this.logUserOut.bind(this);
    }


    logUserOut(){
        localStorage.removeItem("estoreUserCreds");
        this.props.updateUser();
    }

    render(){
        return(
            <Button 
                color="success"
                size="lg"
                style={{ display: "block", margin: "auto"}}
                onClick={ this.logUserOut } >
                Logout
            </Button>
        );
    }
};

export default Logout;
