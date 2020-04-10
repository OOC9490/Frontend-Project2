import React, { Component } from "react";
import styled from "@emotion/styled";
import uuid from "react-uuid";
import Retailer from "./Retailer";
import SideCart from "./SideCart";

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
        name: "Woolworths",
        suburb: "Parramatta",
        logo:
          "https://www.feedappeal.org.au/wp-content/uploads/2019/06/Woolworths_stacked_CMYK_Neg.png",
        categories: [
          {
            id: uuid(),
            name: "Bathroom Supplies",
            items: [
              { id: uuid(), name: "Toilet Paper", unitPrice: 3.0 },
              { id: uuid(), name: "Toothpaste", unitPrice: 2.75 },
              { id: uuid(), name: "Toothbrush", unitPrice: 2.5 },
            ],
          },
          {
            id: uuid(),
            name: "Meat",
            items: [
              { id: uuid(), name: "Chicken breast", unitPrice: 8.0 },
              { id: uuid(), name: "Rump steak", unitPrice: 11.0 },
              { id: uuid(), name: "Eggs", unitPrice: 3.5 },
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

    this.updateCartQuantity = this.updateCartQuantity.bind(this);
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

    // items seller sells
    const selling = items.data
      .filter((item) => item.seller === seller._id)
      .map((item) => ({
        id: uuid(),
        name: categoryMatch(item.category).name,
        items: items.data
          .filter(
            (i) =>
              i.category === categoryMatch(item.category)._id &&
              i.seller === seller._id
          )
          .map((i) => ({
            id: uuid(),
            name: i.name,
            unitPrice: parseFloat(i.price.$numberDecimal),
          })),
      }));

    // construct state
    this.setState(
      {
        items: items.data,
        retailer: {
          name: seller.name,
          suburb: seller.location.city,
          logo: seller.image,
          categories: selling,
        },
      },
      () => {
        console.log(this.state.items, this.state.retailer, seller, categories);
      }
    );
  }

  updateCartQuantity(item) {
    const newItem = {
      id: uuid(),
      name: item.name,
      unitPrice: item.unitPrice,
    };

    this.setState((previousState) => {
      let cart = { ...previousState.cart };
      cart.items.push(newItem);
      return { cart };
    });
  }

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
              update={this.updateCartQuantity}
            />
          }
        </StoresList>
        <SideCart cart_id={this.state.cart.id} items={this.state.cart.items} />
      </Wrapper>
    );
  }
}

export default Orders;
