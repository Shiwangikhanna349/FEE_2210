// let p= fetch("https://catfact.ninja/fact");
// p.then((value1)=>{
//   return value1.json();
// }).then((value2)=>{
//   document.getElementById("para").innerText=value2.fact;
// });

// function name(func,num){
// for(let i=0;i<num;i++){
// func();
// }
// }
// function print(){
//   console.log("sk");
// }
// name(print,10);

// function check(func,num){
//   for(let i=1;i<=num;i++){
//     func(i);
//   }

// }
// function evenorOdd(i){
// if(i%2==0){
//   console.log(i);
// }
// else{
//   console.log("odd");
// }
// }
// check(evenorOdd,10);

// let arr=[1,2,3,4];
// // arr.forEach(num=>console.log(num*2));

// let ans=arr.map((num)=>num*2);
// console.log(ans);
// let reduce=arr.reduce((sum,num)=>sum+num,0);
// console.log(reduce);
// let filter=arr.filter((num)=>num%2==0);
// console.log(filter);

// var EmployeeData=function EmployeeData(id,Name,designation){
// var Employee={};
// Employee.id=id;
// Employee.Name=Name;
// Employee.designation=designation;
// return Employee;
// };
// console.log(EmployeeData(1, "kanav", "Web designer"));

// let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 16, 18, 20, 36, 40, 49];
// let ans=arr.filter((num)=>{
// return Number.isInteger(Math.sqrt(num));
// });
// console.log(ans);

const menu=[
  "Kadai Paneer",
  "Dal Makhni",
  "Masala Dosa",
  "Chicken Soup",
  "Chicken Butter Masala",
  "Veg Chowmein",
  "Egg Curry",
  "Egg Maggie",
  "Chicken Fry",
  "Chicken Biryani",
  "Khichdi",
  "Handi Paneer",
  "Onion Paratha",
  "Garlic Naan",
  "Onion Pizza",
  "Garlic Bread",
  "Onion Rings",
  "Chilli Paneer",
];
function isVeg(food){
if(food.toLowerCase().includes("chicken") || food.toLowerCase().includes("egg")){
  return false;
}
return true;
}
const veg=menu.filter(isVeg);
console.log(veg);


// let btn=document.querySelector("button");
// let input=document.querySelector("input");
// let para=document.getElementById("#para");
// btn.addEventListener("click",()=>{
//   // console.log(input.value);
//   para.innerText = input.value;
// })

// function maggieLekaraao(){
//   return new Promise(function(resolve,reject){
//     let ismaggie=false;
//     if(ismaggie){
//       resolve("Maggie");
//     }
//     else{
//       reject("not");
//     }
//   })
// };
// maggieLekaraao().then((value)=>{
// console.log(value);
// }).catch((err)=>{
// console.log(err);
// })


// let p= fetch("https://catfact.ninja/fact");
// p.then((value1)=>{
//   return value1.json();
// }).then((value2)=>{
//   document.getElementById("para").innerText=value2.fact
// })

// async function fetchData(){
//   let url=await fetch("https://catfact.ninja/fact");
//   let response= await url.json();
//   document.getElementById("para").innerText=response.fact;

// }
// fetchData();

function url(URL){
  return new Promise(function(resolve, reject){

  })
}

// let h1=document.createElement("h1");
// h1.innerText="hello";
// let body=document.querySelector("body");
// body.appendChild(h1);
 
// let ul= document.createElement("ul");
// ul.innerHTML=`<li>Hello</li> <li>World</li> `;
// let body=document.querySelector("body");
// body.appendChild(ul);



// let url=fetch("https://dog.ceo/api/breeds/image/random");
// let img=document.querySelector("img");
// url.then((value)=>{
//   return value.json();
// }).then((value1)=>{
//   img.src=value1.message;
// })
// let url = fetch("https://dog.ceo/api/breeds/image/random");
let img = document.querySelector("img");

fetch("https://dog.ceo/api/breeds/image/random").then((value) => {
  return value.json();
}).then((value1) => {
  img.setAttribute("src",value1.message) // Set the image source directly
}).catch((error) => {
  console.error("Error fetching the dog image:", error);
});

