// // 1.trim
// let msg="       hello         ";
// console.log(msg.trim());
// // 2. uppercase
// console.log(msg.toUpperCase());
// // 3. lowercase
// console.log(msg.toLowerCase());
// //4.indexof
// console.log(msg.indexOf('r'));

// //5.Mutable or unmutable 
// // mutable:in which we can change the data or value eg:array,list,objects
// // unmutable:in which we cannot change or modify the data eg: string,numbers
// let txt="have a nice day";
// txt[3]='t';
// // console.log(txt);
// // 6. slice:(indexstart,indexend-1)
// let txt="have a nice day";
// console.log(txt.slice(2));
// console.log(txt.slice(2,11));
// // it will take the values from the last of the string
// console.log(txt.slice(-2));
// // 7. Replace
// let text="this is a content";
// console.log(text.replace('content','data'));
// // 8. repeat
// let data="this is a content\n";
// console.log(data.repeat(10));
// // 9.string template literals:
// // name is Shiwangi khanna
// let firstname="Shiwangi";
// let lastname="khanna";
// // simple way to do this
// console.log(firstname+" "+lastname);
// // using string template literals
// console.log(`${firstname} ${lastname}`);


// setTimeOut
// setTimeout(()=>{
//   console.log("setTimeOut");
// },2000);

// let count=0;
// let interval=setInterval(function(){
//   count++;
//   console.log(`count ${count}`);
//   if(count>=3){
//     clearInterval(interval);
//   }
// },1000);


// Suppose you want to maggie:
// Step 1: maggi lene gaya : 2 sec
// Step 2: mai maggi le k aa gaya
// Step 3: maggi banana start: 2 sec
// Step 4: maggi ban gayi
// Step 5: maggi khana start: 2 sec
// Step 6: maggi kha liya


// console.log("maggie lene gaya");
// setTimeout(()=>{
//   console.log("mai maggi le k aa gaya");
//   console.log("maggi banana start");
//   setTimeout(()=>{
// console.log("maggi khana start");
// setTimeout(()=>{
// console.log("maggi kha liya")
// },2000);
// console.log("")
//   },2000);
// },2000)


// const ticket= new Promise(function(resolve,reject){
//   const isBoarded=false;
//   if(isBoarded){
//     resolve("Boarded");
//   }
//   else{
//     reject("NotBoarded");
//   }
// });

// ticket.then((data)=>{
//   console.log("wohoo");
  
// }).catch((data)=>{
// console.log("error",data);

// }).finally((data)=>{
// console.log("it will execute always");

// })

// function maggie(){
//   return new Promise((resolve,reject)=>{
//     let dukankhuli=false;
//     if(dukankhuli){
//       resolve("dukankhuli")
//     }
//     else{
//       reject("dukanband");
//     }
//   })
// };
// maggie().then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.log(err);
// })


function downloadMovie(url){
  return new Promise(function(resolve,reject){
    let ext=url.split("/").pop().split(".").pop();
    if(ext!="mp4"){
     reject("Invalid")
    }
    else{
      setTimeout(function(){
resolve(url.split("/").pop())
      },2000);
    }
  })
}
// downloadMovie("myurl.com/avengers.mp4").then((value)=>{
//   console.log(value);
// }).catch((err)=>{
// console.log(err);
// })

async function func(){
const file= await downloadMovie("myurl.com/avengers.mp4");
console.log1(file);
}
func(); 

