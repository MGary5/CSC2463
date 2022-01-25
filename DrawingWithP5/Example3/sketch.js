const x = 50;
const y = 50;
const w = 80;
const h = 80;
const radius = 125;
let angle = 0;
function setup() {
  createCanvas(225, 100);
  angleMode(DEGREES);
}

function draw() {
  clear();
  noStroke();
  background(0);
  circleColor = color(225, 255, 0)
  fill (circleColor)
  arc(x, y, w, h, angle - 140, angle + 140)
  ghostColor = color(242, 0, 0)
  fill (ghostColor)
  rect(135, 12, 75, 75, 35, 35, 0 ,0)
  ghostEyes = color(255, 255, 255)
  fill (ghostEyes)
  circle (192, 45, 24)
  fill (ghostEyes)
  circle(152, 45, 24)
  ghostIris = color (5, 5, 255)
  fill (ghostIris)
  circle (192, 45, 14)
  fill (ghostIris)
  circle (152, 45, 14)

}

