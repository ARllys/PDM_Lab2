window.addEventListener("deviceorientation", 
on_device_orientation);
function on_device_orientation(evt)
{
var alpha = evt.alpha;
var beta = evt.beta;
var gamma = evt.gamma;
document.getElementById("a").innerHTML = "alpha = "+alpha;
document.getElementById("b").innerHTML = "beta = "+beta;
document.getElementById("c").innerHTML = "gamma = "+gamma;
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var centru = {x:canvas.width/2, y:canvas.height/2}
var latura_patrat = 100;
context.clearRect(0, 0, c.width, c.height);
context.fillStyle = "#fa8072";
context.beginPath();
context.fillRect(480, 320, event.gamma*20, 300);
context.fill();
context.fillStyle = "green";
context.beginPath();
context.fillRect(0, 0, 1000, event.beta*20);
context.fill();
}
