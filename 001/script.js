$(document).ready(function() {
    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    for (var i = 0; i < circles.length; i++) {
        circles[i] = new circle(Math.random() * canvas.width / 2 + (Math.random() * 100),Math.random() * canvas.height / 2 + (Math.random() * 100) - 50, 5);
    }
    loop();
});

function circle(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    
    var xVel = 0;
    var yVel = 0;
    var xAcc = Math.random() * Math.random()*2;
    var yAcc = Math.random()*Math.random()*2;
    
    this.update = update;
    function update() {
        xAcc = Math.random()/2-0.25;
        yAcc = Math.random()/2-0.25;
        
        xVel += xAcc;
        x += xVel;
        
        yVel += yAcc;
        y -= yVel;
    }
    
    this.checkCollition = checkCollision;
    function checkCollision(canvas) {
        if (y >= canvas.height) {
            yVel *= -1;
        }
        
        if (x >= canvas.width) {
            xVel *= -1;
        }
        
        if (y <= 0) {
            yVel *= -1;
        }
        
        if (x <= 0) {
            xVel *= -1;
        }
    }
    
    this.render = render;
    function render(context) {
        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI, false);
        context.fillStyle = "#D25452";
        context.fill();
    }
};

var circles = new Array(250);
var tx = 800;
var ty = 300;

function loop(time) {
    window.requestAnimationFrame(loop);
    
    update();
    render();
}

function update() {
    var canvas = document.getElementById("canvas");
    for (var i = 0; i < circles.length; i++) {
        circles[i].update();
        circles[i].checkCollition(canvas);
    }
};

function handleMouseMove(evt) {
    var canvas = document.getElementById("canvas");
    console.log("asdfasdf" + getMousePos(canvas, event).x);
};

function render() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.fillStyle = "rgba(0, 0, 0, 0.05)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < circles.length; i++) {
        circles[i].render(context);
    }
};