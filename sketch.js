// Major Project
// November 23rd 2022
// Joel Penner

class Button {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = "red";
    this.hoverColor = "blue";
    this.tempState;
  }

  display() {
    if (this.isInside(mouseX, mouseY)) {
      fill(this.hoverColor);
    }
    else {
      fill(this.color);
    }
    rect(this.x, this.y, this.width, this.height);
  }

  isInside(x, y) {
    let leftSide = this.x;
    let rightSide = this.x + this.width;
    let topSide = this.y;
    let bottomSide = this.y + this.height;

    return x > leftSide && x < rightSide && y > topSide && y < bottomSide;
  }

  isClicked(theState) {
    this.tempState = theState;
    if (buttonOne.isInside()) {
      this.tempState = "play";
    }  
    if (buttonTwo.isInside()) {
      this.tempState = "htp";
    }
    return this.tempState;
  }
}

let buttonOne;
let buttonTwo;
let backgroundColor = "lightgray";
let state = "start";

function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonOne = new Button(windowWidth/4, 300, 651, 75);
  buttonTwo = new Button(windowWidth/4, 600, 651, 75);
}

function draw() {
  background(backgroundColor);
  if (state === "start") {
    buttonOne.display();
    buttonTwo.display();
  }
  if (state === "play") {
    window;
  }
}

function mousePressed() {
  if (state === "start") {
    if (buttonOne.isInside(mouseX, mouseY)) {
      state = buttonOne.isClicked(state);
    }
    if (buttonTwo.isInside(mouseX, mouseY)) {
      state = buttonTwo.isClicked(state);
    }
  }
}