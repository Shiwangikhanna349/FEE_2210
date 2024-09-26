// var person1={
//   name:'shiwangi',
//   id:'123',
//   subject:"FEE",
// };
// console.log(person1);
// // we have used prototype to transfer the value of person1 to person2
// const person2=Object.create(person1);
// console.log(person2);   // here output is { } here prototypel object is created which take the reference only not the values
// console.log(person2.name);   
// person2.name="John";
// console.log(person2.name);
// const person3=Object.create(person2);
// console.log(person3); 
// // console.log(person3.__proto__==person1);           //false  
// // console.log(person2.__proto__==person1);        //true
// console.log(person3.__proto__==person2); //true
// first class object value is null  all the datatypes are objects in js 
// console.log(Object.prototype.__proto__);     //null because by default the value of first class object is null
var num=20;
console.log(num.__proto__=Number.prototype.__proto__); // it shows all the datatypes are objects 
DOM in JS
// window.document 
// in the global context the global variable is created and all the  functionality are stored in this
// document.getElementsByTagName("h1");   to access the tags etc.in the global variable
