// Document is an object refers to the web page
// Window for the current browser window

//DOM selectors
//Get 
var g1=document.getElementsByTagName("h1");
var g2=document.getElementById("firsts");
var g3=document.getElementsByClassName("first");
console.log(g1+"_");
console.log(g2+"_");
console.log(g3+"_");
console.log(document.querySelector("input").getAttribute("value"))//Getting the value for the attribute "value in input field"
//Selector

var s1=document.querySelector("li");// first element
var s2=document.querySelectorAll("li")//All Element
console.log(s1+"_")
console.log(s2+"_");

//Set

var st1=document.querySelectorAll("li")[1];
st1.setAttribute("value",20)//Getting the value for the attribute "value in input field"
console.log(st1.getAttribute("value"))


//Style
var s1=document.querySelector("h1");
s1.style.fontFamily="times new roman"; //After style the property in a camelcase format

//Class
s1.className="Hey"
console.log(s1.className);
s1.className="hi" //Based on the class name the property changes
console.log(s1.className);

//Class List
var s2=document.querySelector("h1")
console.log(s1.classList);
s2.classList.add("one")//add the class 
console.log(s1.classList);
s2.classList.remove('hi')//removes the class
console.log(s1.classList);
s2.classList.toggle("hi");//add if not present and removes if present
console.log(s1.classList);
s2.classList.toggle("hi");//removes
console.log(s1.classList);
s2.classList.toggle("hi");//add
console.log(s1.classList);



