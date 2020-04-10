import React, { Component } from "react";
import { Jumbotron, Container, ListGroup, ListGroupItem } from "reactstrap";
import axios from "axios";

const AJAX_URL = `https://vast-tor-12475.herokuapp.com`;
const USER_id = "5e8d9dafc98eb40f5cb15814";

class StorePage extends Component {
  state = {
    storeItems: [],
  };

  // Get stores
  async fetchItems() {
    let items = await axios.get(AJAX_URL + `/items`);
    items = items.data.data
      .filter((i) => i.seller === USER_id)
      .map((i) => ({ name: i.name, price: i.price.$numberDecimal }));
    this.setState(
      {
        storeItems: items,
      },
      () => {
        console.log(this.state.storeItems);
      }
    );
  }

  componentDidMount() {
    this.fetchItems();
  }

  render() {
    return (
      <div>
        <Container className="ml-5" style={{ marginTop: "2em" }}>
          <Jumbotron>
            <h1>{this.props.match.params.storepage}</h1>
          </Jumbotron>
          <ListGroup>
            {this.state.storeItems.map(({ name, price }) => (
              <ListGroupItem>
                {name} - Price: ${price}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Container>
      </div>
    );
  }
}

export default StorePage;
