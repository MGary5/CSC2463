let latestData = "waiting for data";
let synth = new Tone.Synth().toDestination();

let arduinoButton, sensorData, range;

// const delay = new Tone.FeedbackDelay(range,0.5);
// synth.connect(delay);

function setup() {
    createCanvas(800, 800);
    background(100);
    Tone.start();

    serial = new p5.SerialPort();
    serial.list();
    serial.open('COM7');
    serial.on('connected', serverConnected);
    serial.on('list', gotList);
    serial.on('data', gotData);
    serial.on('error', gotError);
    serial.on('open', gotOpen);
    serial.on('close', gotClose);

  }

function draw() {

    if (sensorData <= 10){
        range = 0;
    } else if (sensorData >= 10 && sensorData <= 20){
        range = .5;
    } else if (sensorData >= 20){
        range = 1;
    }

    if (arduinoButton == 1) {
        square(260, 200, 300)
        fill(color(255, 17, 0));
        synth.triggerAttackRelease("C4", "4n");
    } else if (arduinoButton == 2) {
        square(260, 200, 300)
        fill(color(100, 255, 0));
        synth.triggerAttackRelease("D4", "4n");
    } else if (arduinoButton == 3){ 
        square(260, 200, 300)
        fill(color(100, 100, 255));
        synth.triggerAttackRelease("Eb4", "4n");
    } else if (arduinoButton == 0){
        clear();
    }
}

function serverConnected() {
    print("Connected to Server");
  }
  
  function gotList(thelist) {
    print("List of Serial Ports:");
  
    for (let i = 0; i < thelist.length; i++) {
      print(i + " " + thelist[i]);
    }
  }
  
  function gotOpen() {
    print("Serial Port is Open");
  }
  
  function gotClose(){
    print("Serial Port is Closed");
    latestData = "Serial Port is Closed";
  }
  
  function gotError(theerror) {
    print(theerror);
  }

function gotData() {
    let currentString = serial.readLine();
      trim(currentString);
    if (!currentString) return;
    latestData = currentString;
    let splitString = split(latestData, ',');
    sensorData = int(splitString[0]);
    arduinoButton = int(splitString[1]);
    console.log(latestData);
    
  }