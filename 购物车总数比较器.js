function calculateSubtotal(Items) {
    let subtotal = 0;
    for (let i = 0; i < Items.length; i++) {
        subtotal += Items[i].price * Items[i].quantity;
    }
    return subtotal;
}

function calculateDiscount(subtotal, discountPercent) {
    return subtotal * (0.01 * discountPercent);
}

function calculateTax(amountAfterDiscount, taxPercent) {
    return amountAfterDiscount * (0.01 * taxPercent);
}

function createCartSummary(items, discountPercent, taxPercent) {
    const subtotal = calculateSubtotal(items);
    const discount = calculateDiscount(subtotal, discountPercent);
    const priceAfterDiscount = subtotal - discount;
    const tax = calculateTax(priceAfterDiscount, taxPercent);
    const total = priceAfterDiscount + tax;
    return {subtotal, 
           discount, 
           tax, 
           total
           }
 }

const cartItems = [
  { name: 'Notebook', price: 10, quantity: 2 },
  { name: 'Pen', price: 2, quantity: 5 },
  { name: 'Bag', price: 30, quantity: 1 },
];

console.log(createCartSummary(cartItems, 10, 5));
console.log(calculateSubtotal(cartItems));

const singleItemCart = [{ name: 'Mouse', price: 25, quantity: 2 }];
console.log(createCartSummary(singleItemCart, 0, 10));
