import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  Col,
  CardDeck,
  Container,
} from "reactstrap";

class DashBoard extends Component {
  state = {
    stores: [
      "Store 1",
      "Store 2",
      "Store 3",
      "Store 4",
      "Store 5",
      "Store 6",
      "Store 7",
      "Store 8",
    ],
  };

  render() {
    return (
      <div>
        <Container fluid>
          <CardDeck>
            {this.state.stores.map((s) => (
              <Col sm="3">
                <Card inverse style={{ margin: 20, borderRadius: 15 }}>
                  <CardImg
                    style={{ borderRadius: 15 }}
                    src="https://images.pexels.com/photos/890507/pexels-photo-890507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="Card image cap"
                  />
                  <CardImgOverlay>
                    <CardTitle key={s}>
                      <Link style={{ fontSize: 40 }} to={`/dashboard/${s}`}>{s}</Link>
                    </CardTitle>
                  </CardImgOverlay>
                </Card>
              </Col>
            ))}
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default DashBoard;
