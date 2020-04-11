import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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

// import ajax functions
import { registerUser } from "../ajaxCalls";

class UserSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      name: "",
      email: "",
      image: "",
      password: "",
      address: "",
    };
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name, email, password, address, image } = this.state;
    let signup = {
      name,
      email,
      password,
      address,
      image,
    };

    //console.log("Submitted");
    //console.log(signup);

    registerUser(signup).then((res) => {
      if (res.success === true) {
        // grab jwt

        // forward to dash
        this.props.history.push("/dashboard");
      } else {
        //
      }
    });
  }

  handleChange(e) {
    //e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle} style={{ marginTop: "1em" }}>
          Signup
        </Button>
        <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Signup!!</ModalHeader>
          <ModalBody>
            <Container>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup mb={2}>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    onChange={this.handleChange}
                  />
                </FormGroup>
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
                  <Label>address</Label>
                  <Input
                    type="text"
                    name="address"
                    placeholder="Macquarie Links"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Image</Label>
                  <Input
                    type="text"
                    name="image"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup row>
                  <Label sm={2}>Image2</Label>
                  <Col sm={10}>
                    <Input type="file" />
                  </Col>
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
                  <Col sm={{ size: 20, offset: 5 }}>
                    <Button bsSize="lg">Submit</Button>
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

export default withRouter(UserSignUp);
