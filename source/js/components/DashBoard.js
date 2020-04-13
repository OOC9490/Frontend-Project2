import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from '@emotion/styled';
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

import { getAllStores } from "../ajaxCalls";

const TitleBg = styled.div`
  background-color: rgba(255,255,255,0.5);
  border-radius: 2px;
  padding: 5px;
`;

class DashBoard extends Component {
  state = {
    stores: [],
  };

  async componentDidMount() {
    // async await method
    const stores = await getAllStores();
    this.setState(
      {
        stores: stores.data,
      },
      () => {
        // for testing
        //console.log(this.state.stores[0])
      }
    );
  }

  render() {
    return (
      <div>
        <Container fluid>
          <CardDeck>
            {this.state.stores.map(({ name, image, slug }, i) => (
              <Col sm="3">
                <Card inverse
                  style={{ margin: 20, borderRadius: 15, boxShadow: "0 0 10px lightgray" }}
                >
                  <CardImg
                    style={{ borderRadius: 15, height: 300, opacity: 0.7}}
                    src={
                      image !== ""
                        ? image
                        : "https://images.pexels.com/photos/890507/pexels-photo-890507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    }
                    alt="Card image cap"
                  />
                  <CardImgOverlay>
                  <TitleBg>
                    <CardTitle
                      key={i}
                      style={{textAlign: "center"}}
                    >
                      <Link
                        style={{ fontSize: 30, color:"#000"}}
                        to={`/dashboard/retailer?name=${slug}`}
                      >
                        {name}
                      </Link>
                    </CardTitle>
                    </TitleBg>
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
