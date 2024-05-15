const productsList = document.querySelector(".container ul");

export const buildProducts = (products) => {
  products.forEach((item, index) => {
    const outerDiv = document.createElement("div");
    const newLi = document.createElement("li");
    const newH3 = document.createElement("h3");
    const newImg = document.createElement("img");
    const newPrice = document.createElement("p");
    const addToCartBtn = document.createElement("button");
    const cardBody = document.createElement("div");
    outerDiv.classList.add("col-sm-6");
    newLi.classList.add("card");
    newImg.classList.add("card-img-top");
    cardBody.classList.add("card-body");
    newH3.classList.add("card-title");
    newPrice.classList.add("card-text");
    addToCartBtn.classList.add("btn", "btn-primary", "add-to-cart");
    newH3.textContent = item.name;
    newPrice.textContent = "$" + item.price.toFixed(2);
    newImg.src = item.image;
    newImg.alt = item.name;
    addToCartBtn.textContent = "Add to cart";
    addToCartBtn.setAttribute("data-index", index);
    cardBody.append(newH3, newPrice, addToCartBtn);
    newLi.append(newImg, cardBody);
    outerDiv.append(newLi);
    productsList.append(outerDiv);
  });
};
