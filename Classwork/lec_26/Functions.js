// functions: it makes the code reusable
// define:
// function function_name (){
//   // code
// }
// function_name()    //call the function
// function declaration
function sum(a,b){      //  here a and b are parameters
 var c;
c=a+b;
console.log(c);
}
// function call
sum(10,20); // here 10 and 20 are arguments which is assigned to the variable a and b 

function mul(a,b=3){      //  here a and b are parameters
  var c;
 c=a*b;
 console.log(c);
 }                       
 mul(5);             // output is 15
 mul(5,5);          // the output is 25
// NaN is the output not a number because a=5 but we haven't pass the value to b yet 
mul(5);               // if we pass the default value of a=3 and also pass the argument the output = NaN
