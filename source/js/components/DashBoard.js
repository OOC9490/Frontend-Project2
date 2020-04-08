import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Col, CardDeck, Container } from 'reactstrap';

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: ["Store 1", "Store 2", "Store 3", "Store 4", "Store 5", "Store 6", "Store 7", "Store 8"],
    };
  }

  render() {
    return (
      <div>
      <Container fluid>
        <CardDeck>
          {this.state.stores.map(s => (
            <Col sm="3">
              <Card inverse style={{margin:20}}>
                <CardImg src="http://placekitten.com/100/100" alt="Card image cap" />
                <CardImgOverlay>
                  <CardTitle key={s}>{s}</CardTitle>
                </CardImgOverlay>
              </Card>
            </Col>
          ))}
          </CardDeck>
          </Container>
      </div>
    );
  }
};

export default DashBoard;
