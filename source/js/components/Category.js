import React, { Component } from 'react';
import styled from '@emotion/styled';
import Item from './Item';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Plain = styled.div`
    border-radius: 0.5em;
    background-color: #fff;
    padding: 1em;
    margin: 0.5em 0;
`;
const PlainTitle = styled.div`
    display: grid;
    grid-template-columns: 7fr 1fr;
    align-items: center;
    font-size: 1.25em;
    font-weight: bold;
    font-style: italic
`;

class Category extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return (
            <Plain>
                <PlainTitle>
                    { this.props.category.name }
                    <Button color="primary" onClick={this.toggle}>Show Items</Button>
                </PlainTitle>
                <Collapse isOpen={ this.state.isOpen }>
                    { this.props.category.items.map( (item, index) => <Item key={ item.id} item={ item } index={index} isCart={false} update={ this.props.update } isAuth={this.props.isAuth} />)}
                </Collapse>
            </Plain>
        );
    }
};

export default Category;