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

// global varables
let state = "start";
let buttonOne;
let buttonTwo;
let backgroundColor = "lightgray";
let backButton;
let practiceButton;
let player;

// photos
let oceanImg;
let sandImg;
let grassImg;

// preload
function preload() {
  oceanImg = "images/ocean.png";
  sandImg = "images/sand.png";
  grassImg = "images/grass.png";
}

// set up
function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonOne = new Button(windowWidth/4, 300, 651, 75);
  buttonTwo = new Button(windowWidth/4, 600, 651, 75);
  backButton = new Button(0, windowHeight-50, 150, 50);
  practiceButton = new Button(windowWidth-150, windowHeight-50, 150, 50);
  player = new Player(windowWidth/2, windowHeight/2, 3, 3, 25);
}

// draw
function draw() {
  background(backgroundColor);
  if (state === "start") {
    text("Joel's Story", windowWidth/2, 100);
    buttonOne.display();
    buttonTwo.display();
  }
  if (state === "htp") {
    backButton.display();
    practiceButton.display();
    textSize(25);
    //Section Headers
    fill("red")
    text("Player:", 0, 25);
    text("Map:", 0, 150);
    text("Combat:", 0, 275);
    fill("black");
    // Player Contorls
    text("Use WASD to move", 10, 50);
    text("Use I to interact", 10, 75);
    text("Use P to use Pasive Skill", 10, 100);
    text("Use R to open Player Upgrades", 10, 125);
    // Map Controls
    text("Use M to open map", 10, 175);
    text("Use T to teleport", 10, 200);
    text("Use Z to zoom in", 10, 225);
    text("Use x to zoom out", 10, 250);
    // Combat Controls
    text("Use Y to do basic attack", 10, 300);
    text("Use B to do Block", 10, 325);
    text("Use C to use Basic Skill", 10, 350);
    text("Use Q to use Secendary Skill", 10, 375);
  }
  if (state === "play") {
    player.move();
    player.display();
  }
  if (state === "practice") {
    fill("blue");
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
