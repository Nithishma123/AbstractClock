let lastMinuteChange = 0;
let backgroundColors = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  let h = hour();
  let m = minute();
  let s = second();

  // Check if a minute has passed
  if (m !== lastMinuteChange) {
    // Update background color every minute
    updateBackground();
    lastMinuteChange = m;
  } else {
    // Clear the background to prevent traces
    background(backgroundColors[0], backgroundColors[1], backgroundColors[2]);
  }

  translate(width / 2, height / 2);

  // Draw hour hand
  let hAngle = map(h % 12 + m / 60, 0, 12, 0, TWO_PI);
  rotate(hAngle);
  fill(255, 0, 0);
  rect(-50, -5, 100, 10);

  // Draw minute hand
  let mAngle = map(m + s / 60, 0, 60, 0, TWO_PI);
  rotate(-hAngle); // Compensate for the hour hand rotation
  rotate(mAngle);
  fill(0, 255, 0);
  rect(-75, -3, 150, 6);

  // Draw smooth ticking seconds hand
  let smoothSeconds = s + (frameCount % 60) / 60;
  let sAngle = map(smoothSeconds, 0, 60, 0, TWO_PI);
  rotate(-mAngle); // Compensate for the minute hand rotation
  rotate(sAngle);
  fill(0, 0, 255);
  rect(-100, -2, 200, 4);
}

function updateBackground() {
  // Update background color
  backgroundColors = [random(255), random(255), random(255)];
  background(backgroundColors[0], backgroundColors[1], backgroundColors[2]);
}
