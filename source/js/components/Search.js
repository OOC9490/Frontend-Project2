import React, { Component } from "react";
import styled from "@emotion/styled";
import { jsx, css, Global, ClassNames } from "@emotion/core";
import { ListGroup, ListGroupItem, Button, InputGroup, InputGroupText, InputGroupAddon, Input, Form } from "reactstrap";
import slugify from "slugify";

// import ajax functions
import { searchItem, getAllStores, findLocalSellers } from "../ajaxCalls";

const Container = css`
  margin: 0 auto;
  min-width: 80vw;
  height: 60vh;

  border-radius: 25px;
  border: 1px solid #fff;
  background-color: #fff;
  box-shadow: 0 0 20px #bdbdbd;

  padding: 1em 2em;
`;

class Search extends Component {
  state = {
    searchResult: [],
    sellerResult: [],
  };

  // look up an item based on name, exact matches only atm
  itemLookUp = async (event) => {
    event.preventDefault();

    // fetch calls, using slugify to change user input to lowercase etc
    const result = await searchItem(slugify(this.input.value));
    const sellers = await getAllStores();

    // map over result to output to view
    const searchresult = result.data.map((item) => {
      return {
        name: item.name,
        price: item.price.$numberDecimal,
        seller: sellers.data.filter((s) => s._id === item.seller)[0],
      };
    });

    this.setState({
      searchResult: searchresult,
    });
  };

  // seller look up based on postcode given, within 5km radius
  sellerLookUp = async (event) => {
    event.preventDefault();

    // fetch
    const result = await findLocalSellers(this.location.value);

    // map over returned sellers and pass only required fields to view
    const sellers = result.data.map((seller) => {
      return {
        name: seller.name,
        address: seller.location.formattedAddress,
        slug: seller.slug,
      };
    });

    this.setState({
      sellerResult: sellers,
    });
  };

  render() {
    return (
      <div css={Container}>
        <Form inline css={css``} onSubmit={this.itemLookUp}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Search for an Item!</InputGroupText>
            </InputGroupAddon>
            <Input
              type="text"
              name="itemsearch"
              ref={(node) => (this.input = node)}
            />
          </InputGroup>
          <Button type="submit">Search</Button>
        </Form>
        <div>
          <ListGroup
            css={css`
              width: 70%;
              margin-bottom: 3em;
            `}
          >
            {this.state &&
            this.state.searchResult &&
            this.state.searchResult.length > 0
              ? this.state.searchResult.map(({ name, price, seller }, key) => (
                  <ListGroupItem key={key}>
                    {name} - Price: ${price}, Retailer:{" "}
                    <a href={`#/dashboard/retailer?name=${seller.slug}`}>
                      {seller.name}
                    </a>
                  </ListGroupItem>
                ))
              : null}
          </ListGroup>
          <Form inline css={css``} onSubmit={this.sellerLookUp}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Search for a nearby Seller! Enter your postcode:</InputGroupText>
              </InputGroupAddon>
            <Input
              type="text"
              name="postcode"
              ref={(postcode) => (this.location = postcode)}
            />
            </InputGroup>
            <Button type="submit">Search</Button>
            <ListGroup
              css={css`
                width: 70%;
              `}
            >
              {this.state &&
              this.state.sellerResult &&
              this.state.sellerResult.length > 0
                ? this.state.sellerResult.map(
                    ({ name, address, slug }, key) => (
                      <ListGroupItem key={key}>
                        <a href={`#/dashboard/retailer?name=${slug}`}>{name}</a>{" "}
                        - Address: ${address},
                      </ListGroupItem>
                    )
                  )
                : null}
            </ListGroup>
          </Form>
        </div>
      </div>
    );
  }
}

export default Search;
