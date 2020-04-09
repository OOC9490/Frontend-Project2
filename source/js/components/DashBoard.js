import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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

const AJAX_URL = `https://vast-tor-12475.herokuapp.com`;

class DashBoard extends Component {
  state = {
    stores: [],
  };

  // Get stores
  async fetchStores() {
    const stores = await axios.get(AJAX_URL + `/sellers`);
    this.setState({
      stores: stores.data.data,
    });
  }

  componentDidMount() {
    this.fetchStores();
  }

  render() {
    return (
      <div>
        <Container fluid>
          <CardDeck>
            {this.state.stores.map((s) => (
              <Col sm="3">
                <Card inverse style={{ margin: 20 }}>
                  <CardImg
                    src={
                      s.image !== ""
                        ? s.image
                        : "http://placekitten.com/100/150"
                    }
                    alt="Card image cap"
                  />
                  <CardImgOverlay>
                    <CardTitle key={s._id}>
                      <Link to={`/dashboard/${s.name}`}>{s.name}</Link>
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
