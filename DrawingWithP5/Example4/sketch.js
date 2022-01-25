function setup() {
  createCanvas(200, 200);
}

function draw() {
  stroke('white')
  strokeWeight(3)
  background(0, 5, 148);
  circleColor = color(19, 148, 0)
  fill (circleColor)
  circle(100, 100, 110)
  push();
  translate(100, 100);
  rotate(.95);
  rectMode(CENTER)
  starColor = color(255,0,0)
  fill (starColor)
  star(0, 0, 25, 60, 5);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

