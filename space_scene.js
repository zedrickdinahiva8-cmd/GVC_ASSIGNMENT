//ZEDRICK DINAHIVA BSIT2-A

// Short Space Scene - p5.js
let stars = [];

function setup() {
  createCanvas(600, 400);
  noStroke();
  for (let i = 0; i < 100; i++) {
    stars.push({ x: random(width), y: random(height), phase: random(TWO_PI) });
  }
}

function draw() {
  background(5, 5, 25);
  drawStars();
  drawPlanet(120, 120, 100, color(220, 120, 60));   // call 1
  drawPlanet(400, 100, 60, color(80, 160, 220));    // call 2
  drawPlanet(300, 300, 140, color(200, 170, 110));  // call 3
}

// Calculates and returns a brightness value (60-255) that pulses over time.
function calculateTwinkle(phase) {
  let wave = sin(frameCount * 0.05 + phase);  // local variable
  return map(wave, -1, 1, 60, 255);
}

// Draws every star using its own twinkling brightness.
function drawStars() {
  for (let s of stars) {
    fill(255, calculateTwinkle(s.phase));
    ellipse(s.x, s.y, 3);
  }
}

// Draws a planet at (x, y) with a given size and color, plus a highlight.
function drawPlanet(x, y, size, planetColor) {
  fill(planetColor);
  ellipse(x, y, size);
  fill(255, 40);
  ellipse(x - size * 0.15, y - size * 0.15, size * 0.5);
}
