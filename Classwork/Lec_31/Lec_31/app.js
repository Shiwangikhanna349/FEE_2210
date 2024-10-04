// set attribute take only one class at a time but classlist can take a multiple classes at a single time
var newh1=document.querySelector('h1');
console.dir(newh1.classList);
// to add the classlist to the h1 tag
// token returns the array in which all the classes are stored
newh1.classList.add("green");
newh1.classList.remove("green");
var b=newh1.classList.contains("green");
console.dir(b);
// toggle: is used to remove and add class
newh1.classList.toggle("black");
newh1.classList.toggle("green");

