import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Button } from 'reactstrap';


const SmallDetails = styled.span`
    text-align: center;
    letter-spacing: 1px;
`;

const ItemDetails = styled.div`
    display: grid;
    grid-template-columns: 4fr 2fr 2fr;
    align-items: center;
    background-color: rgba(137, 196, 244, 1);
    border-radius: 0.5em;
    margin: 0.5em 0;
    padding: 1em;
`;



class Item extends Component {
    render(){
        return (
                <ItemDetails>
                    <strong>{ this.props.item.name }</strong>
                    <SmallDetails><strong>Price: </strong>{ `$${this.props.item.unitPrice.toFixed(2)}` }</SmallDetails>
                    { this.props.isCart ? 
                        <Button 
                            color="danger"
                            onClick={ () => this.props.remove(this.props.item) }>
                            Remove from Cart
                        </Button> : 
                    <Button 
                        color="success" 
                        onClick={ () => this.props.update(this.props.item) }
                    >Add to Cart
                    </Button>}
                </ItemDetails>
        );
    }
};

export default Item;