import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class UserSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
      this.setState({
        modalOpen: !this.state.modalOpen
      });
    }
    render() {
    return (
        <div>
        <Button onClick={this.toggle}>Signup</Button>
        <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Signup!!</ModalHeader>
          <ModalBody>
          <Container>
              <Form>
                <FormGroup mb={2}>
                  <Label>Email</Label>
                  <Input type="email" placeholder="uwais@ga.co" />
                </FormGroup>
                <FormGroup>
                  <Label>Suburb</Label>
                  <Input type="text" placeholder="Macquarie Links" />
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
                  <Input type="password" placeholder="password" />
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

export default UserSignUp;
