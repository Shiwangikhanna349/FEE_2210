
// iterator protocol has two values [next(),value] , iterator prototype take each value and return and it create the work more efficient
// Objects are not iterators
// for of performs the iteration method and return the values stored in the string . array etc.
// for in does't perform iteration and it returns the key
// eg: of iterator String, array,map,set
// let arr=[1,2,3,4,5];
// console.log(arr[Symbol.iterator]);


// for of:
// for(i of arr){
//   // console.log(i);
//   console.log(arr[i]);
// }
// // for in
// let obj={name:"shiwangi"};
// for(i in obj){
//   console.log(obj[Symbol.iterator]);
// console.log(i);
// }
const sum = 3 + 4;
const age = 21;

console.log("Sum of " + 3 + " + " + 4 + " = " + sum);
console.log(`Hi there! I'm John Doe, my age is ${age}.`);


