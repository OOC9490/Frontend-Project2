import React, { Component } from 'react';
import styled from '@emotion/styled';
import uuid from 'react-uuid';
import Retailer from './Retailer';
import SideCart from './SideCart';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 1em;
    border-radius: 0.5em;
    width: 100%;
    padding: 1em;
    background-color: slategray;
    box-sizing: border-box;
`

const StoresList = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-row-gap: 1em;
`;

class Orders extends Component {
    constructor(props){
        super(props);

        this.state = {
            retailer:
                {
                    name: "Woolworths",
                    suburb: "Parramatta",
                    logo: "https://www.feedappeal.org.au/wp-content/uploads/2019/06/Woolworths_stacked_CMYK_Neg.png",
                    categories: [
                        {
                            id: uuid(),
                            name: "Bathroom Supplies",
                            items: [
                                { id: uuid(), name: "Toilet Paper", unitPrice: 3.00 },
                                { id: uuid(), name: "Toothpaste", unitPrice: 2.75 },
                                { id: uuid(), name: "Toothbrush", unitPrice: 2.50 }
                            ]
                        },
                        {
                            id: uuid(),
                            name: "Meat",
                            items: [
                                { id: uuid(), name: "Chicken breast", unitPrice: 8.00 },
                                { id: uuid(), name: "Rump steak", unitPrice: 11.00 },
                                { id: uuid(), name: "Eggs", unitPrice: 3.50 }
                            ]
                        }
                    ]
                },

                cart: {
                    id: uuid(),
                    name: "Shopping Cart",
                    user_name: "Lawrence",
                    user_id: uuid(),
                    items: []
                }
        };

        this.updateCartQuantity = this.updateCartQuantity.bind(this);
    };

    updateCartQuantity( item ) {
        const newItem = {
            id: uuid(),
            name: item.name,
            unitPrice: item.unitPrice
        };

        this.setState( previousState => {
            let cart = {...previousState.cart};
            cart.items.push(newItem);
            return { cart };
        } );
    };

    render(){
        const seller = this.state.retailer;
        const categories = seller.categories;
        return (
            <Wrapper>
                <StoresList>
                    { <Retailer key={ seller.name } retailer={ seller } categories={ categories } update={ this.updateCartQuantity } /> }
                </StoresList>
                <SideCart cart_id={ this.state.cart.id } items={this.state.cart.items} />
            </Wrapper>
        );
    };
};

export default Orders;
