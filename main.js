var grids = [16, 32, 48, 64];
if (grids[0] * 10 < window.innerWidth/2) {
    var grid = 16;
} 
if (grids[1] * 10 < window.innerWidth/2) {
    var grid = 32;
}
if (grids[2] * 10 < window.innerWidth/2){
    var grid = 48;
}
if (grids[3] * 10 < window.innerWidth/2){
    var grid = 64;
}
console.log(grid);

const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

const WIDTH = grid * 10;
const HEIGHT = grid * 10;

canvas.width = WIDTH;
canvas.height = HEIGHT;

window.addEventListener("resize", function() {
    location = location;
})

const colors = ["#A7D948", "#8ECC39", "#5076F9", "#0BB600"];

var score = 0;

function drawBoard() {
    ctx.fillStyle = colors[3];
    for (let x = 0; x < 10; x++) {
        ctx.fillRect(x*grid, 0, grid, grid);
    }
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            if (y % 2 == 0) {if (x % 2 == 0) {ctx.fillStyle = colors[0]} else {ctx.fillStyle = colors[1]}} else {if (x % 2 == 0) {ctx.fillStyle = colors[1]} else {ctx.fillStyle = colors[0]}}
            
            ctx.fillRect(x*grid, y*grid+grid, grid, grid);
        }
    }
    ctx.fillStyle = "white";
    ctx.font = grid/2 + "px Arial";
    ctx.fillText("Score: " + score, grid*0.1, grid*0.7);
}

window.addEventListener("keydown", function(e) {
    console.log(e);
    if (e.key == "w") {
        head.direction = "up";
    }
    if (e.key == "a") {
        head.direction = "left";
    }
    if (e.key == "s") {
        head.direction = "down";
    }
    if (e.key == "d") {
        head.direction = "right";
    }
});

var head = {
    x: 0,
    y: grid,
    xv: 0,
    yv: 0,
    speed: 2,
    direction: undefined,
    color: colors[2]
}
function draw() {
    ctx.fillStyle = head.color;
    head.x += head.xv * head.speed;
    head.y += head.yv * head.speed;
    ctx.fillRect(head.x, head.y, grid, grid);
}
function update() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    drawBoard();
    draw();
    var linedx = head.x % grid == 0;
    var linedy = head.y % grid == 0;
    console.log(linedx, linedy);
    if (head.direction == "up" && linedx) {
        head.xv = 0;
        head.yv = -1;
    }
    if (head.direction == "left" && linedy) {
        head.xv = -1;
        head.yv = 0;
    }
    if (head.direction == "down" && linedx) {
        head.xv = 0;
        head.yv = 1;
    }
    if (head.direction == "right" && linedy) {
        head.xv = 1;
        head.yv = 0;
    }

    requestAnimationFrame(update);
}
update();
