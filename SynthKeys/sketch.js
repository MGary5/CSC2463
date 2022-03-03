let button;
let slider, dSlider;
let synth = new Tone.PolySynth();
const delay = new Tone.FeedbackDelay("8n", 0.5);
synth.connect(delay);
const distort = new Tone.Distortion().toDestination();
delay.connect(distort)


const notes = {
  q: "C3",
  2: "C#3",
  w: "D3",
  3: "D#3",
  e: "E3",
  r: "F3",
  5: "F#3",
  t: "G3",
  6: "G#3",
  y: "A3",
  7: "A#3",
  u: "B3",
  i: "C4",
};


function setup() {
  createCanvas(500, 500);
  background("blue");

  dSlider = createSlider(0., 1., 0.5, 0.05);
  dSlider.position(425, 150);
  dSlider.style("transform", "rotate(-90deg)")

  slider = createSlider(0., 1., 0.5, 0.05);
  slider.position(425, 300);
  slider.style("transform", "rotate(-90deg)")
}

function draw() {
  clear();
  background("grey");

  textSize(30);
  text("Synthesizer!", 150, 100);

  textSize(12);
  text("Created by Myles Gary", 150, 120)
  text("Notes chromatically increase from C3 to C4", 150, 180)
  text("Distort the Synth!", 380, 150);
  delay.delayTime.value = slider.value();
  text("Delay the Synth!", 380, 300);
  distort.wet.value = dSlider.value();
}

function keyPressed() {
  let toPlay = notes[key];
  console.log(toPlay);
  synth.triggerAttackRelease(toPlay, 0.3)
}