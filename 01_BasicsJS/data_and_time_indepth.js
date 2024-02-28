let myDate = new Date();
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toTimeString())

// months start with 0 in JS

//let myCreatedDate = new Date(2023,0,2,4,5,6); // Format(year,month,date,hrs,mins,sec): here 0 represents month, so this shows that the months in js starts with 0
let myCreatedDate = new Date("2024-01-12"); //using this we can specfically modify the format.NOTE: here month starts with 01 beacuse its string, previous one was array that why that started with 0
console.log(myCreatedDate);
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(Math.floor(myTimeStamp/1000))