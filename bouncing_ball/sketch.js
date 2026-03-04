const ballx = document.getElementById("ballx");
const bally = document.getElementById("bally");
const ballxspeed = document.getElementById("ballxspeed");
const ballyspeed = document.getElementById("ballyspeed");
const start = document.getElementById("start");
const restart = document.getElementById("restart");
let started = 0;
let x = 200;
let y = 200;
let xspeed = 5;
let yspeed = 3;
start.addEventListener("click", function() {
  if (!ballx.checkValidity()) {
    output.textContent += "Please enter a number. Proceeding with default x coordinate. ";
    console.log("Ballx invalid");
  }
  else if (Number(ballx.value) < 25 || Number(ballx.value) > 725) {
    output.textContent += "Too close to edge. Proceeding with default x coordinate. ";
    console.log("Ballx oob");
  }
  else {
    x = Number(ballx.value);
    console.log("Ballx valid");
  }
  if (!bally.checkValidity()) {
    output.textContent += "Please enter a number. Proceeding with default y coordinate. "
    console.log("Bally invalid");
  }
  else if (Number(bally.value) < 25 || Number(bally.value) > 725) {
    output.textContent += "Too close to edge. Proceeding with default y coordinate. "
    console.log("Bally oob");
  }
  else {
    y = Number(bally.value);
    console.log("bally valid");
  }
  ballx.disabled = true;
  bally.disabled = true;
  if (!ballxspeed.checkValidity()) {
    output.textContent += "Please enter a number. Proceeding with default x speed. ";
    console.log("ballxspeed invalid");
  }
  else if (Number(ballxspeed.value) == 0) {
    output.textContent += "Please enter a nonzero speed. Proceeding with default x speed. ";
    console.log("ballxspeed 0");
  }
  else {
    xspeed = Number(ballxspeed.value);
    console.log("ballxpseed valid");
  }
  if (!ballyspeed.checkValidity()) {
    output.textContent += "Please enter a number. Proceeding with default y speed. ";
    console.log("ballyspeed invalid");
  }
  else if (Number(ballyspeed.value) == 0) {
    output.textContent += "Please enter a nonzero speed. Proceeding with default y speed. ";
    console.log("ballyspeed 0");
  }
  else {
    yspeed = Number(ballyspeed.value);
    console.log("ballyspeed valid");
  }
  ballxspeed.disabled = true;
  ballyspeed.disabled = true;
  started = 1;
});
restart.addEventListener("click", function() {location.reload();});
function setup() {
  createCanvas(750, 750);
}

function draw() {
  fill(24, 71, 158);
  background(172, 200, 250, 10);
  if (!started) {
    return;
  }
  circle(x, y, 50);
  x += xspeed;
  y += yspeed;
  if (x > width - 25 || x < 25) {
    xspeed *= -1;
  }
  if (y > height - 25 || y < 25) {
    yspeed *= -1;
  }
}