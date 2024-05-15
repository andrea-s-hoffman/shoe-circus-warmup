import { products } from "./app/products.js";
import { buildProducts } from "./app/buildProducts.js";

// do your work in this file

// number icon in header
const numItemsInCart = document.querySelector("#num-of-items");
// ul in modal for cart items
const cartItemsList = document.querySelector("ul#cart-items");
// modal container
const modal = document.querySelector(".modal");

const cart = [];

const buildCartItems = () => {
  // build list items
  // append to list
};

const updateUI = () => {
  buildCartItems();
  // update number in cart icon (in header)
  // update subtotal paragraph
  // update tax paragraph
  // update total paragraph
};

const clickHandler = (e) => {
  console.log(e.target);
  // add to cart button --> add items to cart
  // number icon in header --> open modal
  // close btn in model --> close modal
};

document.addEventListener("DOMContentLoaded", () => {
  buildProducts(products);
  updateUI();
  document.body.addEventListener("click", clickHandler);
});
