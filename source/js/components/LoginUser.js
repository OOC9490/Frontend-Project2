import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const LoginUser = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

    return (
        <div>
        <Button onClick={toggle}>Login</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Login!!</ModalHeader>
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

export default LoginUser;
