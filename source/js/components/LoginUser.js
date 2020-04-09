import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class LoginUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  };

  render() {
    return (
        <div>
        <Button onClick={ this.toggle } className="mb-3">Login</Button>
        <Modal isOpen={ this.state.isOpen } toggle={ this.toggle } >
          <ModalHeader toggle={ this.toggle }>Login!!</ModalHeader>
          <ModalBody>
          <Container>
              <Form>
                <FormGroup mb={2}>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    placeholder="uwais@ga.co"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    placeholder="password"
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
};

export default LoginUser;
