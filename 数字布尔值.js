function isPositive(num) {
   return num > 0 
}

function isNegative(num) {
    return num < 0 
}

function isZero(num) {
    return num === 0 
}

function isEven(num) {
    return num % 2 === 0 
}

function isOdd(num) {
    return num % 2 !== 0 
}

function describeNumber(num) {
    return  {
        positive : isPositive(num),
            negative : isNegative(num),
            zero : isZero(num),
            even : isEven(num),
            odd : isOdd(num)
            }
}
console.log(describeNumber(8));
console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));