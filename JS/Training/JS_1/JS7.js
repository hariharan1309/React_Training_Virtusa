// Functions Advanced
// Closure
const val1=()=>{
    const greet="Hey";
    const val2=()=>alert(greet);
    return val2;
}
const newFun=val1();
console.log("Closure ...",newFun());
// This function ran ,executed and stoped 
// But the reference values are stored in memory.
// The child scope won't be available for parent but the parent always available for child

// Currying 
const cur1=(a,b)=>a+b;//if the statements are a single line we don't need return 
const cur2=(a)=>(b)=>a*b;
const mulby5=cur2(5);//giving the value to make dynamic functions
console.log("Currying ...",mulby5(10));

// Compose
// structuring multi functions

const struct=(a,b)=>(c)=>a(b(c));
// add
const add=(a)=>a+a;
const mul=(a)=>a*a;
console.log("Compose ...",struct(add,mul)(10));
// always "avoid side effects,ensure functional purity"
// side efeects => console any values 
//functiona purity => always return values eof
//
// ---------------X--------------

// Advanced Arrays
// forEach -> doesn't have a return 
const arr1=[1,2,3,4,5];
// num points to array values for each iter
const arr2=[];//empty array
const farr=arr1.forEach((num)=>num+2);//does nothing just iterate the array
const farr1=arr1.forEach((num)=>arr2.push(num+2));//adding the array elements to the arr2

// Map ,Reduce ,Filter ->always returns a value
const map1=arr1.map(num=> num+2)//has a return value
// adds 2 for all arr1 elements and store at map1
const filter1=arr1.filter(num=> num%2===0);
//filters by the condition and stores the acceptable values
const reduce1=arr1.reduce((acc,num)=>acc+num,5);
//5 is the initial value for acc
// the acc is the accumulator which stores the previous return value
// reduce 5+1->6+2->8+3->11+4->15+5=>20
