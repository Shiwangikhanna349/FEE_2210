// By default the scope of the variable is global 
// 1. Global scope
// let a=5;
// let b=15;
// let c=39;
// function myfun(){
// console.log(a);
// }
// myfun();
// console.log(a);
// console.log(b);
// console.log(c);
// 2. Function Scope: variable can be accessed inside the function only
// 3. Block scope: accessible inside the block only {}
// 4. Lexical Scope: outer function values are accessible in inner function but converse is not possible

// Explanation:
// 1. Functional Scope
let c=25;   // global scope
function myfun(a,b){
  let c=a+b;     // functional scope
  console.log(c);
}
myfun(5,3);
console.log(c);    // due the functional scope the value of c cannot be acceseable outside the function, now if we created a c variable having 25 value so now it will not give error the output is 25



