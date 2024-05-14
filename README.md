You have been provided with an HTML file linked to `warmup.js`. All your work will be done within `warmup.js`. Follow these instructions:

### Add to Cart

1. **Listen for Button Click**: Use a click event listener for the 'Add to Cart' button.
2. **Increment Cart Icon**: When the button is clicked, increment the number icon next to the cart icon in the header.

### Open Modal

3. **Listen for Cart Icon Click**: Use a click event listener for the cart icon in the header.
4. **Show Modal**: When the cart icon is clicked, display the modal. Currently, it is hidden using Bootstrap's `modal` class (`display: none;`).
   - _Hint_: There is a relevant CSS rule at the top of your CSS file.

### Show Cart Items in Modal

5. **Display Added Items**: For each item added to the cart, create a new list item (`<li>`) in the modal's unordered list (`<ul>`). Refer to the commented-out code within the `<ul>` for guidance on how to structure these items.
6. **Update Cart Totals**: Update the subtotal, tax, and total amounts displayed in the modal to reflect the items in the cart.

### Bonus Challenge

- **Single List Item per Product Type**: Ensure only one list item is shown per product type in the cart. If an additional item of the same type is added, update the quantity displayed in the existing list item.
