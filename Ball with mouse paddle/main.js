var canvas, canvasContext;
var ballX =75;


window.onload = function () {
canvas = document.getElementById('gameCanvas');
canvasContext = canvas.getContext('2d');

var framesPerSecond = 30;
setInterval(updateAll, 1000/framesPerSecond);
}


function updateAll() {
    ballX+= 5;
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0, canvas.width, canvas.height);
    console.log(ballX);


    canvasContext.fillStyle = 'white';
    canvasContext.beginPath();
    canvasContext.arc(ballX,100, 10, 0, Math.PI*2, true);
    canvasContext.fill();
}