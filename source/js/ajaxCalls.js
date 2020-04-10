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
