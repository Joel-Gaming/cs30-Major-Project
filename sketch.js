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
  constructor(theIsland, waterimg, sandimg, grassimg) {
    this.theIsland = theIsland;
    this.waterIMG = waterimg;
    this.sandIMG = sandimg;
    this.grassIMG = grassimg;
  }

  display(tempDetails) {
    let cellWidth = tempDetails[0];
    let cellHeight = tempDetails[1];
    for (let y=0; y<this.theIsland.length; y++) {
      for (let x=0; x<this.theIsland[y].length; x++) {
        if (this.theIsland[y, x] === 0) {
          // fill("white");
          image(this.waterIMG, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        }
        else if (this.theIsland[y, x] === 1) {
          // fill("black");
          image(this.sandIMG, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        }
        else if (this.theIsland[y, x] === 2) {
          // fill("green");
          image(this.grassIMG, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        }
        // rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
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
let mainIsland;
let tempDetails;
let kanamiCode = ["Up", "Up", "Down", "Down", "Left", "Right", "Left", "Right", "B", "A"];
let enteredCode = [];
let codeButton;
let timesTrue = 0;

// photos
let oceanImg;
let sandImg;
let grassImg;

// Island layouts
let island1grid = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1],
  [1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1],
  [1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1],
  [1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1],
  [1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

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
  mainIsland = new Island(island1grid, oceanImg, sandImg, grassImg);
  codeButton = new Button(0, 10, 50, 20);
}

// draw
function draw() {
  background(backgroundColor);
  if (state === "start") {
    fill("red");
    textSize(50);
    text("Joel's Story", windowWidth/2-150, 100);
    buttonOne.display();
    buttonTwo.display();
  }
  if (state === "play") {
    tempDetails = setCellDetails(mainIsland.theIsland);
    mainIsland.display(tempDetails);
    player.move();
    player.display();
    codeButton.display();
  }
  if (state === "htp") {
    backButton.display();
    practiceButton.display();
    textSize(25);
    //Section Headers
    fill("red");
    text("Player:", 0, 25);
    text("Map:", 0, 150);
    text("Combat:", 0, 275);
    text("Stealth:", 0, 400);
    text("Shop:", 0, 475);
    text("Developer:", 0, 575);
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
    text("Use X to zoom out", 10, 250);
    // Combat Controls
    text("Use Y to do basic attack", 10, 300);
    text("Use B to Block", 10, 325);
    text("Use C to use Basic Skill", 10, 350);
    text("Use Q to use Secendary Skill", 10, 375);
    // Stealth Controls
    text("Use F to sneak", 10, 425);
    text("Use T to toss a coin", 10, 450);
    // Shopping Controls
    text("Use Arrow Keys to Browse Items", 10, 500);
    text("Use G to open Shop", 10, 525);
    text("Use U to Select", 10, 550);
    // Devolper Console
    text("Use / to start entering a command", 10, 600);
    
  }
  if (state === "practice") {
    fill("blue");
    player.move();
    player.display();
  }
  if (state === "win") {
    background("black");
    text("You Win", windowWidth/2, 100);
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
  if (state === "play") {
    if (codeButton.isInside(mouseX, mouseY)) {
      enteredCode.push(prompt());
      enteredCode.push(prompt());
      enteredCode.push(prompt());
      enteredCode.push(prompt());
      enteredCode.push(prompt());
      enteredCode.push(prompt());
      enteredCode.push(prompt());
      enteredCode.push(prompt());
      enteredCode.push(prompt());
      enteredCode.push(prompt());
    }
  }  

  if (enteredCode.length === 8) {
    for (let i = 0; i<enteredCode.length; i++) {
      for (let j = 0; j<kanamiCode.length; i++) {
        if (enteredCode[i] === "Up" && kanamiCode[j] === "Up") {
          timesTrue++;
        }
        else if (enteredCode[i] === "Down" && kanamiCode[j] === "Down") {
          timesTrue++;
        }
        else if (enteredCode[i] === "Left" && kanamiCode[j] === "Left") {
          timesTrue++;
        }
        else if (enteredCode[i] === "Right" && kanamiCode[j] === "Right") {
          timesTrue++;
        }
        else if (enteredCode[i] === "B" && kanamiCode[j] === "B") {
          timesTrue++;
        }
        else if (enteredCode[i] === "A" && kanamiCode[j] === "A") {
          timesTrue++;
        }
      }
    }

    if (timesTrue === 10) {
      state === "win";
    }
  }
}


function setCellDetails(theIsland) {
  let results = []; 
  for (let y = 0; y<theIsland.length; y++) {
    let cellWidth = theIsland[y].length;
    let cellHeight = theIsland.length;
    results = [[cellWidth], [cellHeight]];
  }
  return results;
}
