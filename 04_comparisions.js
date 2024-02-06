console.log("2">1); //true
console.log("02">1); //true
// if you use typescript then it will not allow to compare two different datatypes.

console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true weird but this is the result

/*
    The reason is equality check == and comparisons < > >= <= works differently.
    comparisons convert null to a number, treating it to zero i.e. why null >= 0 is true but null > is false
*/

console.log(null === undefined); // === is strictly check 

// always double check these kind of weird comparisions before executing the original code.