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
  let hAngle = map(h % 12 + m / 60, 0, 12, -PI / 2, TWO_PI - PI / 2);
  rotate(hAngle);
  fill(173, 216, 230);
  rect(0,-5,100,10);

  let mAngle = map(m + s / 60, 0, 60, -PI / 2, TWO_PI - PI / 2);
  rotate(-hAngle);
  rotate(mAngle);
  fill(111, 143, 175);
  rect(0,0,150,6);

  let tick = s + (frameCount % 60) / 60;
  let sAngle = map(tick, 0, 60, -PI / 2, TWO_PI - PI / 2);
  rotate(-mAngle);
  rotate(sAngle);
  fill(0, 0, 128);
  rect(0, 1, 200, 4);
}

function updateBackground() {
  bgColor = [random(255), random(255), random(255)];
  background(bgColor[0] , bgColor[1], bgColor[2]);
}
