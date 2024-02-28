const personName = "Bharat";
let age = 26;
var height = 5.11;

// to print multiple variables at once we can use console.table([variables_names])
console.log([personName,age,height]);

/*In future production level code prefer not to use var 
because of the issue in block scope and function scope. 
For more detail refer mdn docs in scope machanism in JavaScript.
*/

/*
 in JS if we declare a variable but did not give it its value
 then by deafult JS will give it "undefined" value
*/

/* if we create a variable with using any of var,let or const keyword JS will create its instance global 
for better practice try to aviod these kind of variable declaration.
*/