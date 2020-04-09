import React, { Component } from 'react';
import styled from '@emotion/styled';
import Category from './Category';

const Plain = styled.div`
    border-radius: 0.5em;
    background-color: lightblue;
    padding: 1em;
`;
const PlainTitle = styled.div`
    display: grid;
    grid-template-columns: 1fr 9fr;
    justify-items: center;
    align-items: center;
`;
const Logo = styled.img`
    max-height: 50px;
    max-width: 50px;
`


class Retailer extends Component {
    render(){
        return (
            <Plain>
                <PlainTitle>
                    <Logo src={ this.props.retailer.logo } />
                    <h3>{ `${this.props.retailer.name}, ${this.props.retailer.suburb}` }</h3>
                </PlainTitle>
                { this.props.categories.map( (category) => <Category key={ category.name } category={ category } update={ this.props.update } />)}
            </Plain>
        );
    }
};

export default Retailer;