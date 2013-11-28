var canvas;
var context;

$(document).ready(function() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
    loop();
});

var branches;

function branch(x, y) {
    var x, y;
    var sFac = 3;
    var xDir = (Math.random() - 0.5) * sFac;
    var yDir = (Math.random() - 0.5) * sFac;
    
    var life = 0;
    this.living = true;
    var lifeLimit = 200;
    var didSpawn = false;
    
    var chance = 0.5;
    
    this.update = update;
    function update() {
        life++;
        if (life > lifeLimit) {
            if (!didSpawn) {
                spawn();
            }
            this.living = false;
        }
        
        x += xDir;
        y += yDir;
        
        if (Math.random() < chance && !didSpawn) {
            spawn();
            didSpawn = true;
        }
    }
    
    this.render = render;
    function render() {
        context.beginPath();
        context.arc(x, y, 1, 0, 2 * Math.PI, false);
        context.fillStyle = "#D25452";
        context.fill();
    }
    
    function spawn() {
        branches.push(new branch(x, y));
    }
};

function init() {
    branches = new Array(1);
    branches[0] = new branch(canvas.width / 2, canvas.height / 2);
}

function loop() {
    setTimeout(function() {
        requestAnimationFrame(loop);
        update();
        render();
    }, 1000/60);
}

function update() {
    for (var i = 0; i < branches.length; i++) {
        branches[i].update();
        if (!branches[i].living) {
            branches.splice(i, 1);
        }
    }
}

function render() {
    context.fillStyle = "rgba(0, 0, 0, 0.05)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < branches.length; i++) {
        branches[i].render();
    }
}