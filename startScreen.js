// Major Project

class Button {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = "red";
    this.hoverColor = "blue";
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
}

let buttonOne;
let buttonTwo;
let backgroundColor = "lightgray";
let state;

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
}

function mousePressed() {
  let tempState;
  if (buttonOne.isInside(mouseX, mouseY)) {
    tempState = "play";
  }
  if (buttonTwo.isInside(mouseX, mouseY)) {
    tempState = "htp";
  }
  return tempState;
}
