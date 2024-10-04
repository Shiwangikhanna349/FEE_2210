var h1=document.createElement("h1");
h1.innerText="Shiwangi Khanna";
var body=document.querySelector("body");
body.appendChild(h1);
var h2=document.createElement("h2");
h2.innerText="Summary";
var body=document.querySelector("body");
body.appendChild(h2);
var p=document.createElement("p");
p.innerText="I am 2nd year student of BE-CSE at chitkara University and expertise in the following:";
var body=document.querySelector("body");
body.appendChild(p);

var img = document.createElement("img");
img.setAttribute("src", "./photo.jpg"); 
img.setAttribute("alt", "Profile Picture");

document.body.appendChild(img);

var ul = document.createElement("ul");
ul.innerHTML = `
  <li>Communication Skills</li>
  <li>Creativity</li>
  <li>Problem Solving</li>
  <li>Teamwork</li>
`;

document.body.appendChild(ul);
var h2Education = document.createElement("h2");
h2Education.innerText = "Education";
document.body.appendChild(h2Education);

var ul = document.createElement("ul");
ul.innerHTML = `
  <li>Class X (CBSE):92.2%</li>
  <li>Class XII (CBSE):89.9%</li>
  <li>Currently Persuing BE-CSE from Chitkara University</li>

`;
document.body.appendChild(ul);

var h2Education = document.createElement("h2");
h2Education.innerText = "Skills";
document.body.appendChild(h2Education);
var ul = document.createElement("ul");
ul.innerHTML = `
  <li>HTML and CSS and bit of javascript also</li>
  <li>Python</li>
  <li>C programming</li>

`;
document.body.appendChild(ul);






