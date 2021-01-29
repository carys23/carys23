var canvas = document.getElementById('flowerCanvas');
var ctx = canvas.getContext('2d');

var radius = 20;
var petals =  5;

ctx.beginPath();
ctx.arc(250, 250, radius, 0, 2*Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.save();

ctx.translate(250,250);


for(var i = 0; i < 5; i++){
  ctx.lineTo(200,0);

  ctx.stroke();
}