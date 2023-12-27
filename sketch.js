// setup() is called once at page-load
function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
}

// draw() is called 60 times per second
function draw() {
    let hr = map((hour()%12), 0, 12, 0, 360);
    let min = map(minute(), 0, 60, 0, 360);
    let sec = map(second(), 0, 60, 0, 360);
    let c = map(second(), 0, 60, 100, 255);

    background(225);
    frameRate(30);
    push();
    rotate(radians(hr));
    rect(-2,-125,2,125);
    fill(180);
    rotate(radians(min));
    fill(100);
    rotate(radians(sec));
}
