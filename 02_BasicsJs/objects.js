// singleton

// object litreals

// declare a symbol 
const mySym = Symbol("myKey1");

const JsUser ={
    name : "Bharat",
    email : "avc@xyz.com",
    age : 26,
    location: "Kathua",
    loggedIn : ["monday","tuesday"]
}

// console.log(JsUser.email)

// we can use = operator to override the values inside the objects

// JsUser.email = "abc@gmail.com";

// console.log(JsUser.email)
// to stop updating object any further use can use Object.freez(object name );

// Object.freeze(JsUser);

JsUser.email = "ab@gmail.com"; // it will not through any error but no changes will be done on this object any further

// console.log(JsUser.email)

JsUser.greetings = function(){
    console.log("Hello everyone welcome to JS with Fun");
    return "This is return value of greeting function"
}

console.log(JsUser.greetings);
console.log(JsUser.greetings());

