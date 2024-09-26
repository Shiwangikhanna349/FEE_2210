console.log()         //it give undefineed output because it accept the return type

console.log(1==1);   // output:true

console.log(1=="1");   //output:true

console.log([]==0);  //output:true   by default the value is null in array

console.log(""==1);   //output:false

console.log(""==[]);    // output:true

// empty array and empty string converts to 0 or 1
console.log(1+2);  //output:3

console.log(typeof(1+"2"));  // output:12 explanation: number 1 is converted to string type before concat with string 2 and datatype is string

console.log(5 -"2");    //output: 3 explanation: 2 is converted to number so 5-2=3

console.log(10 + "A"); // output: is 10A

console.log(10 - "A") // output:NaA

console.log(10+ "2" - "A");  // output: NaN

console.log(10+"0"+"1"); //output: 1001   
// string to number:
let a="20";
console.log(typeof a);
// here we create a constructor to convert string to  number
let c = Number(a);
console.log(typeof c);
// parsetInt is use to convert string to number
let d=parseInt(a);
console.log(typeof d);



