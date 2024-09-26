 
//  function without the function name is called the anonymous function
//  const value= function (a,b){
//   return a+b;

// }
// console.log(value);    // [Function:value]
// console.log(value(4,2));    //6
// console.log(sum(5,3));

const value= function(a){
  return a*a*a;
}
console.log(value(3));

// Higher Order Function
// when one function take another function as an argument eg: calculator function in which we have craeted multiple functions add, mul, sub etc.
// print name 20 times
// function printName(func,num){
//   for(let i=0;i<num;i++){
//    func();
//   }
// }
// let myName = function (){
//   console.log("shiwangi");
// };
// printName(myName,20);
function isEven(func,num){
  for(let i=1;i<=num;i++){
    if(i%2==0){
console.log("even");
    }
    else{
      console.log("odd");
    }
    func();
  }
}


// array methods: map,reduce,filter and sort:
// 1. map return a new array:
let num=[1,2,3,4];
let cube=function (num){
  return  num**3;
}
cube();
let newArray=num.map(cube());
console.log(newArray);
