// document.addEventListener("dblclick",function(){
//     this.documentElement.style.backgroundColor="blue";
// }
// )
// There are Num of Events available 
//Button click
var btn=document.querySelector("button");
btn.addEventListener("click",function(){
    btn.style.color="green"
    console.log("Clicked !!!");
});
//Double Click
var btn1=document.getElementsByTagName("button")[0];//the btn tag is a array type
btn1.addEventListener("dblclick",function(){
    btn.style.backgroundColor="yellow";
    btn.style.color="Grey";
})
//Adding Elements
var button=document.getElementById("enter");
var task=document.getElementById("uinput");
var ul=document.querySelector("ul");
button.addEventListener("click",function(){
    var str=task.value;
    if(str.length>0)
        Addtask(str)
});
task.addEventListener("keypress",function(event){//the event is the parameter taken by while clicking the keyboard
//    console.log(event.which) Gives the Char code 
        // console.log(event);
    var str=task.value;
    if(str.length>0 && event.keyCode===13)  
        Addtask(str)   

});

function Addtask(str){
    var li=document.createElement("li");//creates an li element
    li.appendChild(document.createTextNode(str));
    ul.appendChild(li);
    task.value="";    
}
