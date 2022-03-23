let synth = new Tone.MonoSynth().toDestination();
let seqSynth = new Tone.MonoSynth().toDestination();
var seq = new Tone.Sequence(callback, 
  ["C3", "D3", "Eb3", "D3", "G3", "G3", "B3", "C4"], "8n");

const sound = new Tone.Players({
  clear: "media/clear.wav"
})

let button; 

function callback(time, pitch){
  seqSynth.triggerAttackRelease(pitch, "8n", time);
  seqSynth.volume.value = -30;
}

Tone.Transport.start()
Tone.Transport.bpm.value = 100;
Tone.Transport.loop = true; 
Tone.Transport.loopStart = 0; 
Tone.Transport.loopEnd = '3.199:0:0';
function bpm_increase() {
  if (mouseIsPressed){
    if(Tone.Transport.bpm.value < 160){
      Tone.Transport.bpm.value += .06;
      console.log(Tone.Transport.bpm.value);
    }
  }
}

function setup() {
  createCanvas(400, 400);
  Tone.start();
  background(400);
  strokeWeight(5)
  sound.toDestination();
  seq.start();

}

function draw() {
  bpm_increase()
  synth.volume.value = -15;
  if (mouseIsPressed) {
    if (mouseX <= 20) {
    if (mouseY <= 15) {
      brushColor = redColor;
      synth.triggerAttackRelease("C4", "4n");
      } else if (mouseY < 37) {
      brushColor = ojColor;
      synth.triggerAttackRelease("Eb4", "4n")
      } else if (mouseY < 58) {
      brushColor = yellowColor;
      synth.triggerAttackRelease("G4", "4n")
      } else if (mouseY < 79) {
      brushColor = greenColor;
      synth.triggerAttackRelease("B4", "4n")
      } else if (mouseY < 101) {
      brushColor = lightbColor;
      synth.triggerAttackRelease("D4", "4n")
      } else if (mouseY < 121) {
      brushColor = darkbColor;
      synth.triggerAttackRelease("F5", "4n")
      } else if (mouseY < 142) {
      brushColor = violetColor;
      synth.triggerAttackRelease("C5", "4n")
      } else if (mouseY < 163) {
      brushColor = brownColor;
      synth.triggerAttackRelease("Eb5", "4n")
      } else if (mouseY < 184) {
      brushColor = whiteColor;
      synth.triggerAttackRelease("D5", "4n")
      } else if (mouseY < 205) {
      brushColor = blackColor;
      synth.triggerAttackRelease("Ab5", "4n")
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

  button = createButton("Clear Canvas");
  button.position(0,400);
  button.mousePressed(() => (clear(), sound.player('clear').start(), Tone.Transport.bpm.value = 100));
}
