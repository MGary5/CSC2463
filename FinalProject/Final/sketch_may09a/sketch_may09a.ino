#include <NewPing.h>
const int buttonPin1 = 2;
const int buttonPin2 = 3;
const int buttonPin3 = 4;

int buttonState1 = 0;
int buttonState2 = 0;
int buttonState3 = 0;

NewPing sensor (10, 11, 50);
int range = 0;

void setup() {
  Serial.begin(9600);
  delay(100);
  pinMode(buttonPin1, INPUT);
  pinMode(buttonPin2, INPUT);
  pinMode(buttonPin3, INPUT);
}

void loop() {
  buttonState1 = digitalRead(buttonPin1);
  buttonState2 = digitalRead(buttonPin2);
  buttonState3 = digitalRead(buttonPin3);
  
  range = sensor.ping_cm();
  Serial.print(range);
  Serial.print(",");
  
  if (buttonState1 == HIGH) {
    Serial.print("1");
    delay(100);
  } else if (buttonState2 == HIGH) {
    Serial.print("2");
    delay(100);
  } else if (buttonState3 == HIGH) {
    Serial.print("3");
    delay(100);
  } else {
    Serial.print("0");
    delay(100);
  }

  Serial.println();
}
