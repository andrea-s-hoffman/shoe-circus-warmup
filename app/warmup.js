import { products } from "./products.js";
import { buildProducts } from "./buildProducts.js";

// do your work in this file

const numItemsInCart = document.querySelector("#num-of-items");
const cartItemsList = document.querySelector("ul#cart-items");
const modal = document.querySelector(".modal");

const cart = [];

const buildCartItems = () => {
  // build list items
  // append to list
};

const updateUI = () => {
  buildCartItems();
  // update items in cart icon (in header)
  // update subtotal paragraph
  // update tax paragraph
  // update total paragraph
};

const clickHandler = (e) => {
  console.log(e.target);
  // add to cart button
  // show cart icon
};

document.addEventListener("DOMContentLoaded", () => {
  buildProducts(products);
  updateUI();
  document.body.addEventListener("click", clickHandler);
});
