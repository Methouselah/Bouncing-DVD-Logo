const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const out = document.querySelector(".out");
const img = new Image();
img.src = "DVD_logo.svg";

let x = 400;
let y = 300;
let xSpeed = 1;
let ySpeed = 1;

canvas.width = 800;
canvas.height = 600;

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
  clearCanvas();
  ctx.drawImage(img, x, y, 120, 80);
  x = x + xSpeed;
  y = y + ySpeed;

  if (x + 120 == canvas.width || x == 0) {
    xSpeed = -xSpeed;
  }
  if (y + 80 == canvas.height || y == 0) {
    ySpeed = -ySpeed;
  }
}

setInterval(draw, 10);

console.log(img);
