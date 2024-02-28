// arrays

// array can be declared through multiple methods

const myArr= [0,3,2,5,"bharat",true];
const myArr1 =["Bharat","Sahil"];
const myArr2 = new Array("1",2,3.3)
console.log(myArr);
console.log(myArr1);
console.log(myArr2);


myArr.push(6);  // it pushes the value at the end of array
console.log(myArr);
myArr.unshift(12);  // it pushes the value at the start of array
console.log(myArr)

myArr.pop(); // removes value from end of the array
console.log(myArr); 
myArr.shift(); // removes value from start of the array
console.log(myArr);


// includes(value) method gives true or false
// indexOf(value) gives the index of given value. if value not present gives -1

const newArr = myArr.join()  //it binds the values and convert it into string

console.log(newArr)

//splice, slice methods

console.log(myArr)
const myn1 = myArr.slice(1,3);
console.log(myn1);

console.log("main array before splice operation: ",myArr)
const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("main array after splice operation: ",myArr)
