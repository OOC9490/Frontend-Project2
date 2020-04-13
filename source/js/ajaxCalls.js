/**
 *  All Async calls
 */

import axios from "axios";

const AJAX_URL = `https://vast-tor-12475.herokuapp.com`;

// Get stores
export async function getAllStores() {
  const response = await axios.get(AJAX_URL + `/sellers`);

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
