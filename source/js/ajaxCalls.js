/**
 *  All Async calls
 */

import axios from "axios";

const AJAX_URL = `https://vast-tor-12475.herokuapp.com`;

// Get stores
export async function getAllStores(sellerid = "") {
  const response = await axios.get(AJAX_URL + `/sellers${sellerid}`);

  return response.data;
}

// Get all items
export async function getAllItems() {
  const response = await axios.get(AJAX_URL + `/items`);

  return response.data;
}

// Get all categories
export async function getAllCategories() {
  const response = await axios.get(AJAX_URL + `/categories`);

  return response.data;
}

// signup user, add to db
export async function registerUser(obj) {
  const response = await axios.post(AJAX_URL + `/users`, obj, {
    "Content-Type": "application/json",
  });

  return response.data;
}
// login user
export async function loginUser(obj) {
  const response = await axios.post(AJAX_URL + `/login`, obj, {
    "Content-Type": "application/json",
  });

  return response.data;
}

// get current user
export async function checkUser() {
  const response = await axios.get(AJAX_URL + `/users`);

  return response.data;
}

// search for an item
export async function searchItem(term) {
  const response = await axios.get(AJAX_URL + `/items/?slug=${term}`);

  return response.data;
}
// search for an item
export async function findLocalSellers(postcode) {
  const response = await axios.get(
    AJAX_URL + "/sellers/local/" + postcode + "/5"
  );

  return response.data;
}
