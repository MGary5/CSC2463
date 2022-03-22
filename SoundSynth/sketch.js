let bgImg;

var instrument = new Tone.Synth();
var synthJSON = {
    "oscillator": {
        "partials": [
            1,
            0,
            2,
            0,
            3
        ]
    },
    "envelope": {
        "attack": 0.001,
        "decay": 1.2,
        "sustain": 0,
        "release": 1.2
    }
};

instrument.set(synthJSON);

var effect1;

// create effects
var effect1 = new Tone.AutoWah();
effect1JSON = {
	"baseFrequency": 140,
	"octaves": 4,
	"sensitivity": 0,
	"Q": 7,
	"gain": 5,
	"rolloff": -48,
	"follower": {
		"attack": 0.5,
		"release": 0.1
	},
    "wet": 0.5
};
effect1.set(effect1JSON);


// make connections
instrument.connect(effect1);
effect1.connect(Tone.Master);


function preload() {
  bgImg = loadImage("cow.png");
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  text("Hold for a mootacular surprise!", 300, 100)
  if(mouseIsPressed) {
    bgImg.resize(400,400)
    image(bgImg, 200, 200);
  }
}

function mousePressed() {
  Tone.start();
  instrument.triggerAttackRelease("C4", "2n");
}

