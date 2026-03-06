//consts from HTML
const start = document.getElementById("start");
const restart = document.getElementById("restart");
const pause = document.getElementById("pause");
const paddleup = document.getElementById("up");
const paddledown = document.getElementById("down");

//variables
let started = 0;
let ballx = 200;
let bally = 200;
let ballxspeed = 5;
let ballyspeed = 3;
let paddlex = 700;
let paddley = 200;
let paddlespeed = 5;
let hits = 0;
let uparrowpressed = 0;
let downarrowpressed = 0;
let hitCounted = 0;

//event listeners for buttons
start.addEventListener("click", function() {loop(); started = 1;});
restart.addEventListener("click", function() {location.reload();});
pause.addEventListener("click", function() {noLoop(); started = 0;});
paddleup.onpointerdown = function() {uparrowpressed = 1;};
paddleup.onpointerup = function() {uparrowpressed = 0;};
paddledown.onpointerdown = function() {downarrowpressed = 1;};
paddledown.onpointerup = function() {downarrowpressed = 0;};

noLoop();

//setup for p5.js
function setup() {
	createCanvas(750, 750)
	textAlign(CENTER, CENTER);
	textSize(24);
}

//the main code
function draw() {
	fill(24, 71, 158);
	background(172, 200, 250);
	//don't start unless game started
	if (!started) {
		return;
	}
	circle(ballx, bally, 50);
	fill(0)
	text(hits, ballx, bally);
	fill(77, 77, 77);
	rect(paddlex, paddley, 20, 100);
	if ((keyIsDown(DOWN_ARROW) || downarrowpressed) && paddley < 650) {
		paddley += paddlespeed;
	}
	if ((keyIsDown(UP_ARROW) || uparrowpressed) && paddley > 0) {
		paddley -= paddlespeed;
	}
	ballx += ballxspeed;
	bally += ballyspeed;
	if (ballx > width - 25) {
		hits++;
		ballxspeed *= -1;
	}
	if (ballx < 25) {
		hits++;
		ballx = 25;
		ballxspeed *= -1;
	}
	if (ballx < paddlex - 5 && ballx > paddlex - 25 && bally >= paddley + 25 && bally <= paddley + 75 && !hitCounted) {
		if (bally - paddley > 50) {
			hits++;
			ballxspeed = (bally - paddley - 50) / -5;
			hitCounted = 1;
		}
		else if (bally - paddley < 50) {
			hits++;
			ballxspeed = (paddley + 50 - bally) / -5;
			hitCounted = 1;
		}
		else {
			hits++;
			ballxspeed *= -1;
			hitCounted = 1;
		}
	}
	if (!(ballx < paddlex - 5 && ballx > paddlex - 25 && bally >= paddley + 25 && bally <= paddley + 75)) {
		hitCounted = 0;
	}
	if (bally < 25) {
		hits++;
		bally = 25;
		ballyspeed *= -1;
	}
	if (bally > height - 25) {
		hits++;
		bally = height - 25;
		ballyspeed *= -1;
	}
}
