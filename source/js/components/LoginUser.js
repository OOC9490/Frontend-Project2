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
  ModalFooter,
} from "reactstrap";
import { loginUser } from "../ajaxCalls";

class LoginUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
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
    //console.log(user);

    localStorage.setItem("estoreUserCreds", JSON.stringify(user));
    let userDeets = localStorage.getItem("estoreUserCreds");
    console.log(JSON.parse(userDeets));
    // loginUser(user).then(res=> {
    //   if (res.success === true) {
    //     // grab jwt

    //     // forward to dash
    //     //this.props.history.push("/dashboard");
    //   } else {
    //     //
    //   }
    // })
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

export default LoginUser;
