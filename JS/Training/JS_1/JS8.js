
// ---------------X--------------

// Advanced Objects

// The reference Type
let Obj1={
    num:'123',
    value:123
};

let Obj2={
    num:'123',
    value:123
};
let Obj3=Obj1;
// The objects are reference of the location which stores the data
console.log("The Image won't be the same ",Obj1===Obj2);
console.log("The Image are same ",Obj1===Obj3);

// Context 
// => "this" - refers to the current object
// => "super" - refers to the parent object

// instantiation
class User{
    constructor(name,type){
        this.name=name
        this.type=type
    }
    introduce(){
        console.log(`Hey I'm ${this.name} ! I'm a ${this.type}`);
    }
}
