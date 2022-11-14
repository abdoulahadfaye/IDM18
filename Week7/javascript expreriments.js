var canvas, ctx;

function randomColor() {
    var color = 'rgb('; //'rgb(120, 240, 99)'
    color += Math.floor(Math.random() * 255)
        + ',';
    color += Math.floor(Math.random() * 255)
        + ',';
    color += Math.floor(Math.random() * 255)
        + ',';

    return color;
}
function drawCircle(x, y){

    ctx.beginPath();
    ctx.arc(x, y, 30, 0, 2 * Math.PI);
    ctx.fillStyle = randomcolor();
    ctx.fill();
}
//get canvas element...............
window.addEventListener('load', function (evt) {
    //get canvas element...............
    var canvas = document.querySelector('canvas');

    //get drawing context
    ctx = canvas.getContext('2d')

    //add mousemove event listener to canvas
    canvas.addeventlistener('mousemove', function (e) {
        //this runs on every mousemove over the canvas*
        console.log(e);

        var x = e.clientX - e.targert.offsetLeft;
        var y = e.clientY - e.target.offsetTop;

        drawCircle(x, y);
    })

});