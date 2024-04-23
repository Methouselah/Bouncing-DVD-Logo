const img = document.querySelector("#img");

const width = window.innerWidth;
const height = window.innerHeight;
const logoWidth = 200;
const logoHeight = 102;

let r, g, b;

let x = random(0, width - logoWidth),
  y = random(0, height - logoHeight),
  xSpeed = 1,
  ySpeed = 1;

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener("resize", function () {
  width = window.innerWidth;
  height = window.innerHeight;
});

function draw() {
  x = x + xSpeed;
  y = y + ySpeed;

  img.style.top = y + "px";
  img.style.left = x + "px";

  if (x + logoWidth >= width || x <= 0) {
    xSpeed = -xSpeed;
    img.style.fill = `rgb(${(r = random(0, 255))}, ${(g = random(
      0,
      255
    ))}, ${(b = random(0, 255))})`;
  }
  if (y + logoHeight >= height || y <= 0) {
    ySpeed = -ySpeed;
    img.style.fill = `rgb(${(r = random(0, 255))}, ${(g = random(
      0,
      255
    ))}, ${(b = random(0, 255))})`;
  }

  img.style.display = "block";
}

setInterval(draw, 10);
