// Major Project
// November 23rd 2022
// Joel Penner


// classes
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

class Player {
  constructor(x, y, dx, dy, side) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.side = side;
  }
  
  move() {
    if (keyIsDown(87)) { //w
      this.y -= this.dy;
    }
    if (keyIsDown(83)) { //s
      this.y += this.dy;
    }
    if (keyIsDown(68)) { //d
      this.x += this.dx;
    }
    if (keyIsDown(65)) { //a
      this.x -= this.dx;
    }
  }

  display() {
    square(this.x, this.y, this.side);
  }
}

class Island {
  constructor(x, y, beachimg, grassimg, theGrid) {
    this.x = x;
    this.y = y;
    this.sandIMG = beachimg;
    this.grassIMG = grassimg;
  }

  display() {

  }
}

// global varables
let state = "start";
let buttonOne;
let buttonTwo;
let backgroundColor = "lightgray";
let backButton;
let practiceButton;
let player;
let practiceIsland;
let island1Grid = [[11111111111111111111111111]
                   [12222222222222222222222221]
                   [12222222222222222222222221]
                   [12222222111111111122222221]];
                   []];

// set up
function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonOne = new Button(windowWidth/4, 300, 651, 75);
  buttonTwo = new Button(windowWidth/4, 600, 651, 75);
  backButton = new Button(0, windowHeight-50, 150, 50);
  practiceButton = new Button(windowWidth-150, windowHeight-50, 150, 50);
  player = new Player(windowWidth/2, windowHeight/2, 2, 2, 25);
  practiceIsland = new Island(windowwidth/4);
}

// draw
function draw() {
  background(backgroundColor);
  if (state === "start") {
    buttonOne.display();
    buttonTwo.display();
  }
  if (state === "htp") {
    backButton.display();
    practiceButton.display();
  }
  if (state === "play") {
    player.move();
    player.display();
  }
  if (state === "practice") {
    practiceIsland.display();
    player.move();
    player.display();
  }
}

function mousePressed() {
  if (state === "start") {
    if (buttonOne.isInside(mouseX, mouseY)) {
      state = "play";
    }
    if (buttonTwo.isInside(mouseX, mouseY)) {
      state = "htp";
    }
  }
  if (state ===  "htp") {
    if (backButton.isInside(mouseX, mouseY)) {
      state = "start";
    }
    if (practiceButton.isInside(mouseX, mouseY)) {
      state = "practice";
    }
  }  
}
