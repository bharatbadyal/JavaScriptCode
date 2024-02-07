    /*// primitive datatypes
        - 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
        -  
    

    // non-primitive / reference type
        ==> Arrays, Objects, Functions
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