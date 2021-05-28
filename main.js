const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

const WIDTH = Math.round(window.innerWidth/100) * 64 * 1;
const HEIGHT = Math.round(window.innerHeight/100) * 64 * 1;

canvas.width = WIDTH;
canvas.height = HEIGHT;

const colors = ["#A7D948", "#8ECC39"]

function drawBoard() {
    for (y = 0; y < HEIGHT/64; y++) {
        for (x = 0; x < WIDTH/64; x++) {
            if (y % 2 == 0) {if (x % 2 == 0) {ctx.fillStyle = colors[0]} else {ctx.fillStyle = colors[1]}} else {if (x % 2 == 0) {ctx.fillStyle = colors[1]} else {ctx.fillStyle = colors[0]}}
            
            ctx.fillRect(x*64, y*64, 64, 64);
        }
    }
}
drawBoard();
