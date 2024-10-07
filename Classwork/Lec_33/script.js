// this is a synchronous way execution
// console.log("Started Execution");
// function myfun(){
//   console.log("This is a function");

// }
// myfun();
// console.log("Execution Ends here");

// callback
// function myfun(){
//   console.log("This is a function");
// }

// function hello(call){
//   console.log("this is a hello function");
//   call();
// }
// output is:
// this is a hello function
//  This is a function
// hello(myfun);

// synchronous
// js execution is synchronous as it executes line by line from top to bottom
// console.log("Execution Started");
// for(let i=0;i<10;i++){
//   console.log("For loop running");
// }
// console.log("Execution Finished ");

// js is a asynchronous language but its execution is in  synchronous  manner

// set timeout creates  a delay or it executes after some delay
// set interval set the time to up to which the function runs
// these are the asynchronous functions

// three ways to declare the function
// 1. function setTimeout(){

// }
// 2. var set=function setTimeout(){

// }

// setTimeout(()=>{
// console.log("set timeout function");
// },2000);
// function first(){
//   console.log("This is a first function");
// }
// first();

// Explanation of the above code or in simple way we can do the above code like this
console.log("Execution Started");
setTimeout(() => {
  console.log("set timeout function"); // created a global execution
}, 2000);
for (let i = 0; i <= 1000; i++) {
  console.log("Loop Running");
}
console.log("Execution Finished");

// here js runs in a synchronous manner and js put the 1 line code in main stack but during the execution the settimeout and setinterval are asynchronous terms so js works as midiator  or the web api's  put the settimeout and setinterval in the call stack then again put the next line in the i.e. loop in the main stack and execution line in the main stack  and the midiator works between the main stack and the call stack  or event loop take the unique id's from main stack and call stack and join both the data firstly main stack or js code executes then the call stack code will execute if the code of js will not execcute then the call stack code will not be executed
// Execution Started
//  Loop Running
//  Execution Finished
// set timeout function

// SetTimeOut
//   console.log("start");
// var a=setTimeout(()=>{
//   console.log("setTimeout working");
// },1000);
// clearTimeout(a);
// console.log("Ends");

// SetInterval
//    console.log("start");
// var a=setInterval(()=>{
//   console.log("setInterval working");
// },1000);
// clearTimeout(a);
// console.log("Ends");

let count = 0;
const interval = setInterval(() => {
  count++;
  console.log(`Message:${count}`);
  if (count >= 3) {
    clearInterval(interval);
    console.log("Ends");
  }
});

// callback Hell
