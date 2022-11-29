// Major Project
// November 23rd 2022
// Joel Penner

// change what part of the program is  showing
let state = "start";
// sections
let startScreen, world, player, loseScreen, winScreen;

function preload() {
  // load program code
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}
  
function draw() {
  background(220);
  if (state === "start") {
    startScreen.display();
  }
  if (state === "play") {
    world.display();
  }
}