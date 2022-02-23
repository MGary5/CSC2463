let character= [];
let count = 10;
let dead = 0;
var timerValue = 30;
var startButton;

function preload() {

  spriteSheet = loadImage("BugSheetMan.png");

}

function setup() {
  createCanvas(800, 800);
  for (i =0; i < count; i++) {
    character[i]= new Character(spriteSheet, random(100, 700), random(100,700), random(1,5), random([-1,1]));
  }

  setInterval(timeIt, 1000);
}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}

function draw() {
  background(240, 240, 240);
  text("Bugs Squished: " + dead, width/2, height/2);
  if (timerValue >= 10) {
    text("0:" + timerValue, width/2 , height/2+ 15 );
  }
  if (timerValue < 10) {
    text('0:0' + timerValue, width / 2 , height / 2 + 15);
  }
  if (timerValue == 0) {
    text('game over', width / 2 , height / 2 + 30);
    character[i].stop();
  }
  for (i =0; i < count; i++) {
    character[i].draw();
  }
}

function mousePressed() {
  for (i =0; i < count; i++) {
    character[i].grab();
  }
}

class Character {
  constructor(spriteSheet, x, y, speed, move) {
    this.spriteSheet = spriteSheet;
    this.sx = 0;
    this.x = x; 
    this.y = y;
    this.move = 0;
    this.facing = 1;
    this.speed = speed;
    this.move = move;
  }

  draw() {
    push()
    translate(this.x, this.y);
    scale(this.facing, 1);
    rotate(PI/2);

    if (this.move == 0) {
      image(this.spriteSheet, 0, 0, 50, 50, 50, 0, 10, 10)
    }
    else {
      image(this.spriteSheet, 0, 0, 50, 50, 10 * (this.sx + 1), 0, 10, 10)
    }

    if (frameCount % 5 == 0) {  
    this.sx = (this.sx + 1) % 4;
    }
    this.x += this.speed * this.move;
    

    if (this.x < 10) {
      this.move = 1;
      this.facing = 1;
    }

    if (this.x > 760) {
      this.move = -1;
      this.facing = -1;
    }
    
    pop()
  }

  go(direction) {
    this.move = direction;
    this.facing = direction;
    this.sx = 3;
  }

  stop() {
    this.move = 0;
  }

  grab() {
    if (mouseX > this.x - 30 && mouseX < this.x + 30 && 
      mouseY > this.y - 30 && mouseY < this.y + 30) {
      this.stop();
      this.grabbed = true;
      dead++;
    }
  }

}


