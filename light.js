const canvas = document.getElementByID('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let size = 0;
let postitionX = 0;
let postitionY =0;
let angle = 0;

function drawFlower (){
        ctx.fillStyle = 'red';
        ctx.strokeStyle = 'blue';
        ctx.lineWidth =5;
        ctx.beginPath();
        ctx.arc(postitionX. positionY, 20, 0, Math.PI * 2);
        ctx.closePtyh() ;
        ctx.fillStyle();
        ctx.stroke();

}

function animate(){
ctx.clearRect(0, 0, canvas,width, canvas.height);

postitionX += 0.2 * Math.sin(angle);
postitionY += 0.2;
angle += 0.1;
drawFlower()
requestAnimationFrame(animate);}
 animate();