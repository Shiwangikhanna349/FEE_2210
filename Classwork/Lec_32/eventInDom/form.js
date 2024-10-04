// var form=document.querySelector('form');
// form.addEventListener('submit',function(e){
//   // here e is event
//   // restricting the default behaviour using event caled preventDefault
//   e.preventDefault();
//   console.log("Submit");
// });
// it is used to get the data input in console
var form=document.querySelector('form');
form.addEventListener('submit',function(e){
  let inp=document.querySelector('input');
  

  console.dir(inp);
  console.log(inp.value);
  let p=document.querySelector("p");
  // it passes the input value to the paragraph and show it on the page
  p.innerText=inp.value;
  e.preventDefault();
});

