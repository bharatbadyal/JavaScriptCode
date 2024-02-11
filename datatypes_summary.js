
/*// primitive datatypes
        - 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
        -  
    

    // non-primitive / reference type
        ==> Arrays, Objects, Functions

:==> Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
    */
const scoreVallued = 10.4; //Number
const isLoggedIn = true;//boolean
const outsideTemp = null;// null
const score = true; // example: JS is dynamiclly typed language, to improve this we can use typescript.
const id = Symbol('123');//symbol
const id2 = Symbol('123'); // every symbol will be unique even if they will give same value.

const heros = ["Hanuman", "Ram", "Lakshman", "Bharat"]; // array
const obj1 ={
    name: "Bharat",
    age: "27",
    height: 5.11
};// object

function sum (a,b){ 
    return a+b;
}//function declaration

const sum1 = sum(122,33);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(reference type)

let myName = 'Bharat';
let myFullName = myName;
myFullName ="Bharat Sharma"; // because value is stored in stack so both will have unique values.

console.log(myFullName)
console.log(myName);

//value by reference
let user = {
    email: "abc@gmail.com",
    upi: "user@upi"
};
let userTwo = user ;
userTwo.email = "user@gmail.com"; // value changed in both the user because value was given through reference of value.

console.log(user.email);
console.log(userTwo.email);

// string Introplation

let name = "Bharat";
let surName = new String("Shrama");// this will show us the object and the function that object provide us.

console.log(`Hello ${name} welcome to GitHub`);
console.log(surName);

// Note: Practice all the method of string using new file.