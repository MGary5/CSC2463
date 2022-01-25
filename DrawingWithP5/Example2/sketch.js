function setup() {
  createCanvas(200, 100);
}

  function draw() {
    clear();
    noStroke();
    background(400);
    circleColor1 = color(252, 139, 139);
    circleColor1.setAlpha(125);
    fill (circleColor1)
    circle(100, 50, 75);
    circleColor2 = color(69, 247, 117);
    circleColor2.setAlpha(125);
    fill (circleColor2)
    circle(125, 95, 75);
    circleColor3 = color(102, 169, 250);
    circleColor3.setAlpha(125);
    fill (circleColor3)
    circle(75, 95, 75);
  
  }

