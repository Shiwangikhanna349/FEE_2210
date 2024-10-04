var h1=document.createElement("h1");
console.log(h1);
h1.innerText="DOM ELEMENT";
var body=document.querySelector("body");
body.appendChild(h1);
var button=document.createElement("button");
console.log(button);
button.innerText="submit";
var body=document.querySelector("body");
body.appendChild(button);
// append passes the parent as the children and also takes the updated value but append child only passes the parent as the children and add the value at the end
h1.append(" hello");
// prepend
body.prepend("HI");
// remove 
// it will remove the element in
body.remove();



