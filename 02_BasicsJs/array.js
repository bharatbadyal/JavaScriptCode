const marval_heros = ["thor","Ironman","spiderman"]
const dc_heros =["superman","flash","batman"]

// marval_heros.push(dc_heros); // in this case it will add our array as it is 
// console.log(marval_heros);
// console.log(marval_heros[3][1]);  //multi level array value access

// let modArr = marval_heros.concat(dc_heros)
// console.log(modArr);

// spread operator
let all_new_heros= [...marval_heros,...dc_heros];
// console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6,7,[8,9,[2,3,4]]]];
const real_another_array = another_array.flat(Infinity);

// console.log(real_another_array)

console.log(Array.isArray("Bharat"));
console.log(Array.from("Bharat"));
console.log(Array.from({name: "Bharat"}))  //intresting case for

let score1 = 100;

let score2 = 200;

let score3 = 300;

console.log(Array.of(score1,score2,score3));
