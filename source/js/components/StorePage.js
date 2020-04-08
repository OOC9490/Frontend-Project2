import React, { Component } from 'react';
import { Jumbotron, Container, ListGroup, ListGroupItem } from 'reactstrap';

class StorePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeItems: ["Carrot", "Tomato", "Banana", "Strawberry", "Celery", "Flour", "Honey", "Rice"],
    };
  }

  render() {
    return(
      <div>
        <Container className="ml-5" style={{ marginTop: '2em' }}>
          <Jumbotron>
            <h1>Store Page</h1>
          </Jumbotron>
          <ListGroup>
          {this.state.storeItems.map(item => (
            <ListGroupItem key={item}>{item}</ListGroupItem>
          ))}
          </ListGroup>
        </Container>
      </div>
    );
  }
}

export default StorePage;
