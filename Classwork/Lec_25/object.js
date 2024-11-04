// object is the instance of class,  it can store complex data, object can be declared in two ways:   constructor and literals 
// constructor is a predefined function  and we can use new keyword to create a constructor its our choice
// literals have two values {key, value} we can store multiple values in the object key represent unique value used to access all the values of the object
// A. constructor:
// const obj= new Object();
// console.log( obj);
// the type of the constructor is object
// console.log(typeof obj);
// B. Literals:
// const users={
//   age:25,
//   roll_no:1,
//    class:"FEE",
//    name:"shiwangi",
//    'full name':"Shiwangi Khanna"
// }
// the type of the literals is object
// console.log(typeof users);
// console.log(users.age);
// console.log(users['age']);
// // if we use users.name it will give 1st word but if we have multiple value string so we use [] brackets to access the value
// console.log(users['full name']);
// if we do like this console.log(users('full name')); it will give error and consider it as a function 
// console.log(users.'full name');

// 2. changing/ updating the value of Object 
// users.name="mehak";
// console.log(users.name);

// 3. Object inside the Object
// const users={
//   user1:{
// name:"Mehak",
// age:18
//   },
//   user2:{
//     name:{
// id:1,
// class:12,
//     },
//     age:18
//   },
//   user3:{
//     name:"Shruti",
//     age:18
//   }

// };
// // console.log(users.user2.name);
// console.log(users.user2.name.id);

// 4. Object inside a array
// const arr=[
//   {
//     id:1,
//     name:"Shiwangi"
//   },
//   {
//     id:2,
//     name:{
//       roll_no:1,
//       class:12
//     }
//   },
//   {
//     id:3,
//     name:"Kaya"
//   }
// ];
// console.log(arr[1].name.class);
// merging 2 objects
// let obj1={name1:"Kavya",age1:25}
// let obj2={name2:"Shiwangi",age:18}

// let obj3={...obj1, ...obj2};
// in case of constructor we do using assign and in literals we us spread operator
// let obj4=Object.assign(obj1,obj2);
// console.log(obj4);

// let product=[
//   {
//     id:1,
//     info:{
//       name:"Shiwangi",
//       age:18
//     }
//   },
//   {
//     id:2,
//     info:{
//       name:"mehak",
//       age:19,
//       moreDetails:{
//         address:"UNA"
//       }
//     }
//   }
// ];
// console.log(product[1].info.moreDetails.address);


// function printName(func,num){
//   for(let i=0;i<=10;i++){
//     func();
//   }
// };
// let name=function(){
//   console.log("yash");
// }
// printName(name,20);


// function evenOrOdd(func,num){
//   for(let i=0;i<num;i++){
// func(i);
//   }
// }
// let even=function(num){
// if(num%2==0){
//   console.log(num);
// }
// else{
//   console.log("odd");
// }
// }
// evenOrOdd(even,20);

// let Cart=[
//   {
//     id:1,
//     name:"Iphone 15",
//     price:84000,
//     qty:2
//   },
//   {
//     id:2,
//     name:"Iphone 16",
//     price:164000,
//     qty:1
//   }
// ];
// let ans=Cart.reduce(function(sum,item){
//   return sum+item.price*item.qty;
// },0);
// console.log(ans);

// function sum(a,b){
// console.log(a+b);
// }
// sum(10,20);
//  let add=(a,b)=>{
// console.log(a+b);
// };
// add(10,20);

// array methods
// let arr=[1,2,3,4];
// for each
// arr.forEach(num=>console.log(num*2));
// let ans=arr.map(num=>num*2);
// console.log(ans);
// let filter=arr.filter(num=>num%2==0);
// console.log(filter);

// let reduce=arr.reduce((sum,num)=>sum+num,0);
// console.log(reduce);


// function func1(){
// console.log("first");
// }
// function func2(call){
//   console.log("second");
//   call;
// }
// func2(func1);



