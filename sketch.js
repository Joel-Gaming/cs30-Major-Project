// Major Project
// November 23rd 2022
// Joel Penner


import {Button} from './startScreen.js';
import {buttonOne} from './startScreen.js';
import {buttonTwo} from './startScreen.js';

let state = "start";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  buttonOne.display()
  buttonTwo.display()
}
