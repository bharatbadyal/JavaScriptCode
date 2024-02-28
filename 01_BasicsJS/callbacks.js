function square(num){
    return num * num;
}

function cube(num){
    return num *num *num;
}

// function sumOfSquares(a,b){
//     let square1 = square(a);
//     let square2 = square(b);
//     return square1 + square2;
// }


function sumOfSomething(a,b,fn){
    let square1 = fn(a);
    let square2 = fn(b);
    return square1 + square2;
}

let ans = sumOfSomething(2,4,cube);
console.log(ans)

// there is another way to do this (simpler one)
function sumOf(a,b){
    return a+b;
}

let ans2 = sumOf(cube(2),cube(4))
console.log(ans2)
