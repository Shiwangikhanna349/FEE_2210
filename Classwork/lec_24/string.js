// 1.trim
let msg="       hello         ";
console.log(msg.trim());
// 2. uppercase
console.log(msg.toUpperCase());
// 3. lowercase
console.log(msg.toLowerCase());
//4.indexof
console.log(msg.indexOf('r'));

//5.Mutable or unmutable 
// mutable:in which we can change the data or value eg:array,list,objects
// unmutable:in which we cannot change or modify the data eg: string,numbers
let txt="have a nice day";
txt[3]='t';
// console.log(txt);
// 6. slice:(indexstart,indexend-1)
let txt="have a nice day";
console.log(txt.slice(2));
console.log(txt.slice(2,11));
// it will take the values from the last of the string
console.log(txt.slice(-2));
// 7. Replace
let text="this is a content";
console.log(text.replace('content','data'));
// 8. repeat
let data="this is a content\n";
console.log(data.repeat(10));
// 9.string template literals:
// name is Shiwangi khanna
let firstname="Shiwangi";
let lastname="khanna";
// simple way to do this
console.log(firstname+" "+lastname);
// using string template literals
console.log(`${firstname} ${lastname}`);

