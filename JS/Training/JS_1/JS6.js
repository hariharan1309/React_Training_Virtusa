// Initially Root scope =>window
var fun="Can i access it ?";
function Acc1(){
    var fun="Access 1";
    console.log(fun);
}

function Acc2(){
    // Child scope
    var fun="Access 2";
    console.log(fun);
}

function Acc3(){
    fun="Access 3";
    console.log(fun);
}
console.log(fun);
if (true) {
    var fun="Funny !!!"
} 
console.log(fun);


// Ternary Operator

var aka=2;
console.log(aka);
aka=aka%2==0?"Even":"Odd";
console.log(aka);

// Switch


function swit(val1){
    var ans;
    switch (val1) {
        case 2:
            ans="Even";
            break;
        case 3:
            ans="Trio";
            break;
        case 5:
            ans="Penta";
            break;
        default:
            ans="Some Numerical Value"
            break;
    }
    return ans;
}