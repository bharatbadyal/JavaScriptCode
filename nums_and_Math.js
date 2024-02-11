const score = 500;
const balence = new Number(100); // this will give us the objects methods available for Number's manuplation.
console.log(toString(score))// this will convert this to string 
console.log(score.toFixed(1));

const otherNumber = 213.93
console.log(otherNumber.toPrecision(3));

const hundred = 100000000;
console.log(hundred.toLocaleString("en-IN"))

//explore more in MDN documentation

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Maths

console.log(Math.abs(-4));

// Maths gives us alot more range of functions to operate on variable. This helps for commpititive mostly. Explore this in MDN

console.log(Math.floor(Math.random()*10))