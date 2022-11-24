// let instead of var
// let can't be redeclared again like the var
let a=20;
let b=20;
if(a>10){
    let a=10;
    b=10;
    // let gives the scope inside the if too.
}
var aa=20;
if(aa>10){
    var aa=10;
}
console.log("a",a,"_ aa ",aa,"b ",b);

// const

// doesn't able to change
const ch1=20;
let vv=20;
const ch2=vv;


// const properties can be changed
const user={
    Name:"Hariharan",
    Age:22,
    Place:"Salem",
    Virgin:true
}

// Destructuring

const nm=user.Name;
const age=user.Age;
//Instead of this 

const {Name ,Age}=user;//with same variable name
let {Place,Virgin}=user;

// Dynamic Object properties allocation

let name="Harry";
const obj={
    [name]:"Handsome Guy",
    ["Hey "+"hello"]:true,
    ["eat the food"]:true,
    [1309]:"lucky Number"
}
let a1=10;
let b1=20;
let c1="hey";
const obj2={//with same values as declared & also new values
    a1,b1,c1:c1+" Hello"
}

// template Strings [above th tab in keyboard]
const greety= `"",:."''''"`;
const greet=`Hello ${nm} you are really a ${obj.Harry} .You are looking like a ${age-5} now .Are you from ${Place}`


// default Arguments
const aka=20;
const anan="Hardik";
function defarg(aka=15,anan="Hi"){
    const greett=`hey ${anan} you look look ${aka}`;
    console.log(greett);
}

// Symbol 

let sy1=Symbol();
let sy2=Symbol("Hari")
let sy3=Symbol("Hari")
let val1=sy2;
let val2=sy3
// they create a unique value so they doesn't match with other exact values too
// so they won't interchange with the object properties
if(sy2===sy3){
    console.log("Symbols equal");
    // this won't be true
}
if(val1===sy2){
    console.log("val1 equals to sy2");
}
if(val2===sy3){
    console.log("val2 equals to sy3");
}
if(val1===val2){
    console.log("Values are equal");
    // this won't be true
}

// Arrow functions

function add1(a,b){
    return a+b;
}
const add2=(a,b)=>a+b; //returns a+b