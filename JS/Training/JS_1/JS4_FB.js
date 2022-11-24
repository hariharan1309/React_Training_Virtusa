var database=[
    {
        uName:"Hari",
        uPass:"1309"
    }
];
var nFeed=[
    {
        uName:"Boby",
        uMsg:"This is a picture of lake"
    },
    {
        uName:"Boby",
        uMsg:"This is a picture of lake"
    }
];

var userN=prompt("Enter your Name :")
var userP=prompt("Password ")
function signIn(userN,userP){
    if(userN===database[0].uName && userP===database[0].uPass){
        console.log(nFeed);
    }
    else{
        alert("UserName/Password is wrong")
    }
}
signIn(userN,userP)