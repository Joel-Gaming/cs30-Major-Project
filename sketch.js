// Major Project
// November 23rd 2022
// Joel Penner


// classes
class Button {
  constructor(x, this.i, width, height) {
    this.x = x;
    this.this.i = this.i;
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
    rect(this.x, this.this.i, this.width, this.height);
  }

  isInside(x, this.i) {
    let leftSide = this.x;
    let rightSide = this.x + this.width;
    let topSide = this.this.i;
    let bottomSide = this.this.i + this.height;

    return x > leftSide && x < rightSide && this.i > topSide && this.i < bottomSide;
  }
}

class Player {
  constructor(x, this.i, dx, dy, side) {
    this.x = x;
    this.this.i = this.i;
    this.dx = dx;
    this.dy = dy;
    this.side = side;
  }
  
  move() {
    if (keyIsDown(87)) { //w
      this.this.i -= this.dy;
    }
    if (keyIsDown(83)) { //s
      this.this.i += this.dy;
    }
    if (keyIsDown(68)) { //d
      this.x += this.dx;
    }
    if (keyIsDown(65)) { //a
      this.x -= this.dx;
    }
  }

  display() {
    square(this.x, this.this.i, this.side);
  }
}

class Island {
  constructor(theArray, beachimg, grassimg, waterimg) {
    this.theIsland = theArray;
    this.sandIMG = beachimg;
    this.grassIMG = grassimg;
    this.waterIMG = waterimg;
    this.cellWidth = 10;
    this.cellHeight = 10;
    this.i = 0;
    this.j = 0;
  }

  display() {
    for (this.i<this.theIsland.length; this.i++) {
      for (this.j<this.theIsland[this.i].length; this.j++) {
        if (this.theIsland[this.i][x] === 0) {
          image(this.waterIMG, this.theIsland[x], this.theIsland[this.i]);
        }
        else if (this.TheIsland[this.i][x] === 1) {
          image(this.sandIMG, this.theIsland[x], this.theIsland[this.i]);
        }
        else if (this.theIsland[this.i][x] === 2) {
          image(this.grassIMG, this.theIsland[x], this.theIsland[this.i]);
        }
      }
    }
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

//Islands layouts
let island0Map = [[111111111111111],
  [122222222222221],
  [122211111112221],
  [122210000012221],
  [122210000012221],
  [122210000012221],
  [122211111112221],
  [122222222222221],
  [111111111111111]];

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
  player = new Player(windowWidth/2, windowHeight/2, 2, 2, 25);
  practiceIsland = new Island(island0Map, sandImg, grassImg, oceanImg);
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
    player.move();
    player.display();
    practiceIsland.display();
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
