var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("grady")
var content=document.querySelector("h3")

function Graddy(){
    body.style.backgroundImage="linear-gradient(to right,"+color1.value+","+color2.value+")";
    content.textContent=body.style.backgroundImage+";";
}

color1.addEventListener("input",Graddy)
color2.addEventListener("input",Graddy)