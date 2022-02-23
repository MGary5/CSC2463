const sounds = new Tone.Players({
  synthBlip: "media/synthBlip.wav",
  banjo: "media/banjo.wav",
  dingDong: "media/dingDong.wav",
  beat: "media/beat.wav"
})


let button1, button2, button3, button4, slider;

function setup() {
    createCanvas(400, 400);
    const delay = new Tone.FeedbackDelay("8n", 0.5);
    sounds.toDestination();
    sounds.connect(delay)
    const effectChain = new Tone.Players(sounds);
    effectChain.volume.value = -20;
    effectChain.chain(delay, Tone.Master);

    button1 = createButton("Synth", 'synthBlip');
    button1.position(0,200);
    button1.mousePressed(()=>buttonSound('synthBlip'));

    button2 = createButton("Drum", 'beat');
    button2.position(0,175);
    button2.mousePressed(()=>buttonSound('beat'));
    
    button3 = createButton("Banjo", 'banjo');
    button3.position(0,150);
    button3.mousePressed(()=>buttonSound('banjo'));

    button4 = createButton("Ding Dong", 'dingDong');
    button4.position(0,125);
    button4.mousePressed(()=>buttonSound('dingDong'));

    slider = createSlider(0., 1., 0.5, 0.05);
    slider.mouseReleased( ()=>{
      delay.delayTime.value = slider.value();
    })
    slider.position(278, 175);
    slider.style("transform", "rotate(-90deg)")
  }
  
  function draw() {
    background(220);
    textSize(15);
    text("Delay Slider", 300,100);
    text("More Delay -", 255, 130);
    text("Less Delay -", 255, 250);
    text("Press these for sounds!", 0, 100);
    delay.wet.value = slider.value() / 100;
  }
  
  function buttonSound(whichSound) {
    if (whichSound === 'synthBlip') {
      sounds.player('synthBlip').start();
    } else if (whichSound === 'banjo') {
      sounds.player('banjo').start();
    } else if (whichSound === 'dingDong') {
      sounds.player('dingDong').start();
    } else if (whichSound === 'beat') {
      sounds.player('beat').start();
    } 
  }
