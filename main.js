
var mouse_event="empty";

canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",mouseup);
function mouseup(e)
canvas.addEventListener("mousedown",mousedown);
function mousedown(e)
{
mouse_event="mousedown";
}
{
currentpositionofx=e.clientX-canvas.offsetLeft;
currentpositionofy=e.clientY-canvas.offsetTop;
if(mouse_event=="mousedown")
{
ctx.beginPath();
ctx.strokeStyle="green";
ctx.linewidth="2";
ctx.arc(currentpositionofx,currentpositionofy,radius,0,2*Math.PI);
ctx.stroke();
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e)
{
mouse_event="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e)
{
mouse_event="mouseleave";
}
}