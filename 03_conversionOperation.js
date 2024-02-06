let score = null;
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber)
console.log(valueInNumber);

/*  If we convert any integer having alphabet with it, it will be converted to NaN. eg: "33abc" ==> Number = NaN.
    Normally it will convert string resemmbling number to number value. But keep in mind that while checking its type using type of 
    operator it will give "Number".

    Null while checking its type gives "object". but when we convert it to number it will give '0' as output. Keep that in mind while using 
    data file.

    Note: For proper working of algo of type casting / type conversion visit official documentation of ECMAScript(latest one).

*/

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

/*
    1 => true;
    0 => false;
    emptyString = flase;

*/

let someNum = 23323;
let numToString = String(someNum);

console.log(typeof numToString,numToString);

// read documentation about for further refference.
// read postfix and prefix in js mdn for further understanding of these operator