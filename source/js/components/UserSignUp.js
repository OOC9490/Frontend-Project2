import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class UserSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      email: "",
      password: "",
      suburb: ""
    };
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
      this.setState({
        modalOpen: !this.state.modalOpen
      });
    }

    handleSubmit(e) {
     e.preventDefault();

     const { email, password, suburb } = this.state;
     let signup = {
        email: email,
        password: password,
        suburb: suburb
      };

      console.log("Submitted");
      console.log(signup);
     };

     handleChange(e){
       this.setState({
         [e.target.name]: e.target.value
       });
   };

    render() {
    return (
        <div>
        <Button onClick={this.toggle} style={{ marginTop: '1em' }}>Signup</Button>
        <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Signup!!</ModalHeader>
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
                  <Label>Suburb</Label>
                  <Input
                  type="text"
                  name="suburb"
                  placeholder="Macquarie Links"
                  onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Image</Label>
                  <Input type="text" />
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
}

export default UserSignUp;
