let character;
let gCharacter1;

function preload() {

  spriteSheet = loadImage("frames.png");
  girlSpriteSheet = loadImage("girlFrame.png");

}

function setup() {
  createCanvas(1200, 1200);
  character = new Character(spriteSheet, 0, 300);
  characterTwo = new Character(spriteSheet, 400, 100); 
  gCharacter1 = new Character2(girlSpriteSheet, 200, 400)
  gCharacter2 = new Character2(girlSpriteSheet, 400, 500)
}

function draw() {
  background(255, 255, 255);
  character.draw();
  characterTwo.draw();
  gCharacter1.draw();
  gCharacter2.draw();
}

function keyPressed() {
  if ( keyCode == RIGHT_ARROW ) {
    character.go(1);
    characterTwo.go(1);
    gCharacter1.go(1);
    gCharacter2.go(1);
  } else if ( keyCode == LEFT_ARROW ) {
    character.go(-1);
    characterTwo.go(-1);
    gCharacter1.go(-1);
    gCharacter2.go(-1);
  }
}

function keyReleased() {
  character.stop();
  characterTwo.stop();
  gCharacter1.stop();
  gCharacter2.stop();
}






class Character {
  constructor(spriteSheet, x, y) {
    this.spriteSheet = spriteSheet;
    this.sx = 0;
    this.x = x; 
    this.y = y;
    this.move = 0;
    this.facing = 1;
  }

  draw() {
    push()
    translate(this.x, this.y);
    scale(this.facing, 1);

    if (this.move == 0) {
      image(this.spriteSheet, 0, 0, 200, 200, 0, 0, 80, 80)
    }
    else {
      image(this.spriteSheet, 0, 0, 200, 200, 80 * (this.sx + 1), 0, 80, 80)
    }

    if (frameCount % 5 == 0) {  
    this.sx = (this.sx + 1) % 8;
    }
    this.x += 2 * this.move;
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

}

class Character2 {
  constructor(girlSpriteSheet, x, y) {
    this.girlSpriteSheet = girlSpriteSheet;
    this.sx = 0;
    this.x = x; 
    this.y = y;
    this.move = 0;
    this.facing = 1;
  }

  draw() {
    push()
    translate(this.x, this.y);
    scale(this.facing, 1);
    if (this.move == 0) {
      image(this.girlSpriteSheet, 0, 0, 200, 200, 0, 0, 80, 80)
    }
    else {
      image(this.girlSpriteSheet, 0, 0, 200, 200, 80 * (this.sx + 1), 0, 80, 80)
    }

    if (frameCount % 5 == 0) {  
    this.sx = (this.sx + 1) % 8;
    }
    this.x += 2 * this.move;
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

}