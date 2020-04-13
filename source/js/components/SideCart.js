import React, { Component } from 'react';
import styled from '@emotion/styled';
import Item from './Item';
import { reduce } from 'underscore';
import { 
    Alert,
    Button 
} from 'reactstrap';

const CartTitle = styled.h2`
    text-align: center;
`;

const CartContents = styled.div`
    border-radius: 0.5em;
    background-color: lightblue;
    padding: 1em;
`;

const PriceCheckOut = styled.div`
    margin: 1em 0;
    display: grid;
    grid-column-gap: 1em;
`;

class SideCart extends Component {
    render(){
        return (
            <div>
                <CartTitle>CART</CartTitle>
                <CartContents>
                    { this.props.items.length === 0 ? "Your cart is empty! (add items to start shopping!)"  : this.props.items.map((item) => <Item key={ item.id } item={ item } isCart={true} remove={this.props.remove} />) }
                    { this.props.items.length !== 0 ? 
                    <PriceCheckOut>
                        <Alert color="info">Total from {this.props.retailer.name}: ${reduce(this.props.items, (total, item) => total + item.unitPrice, 0).toFixed(2)}</Alert>
                        <Button color="success">Checkout</Button>
                    </PriceCheckOut>
                    : null}
                </CartContents>
            </div>
        );
    }
};

export default SideCart;
