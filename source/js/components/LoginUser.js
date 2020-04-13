import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Alert,
  ModalFooter,
} from "reactstrap";

import { withRouter } from "react-router-dom";
import { loginUser } from "../ajaxCalls";

class LoginUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      logInError: false,
      errorMsg: "",
      email: "",
      password: "",
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    localStorage.removeItem("estoreUserCreds");

    const { email, password } = this.state;
    let user = {
      email: email,
      password: password,
    };

    console.log("Submitted");

    loginUser(user)
      .then(({ success, token, userid }) => {
        if (success === true) {
          // grab jwt
          //store user credentials on successful login
          localStorage.setItem(
            "estoreUserCreds",
            JSON.stringify({ token, userid })
          );

          //retrieval sample
          //let userDeets = localStorage.getItem("estoreUserCreds");
          //console.log(JSON.parse(userDeets));

          //forward to dash
          this.props.history.push("/dashboard");
        }
      })
      .catch((err) => {
        this.setState({
          logInError: true,
          errorMsg: err.response.data.message,
        });
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  toggle() {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle} className="mb-3">
          Login
        </Button>
        <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
            <Container>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup mb={2}>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="uwais@ga.co"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup check row>
                  {this.state.logInError === true ? (
                    <Alert color="danger">{this.state.errorMsg}</Alert>
                  ) : null}

                  <Col>
                    <Button size="lg">Submit</Button>
                  </Col>
                </FormGroup>
              </Form>
            </Container>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default withRouter(LoginUser);
