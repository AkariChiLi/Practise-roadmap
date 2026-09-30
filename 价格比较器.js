function calculateDiscount(price, discountPercent) {
    return price * (0.01 * discountPercent);
}

function calculateTax(priceAfterDiscount, taxPercent) {
    return priceAfterDiscount * (0.01 * taxPercent);
}

function calculateFinalPrice(price, discountPercent, taxPercent) {
const discount = calculateDiscount(price, discountPercent);
const priceAfterDiscount = price - discount;
const tax = calculateTax(priceAfterDiscount, taxPercent);
return priceAfterDiscount + tax;
}

function createPriceSummary(price, discountPercent, taxPercent) {
    const discount = calculateDiscount(price, discountPercent);
    const priceAfterDiscount = price - discount;
    const tax = calculateTax(priceAfterDiscount, taxPercent);
    const finalPrice = priceAfterDiscount + tax;
    return {price: price, 
           discount: discount, 
           tax: tax, 
           finalPrice: finalPrice
           }
 }

