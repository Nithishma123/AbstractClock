let lastMinChange = 0;
let bgColor = [];

function setup() {
  createCanvas(500,500);
}

function draw() {
  let h = hour();
  let m = minute();
  let s = second();

  if(m  !== lastMinChange) {
    console.log('Minute changed:', m);
    updateBackground();
    lastMinChange = m;
  }
  else {
    background(bgColor[0], bgColor[1], bgColor[2]);
  }

  translate(width / 2, height / 2);
  let hAngle = map(h % 12 + m/60, 0, 12,0, TWO_PI);
  rotate(hAngle);
  fill(173, 216, 230);
  rect(-50,-5,100,10);

  let mAngle = map(m + s / 60, 0, 60, 0, TWO_PI);
  rotate(-hAngle);
  rotate(mAngle);
  fill(111, 143, 175);
  rect(-75,-3,150,6);

  let tick = s + (frameCount % 60) / 60;
  let sAngle = map(tick, 0, 60,0, TWO_PI);
  rotate(-mAngle);
  rotate(sAngle);
  fill(0, 0, 128);
  rect(-100, -2, 200, 4);
}

function updateBackground() {
  bgColor = [random(255), random(255), random(255)];
  background(bgColor[0], bgColor[1], bgColor[2]);
}
