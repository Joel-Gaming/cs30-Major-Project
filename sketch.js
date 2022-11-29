// Major Project
// November 23rd 2022
// Joel Penner


import {Button} from './startScreen.js';
import {buttonOne} from './startScreen.js';
import {buttonTwo} from './startScreen.js';

let state = "start";

function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonOne = new Button(windowWidth/4, 300, 651, 75);
  buttonTwo = new Button(windowWidth/4, 600, 651, 75);
}

function draw() {
  background(220);
  buttonOne.display()
  buttonTwo.display()
}
