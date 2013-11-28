$(document).ready(function() {
    init();
    loop();
});

window.onresize = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

var canvas;
var context;
var mouse = {
    x:0,
    y:0
};

var entities;

function entity(x, y) {
    this.x = x;
    this.y = y;
    
    this.xv = 0;
    this.yv = 0;
    
    this.update = update;
    function update() {
        x += xv;
        y += yv;
    }
    
    this.render = render;
    function render() {
        context.beginPath();
        context.arc(x, y, 5, 0, Math.PI * 2, false);
        context.fillStyle = "#E29492";
        context.fill();
    }
}

function init() {
    canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    context = canvas.getContext("2d");
    
    entities = new Array(0);
}

function loop() {
    requestAnimationFrame(loop);
    update();
    render();
}

function update() {
    entities.push(new entity(mouse.x, mouse.y));
}

function render() {
    for (var i = 0; i < entities.length; i++) {
        entities[i].render();
    }
}

$(document).mousemove(function(event) {
    mouse.x = event.pageX;
    mouse.y = event.pageY;
});