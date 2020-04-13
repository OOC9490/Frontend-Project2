import React, { Component } from "react";
import styled from "@emotion/styled";
import uuid from "react-uuid";
import Retailer from "./Retailer";
import SideCart from "./SideCart";

//ramda functions
import { prop, groupBy } from "ramda";

// import ajax functions
import { getAllItems, getAllStores, getAllCategories } from "../ajaxCalls";

// used to parse url
import queryString from "query-string";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 1em;
  border-radius: 0.5em;
  width: 100%;
  padding: 1em;
  background-color: slategray;
  box-sizing: border-box;
`;

const StoresList = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 1em;
`;

class Orders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      retailer: {
        name: "Loading...",
        suburb: "Loading...",
        logo: "",
        categories: [
          {
            id: uuid(),
            name: "Loading...",
            items: [
              { id: uuid(), name: "Loading...", unitPrice: 0 },
              { id: uuid(), name: "Loading...", unitPrice: 0 },
              { id: uuid(), name: "Loading...", unitPrice: 0 },
            ],
          },
        ],
      },

      cart: {
        id: uuid(),
        name: "Shopping Cart",
        user_name: "Lawrence",
        user_id: uuid(),
        items: [],
      },
    };

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  async componentDidMount() {
    // async await methods
    const items = await getAllItems();
    const sellers = await getAllStores(); // inefficient, can be done server side(findBy)
    const categories = await getAllCategories();

    // get the seller
    const seller = sellers.data.filter(
      (s) => s.slug === queryString.parse(this.props.location.search).name
    )[0];

    // get category name
    const categoryMatch = function (cid) {
      const category = categories.data.filter((c) => cid === c._id);
      return category[0];
    };

    // filter items the user is selling
    const itemsStocked = items.data.filter(
      (item) => item.seller === seller._id
    );

    // group items based on category
    const itemsByCategory = Object.values(
      groupBy(prop("category"), itemsStocked)
    ).map((category) => {
      return {
        id: uuid(),
        name: categoryMatch(category[0].category).name,
        items: category.map((item) => {
          return {
            id: uuid(),
            name: item.name,
            unitPrice: parseFloat(item.price.$numberDecimal),
          };
        }),
      };
    });

    // construct state
    this.setState({
      items: items.data,
      retailer: {
        name: seller.name,
        suburb: seller.location.city,
        logo: seller.image,
        categories: itemsByCategory,
      },
    });
  }

  addToCart( { name, unitPrice } ) {
    const newItem = {
        id: uuid(),
        name,
        unitPrice
    };

    const newItems = [...this.state.cart.items, newItem ];
    this.setState({ cart: { ...this.state.cart, items: newItems } });
  };

  removeFromCart( { id }){
    const itemList = [...this.state.cart.items];
    const index = itemList.findIndex(item => item.id === id);
    if ( index !== -1) {
        itemList.splice(index, 1);
        this.setState({ cart: {...this.state.cart, items: itemList } } );
    };
  };

  render() {
    const seller = this.state.retailer;
    const categories = seller.categories;
    return (
      <Wrapper>
        <StoresList>
          {
            <Retailer
              key={seller.name}
              retailer={seller}
              categories={categories}
              update={this.addToCart}
            />
          }
        </StoresList>
        <SideCart
          cart_id={this.state.cart.id}
          items={this.state.cart.items}
          remove={ this.removeFromCart }
        />
      </Wrapper>
    );
  }
}

export default Orders;
