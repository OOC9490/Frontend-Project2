import React, { Component } from 'react';
import styled from '@emotion/styled';
import Item from './Item';

const CartTitle = styled.h2`
    text-align: center;
`;

const CartContents = styled.div`
    border-radius: 0.5em;
    background-color: lightblue;
    padding: 1em;
`;

class SideCart extends Component {
    render(){
        return (
            <div>
                <CartTitle>CART</CartTitle>
                <CartContents>
<<<<<<< HEAD
                    { this.props.items.length === 0 ? "Your cart is empty! (drag items here to start shopping!)" : this.props.items.map((item) => <Item key={ item.id } item={ item } isCart={true} remove={ this.props.remove } />) }
=======
                    { this.props.items.length === 0 ? "Your cart is empty! (add items to start shopping!)" : this.props.items.map((item) => <Item key={ item.id } item={ item } isCart={true} remove={this.props.remove} />) }
>>>>>>> z-ajax
                </CartContents>
            </div>
        );
    }
};

export default SideCart;