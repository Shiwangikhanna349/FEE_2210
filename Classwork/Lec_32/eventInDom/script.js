//  1.
// var btn=document.querySelector("button");
// console.dir(btn);
// btn.onclick=function(){
//   console.log("button was clicked");
// };
// 2.   here we created a function to trigger a event on each button
// var btns=document.querySelectorAll("button");
// for(btn of btns){
//   btn.onclick=fun;
//   // when we hover on the button it shows the alert hello
//   btn.onmouseenter=function cursor(){
// alert("hello");
//   }
// }
// function fun(){
//     console.log("button was clicked");
//   };

// 3.
// var btns=document.querySelectorAll("button");
// for(btn of btns){
//   btn.onclick=fun;
// btn.onclick=hello;
//   // when we hover on the button it shows the alert hello
 
// }
// // event only works for single entity at a single time
// function fun(){
//     console.log("button was clicked");
//   };
// function hello(){
//   console.log("hello")
// };

// 4. Event listener helps to perform the required event as per the choice
// var btns=document.querySelectorAll("button");
// for(btn of btns){
//   btn.onclick=fun;
//  btn.addEventListener('click',fun);
//  btn.addEventListener('click',hello);
//   // when we hover on the button it shows the alert hello
 
// }
// // addEventListener is a object not a event because in the above example we pass two values click and callback function
// // event only works for single entity at a single time
// function fun(){
//     console.log("button was clicked");
//   };
//   function hello(){
//   console.log("hello")
// };
// to add the addEventListener on para on mouseenter 
var para=document.querySelector("p");
para.addEventListener('mouseenter',fun);
function fun(){
    console.log("paragraph");
  };

  