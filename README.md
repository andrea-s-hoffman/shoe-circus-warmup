You have been provided with an HTML file linked to `warmup.js`. All your work will be done within `warmup.js`. Follow these instructions:

### Add to Cart

1. **Listen for Button Click**: Use a click event listener for the 'Add to Cart' button.
2. **Increment Cart Icon**: When the button is clicked, increment the number icon next to the cart icon in the header.
   - _Hint_: There is a data-index attribute on this button. Also utilize the `cart` variable in warmup.js.

### Open Modal

3. **Listen for Cart Icon Click**: Use a click event listener for the cart icon in the header.
4. **Show Modal**: When the cart icon is clicked, display the modal. Currently, it is hidden using Bootstrap's `modal` class (this class includes `display: none;`). Also allow the user to close this modal when open.
   - _Hint_: There is a relevant CSS rule at the top of your CSS file.

### Show Cart Items in Modal

5. **Display Added Items**: For each item added to the cart, create a new list item (`<li>`) in the modal's unordered list (`<ul>`). Refer to the commented-out code within the `<ul>` for guidance on how to structure these items.
6. **Update Cart Totals**: Update the subtotal, tax, and total amounts displayed in the modal to reflect the items in the cart.

### Bonus Challenges

- **Delete Cart Item**: Allow the user to remove an item from the cart. Ensure that the number icon in the header and totals are updated accordingly.
- **Single List Item per Product Type**: Ensure only one list item is shown per product type in the cart. If an additional item of the same type is added, update the quantity displayed in the existing list item.

### Other Ideas to Explore

- **Dark Mode**: Allow the user to select light/dark mode. Store this in local storage.
- **Adjust Modal if Cart is Empty**: Implement a message or functionality so that the user sees a message or isn't able to open the cart when empty.
- **Update Quantity**: Allow the user to increment or decrement quantity of an item already in the cart.
- **Tax by Location**: Ask the user for their location and calculate tax based on the state they live in.
- **Local Storage**: Store cart information in local storage so that the cart persists a page refresh.
- **Details Page/Modal**: Allow the user to see more information about the shoe before adding to the cart and include options for shoe sizes.
- **User Log In**: Allow the user to "log in" with a username and password. Store this in local storage.
- **Checkout Feature**: Implement a fake checkout that asks for the users shipping and billing information. Produce a reciept for them.
- **Warehouse Quantity**: Include a quantity on the products array and functionality so that they might "sell out" if too many of one item are added to the user's cart.
