canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(120,210,100,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=5;
ctx.arc(260,310,100,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(380,210,100,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="Green";
ctx.lineWidth=5;
ctx.arc(510,310,100,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(650,210,100,0,2 * Math.PI);
ctx.stroke();

