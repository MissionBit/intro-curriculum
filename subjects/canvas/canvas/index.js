/*jslint sloppy:true,white:true*/
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, 500, 500);

ctx.strokeStyle = 'white';
function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
function drawFrame() {
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.fillRect(0, 0, 500, 500);
    var i;
    for (i = 0; i <= 500; i = i + 10) {
        ctx.strokeStyle =
            'rgb(' + (i*255/500) + ',0,255)';
        line(Math.random() * 500, i, 500, 500);
    }
}
setInterval(drawFrame, 200);