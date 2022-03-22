function setup() {
  createCanvas(400, 400);
  background(200);
  strokeWeight(5)
}

function draw() {
  if (mouseIsPressed) {
    if (mouseX <= 20) {
    if (mouseY <= 15) {
      brushColor = redColor;
      } else if (mouseY < 37) {
      brushColor = ojColor;
      } else if (mouseY < 58) {
      brushColor = yellowColor;
      } else if (mouseY < 79) {
      brushColor = greenColor;
      } else if (mouseY < 101) {
      brushColor = lightbColor;
      } else if (mouseY < 121) {
      brushColor = darkbColor;
      } else if (mouseY < 142) {
      brushColor = violetColor;
      } else if (mouseY < 163) {
      brushColor = brownColor;
      } else if (mouseY < 184) {
      brushColor = whiteColor;
      } else if (mouseY < 205) {
      brushColor = blackColor;
      }
    }
  stroke(brushColor)
  line(mouseX, mouseY, pmouseX, pmouseY)
  }
  noStroke()
  redColor = color(255, 17, 0)
  fill(redColor)
  square(0, 0, 20)
  ojColor = color(255, 128, 0)
  fill(ojColor)
  square(0, 21, 20)
  yellowColor = color(251, 255, 0)
  fill(yellowColor)
  square(0, 42, 20)
  greenColor = color(120, 255, 0)
  fill(greenColor)
  square(0, 63, 20)
  lightbColor = color(0, 255, 251)
  fill(lightbColor)
  square(0, 84, 20)
  darkbColor = color(0, 0, 255)
  fill(darkbColor)
  square(0, 105, 20)
  violetColor = color(221, 0, 255)
  fill(violetColor)
  square(0, 126, 20)
  brownColor = color(128, 64, 0)
  fill(brownColor)
  square(0, 147, 20)
  whiteColor = color(255, 255, 255)
  fill(whiteColor)
  square(0, 168, 20)
  blackColor = color(0, 0, 0)
  fill(blackColor)
  square(0, 189, 20)
  
}