// Faktoren mit denen die Höhe und Breite des aktuellen Screens berechnet wird
let wfactor;
let hfactor;

let imageL;
let imageI;
let imageF;
let imageE;
let imageT;
let imageM;
let imageS;

function preload() {
  imageL = loadImage('images/l.png');
  imageI = loadImage('images/i.png');
  imageF = loadImage('images/f.png');
  imageE = loadImage('images/e.png');
  imageT = loadImage('images/t.png');
  imageM = loadImage('images/m.png');
  imageS = loadImage('images/s.png');
}

function setup() {
  createCanvas(getWindowWidth(), getWindowHeight()); // important! Don't modify this line. 
  setupOSC(false); // Don't remove this line. 1 argument to turn the depthstream on and off

  wfactor = 2160 / getWindowWidth();
  hfactor = 1920 / getWindowHeight();

}

function windowResized() {
  resizeCanvas(getWindowWidth(), getWindowHeight());
}

function draw() {
  //blendMode(BLEND)
  background(0);
  stroke(255);
  strokeWeight(4);

  for (let lineX = width / 5; lineX <= windowWidth - width / 5; lineX += width / 5) {
    line(lineX, 0, lineX, height);
  }

  for (let lineY = height / 2; lineY <= windowHeight - height / 2; lineY += height / 2) {
    line(0, lineY, width, lineY);
  }

  const xPos = position.x;
  const viewportWidth = getWindowWidth() / 1.25;

  const mappedXPosL = map(xPos, 432 / wfactor, viewportWidth, 0, 432 / wfactor);
  const mappedYPosL = map(xPos, 432 / wfactor, viewportWidth, 0, 960 / hfactor);

  const mappedXPosF = map(xPos, 432 / wfactor, viewportWidth, 864 / wfactor, 0);
  const mappedYPosF = map(xPos, 432 / wfactor, viewportWidth, 0, 960 / hfactor);

  const mappedXPosT = map(xPos, 432 / wfactor, viewportWidth, 0, 0);
  const mappedYPosT = map(xPos, 432 / wfactor, viewportWidth, 960 / hfactor, 0);

  const mappedXPosM = map(xPos, 432 / wfactor, viewportWidth, 864 / wfactor, 864 / wfactor);
  const mappedYPosM = map(xPos, 432 / wfactor, viewportWidth, 960 / hfactor, 0);

  const mappedXPosI1 = map(xPos, 432 / wfactor, viewportWidth, 432 / wfactor, 864 / wfactor);
  const mappedYPosI1 = map(xPos, 432 / wfactor, viewportWidth, 0, 960 / hfactor);
  const mappedYPosI2 = map(xPos, 432 / wfactor, viewportWidth, 960 / hfactor, 0);

  const mappedYPosE1 = map(xPos, 432 / wfactor, viewportWidth, 0, 960 / hfactor);
  const mappedYPosE2 = map(xPos, 432 / wfactor, viewportWidth, 960 / hfactor, 0);

  push();
  translate(mappedXPosL, mappedYPosL);
  image(imageL, 0, 0, imageL.width / wfactor, imageL.height / hfactor);
  pop();

  push();
  translate(mappedXPosI1, mappedYPosI1);
  image(imageI, 0, 0, imageI.width / wfactor, imageI.height / hfactor);
  pop();

  push();
  translate(mappedXPosF, mappedYPosF);
  image(imageF, 0, 0, imageF.width / wfactor, imageF.height / hfactor);
  pop();

  push();
  translate(1296 / wfactor, mappedYPosE1);
  image(imageE, 0, 0, imageE.width / wfactor, imageE.height / hfactor);
  pop()

  push();
  translate(mappedXPosT, mappedYPosT)
  image(imageT, 0, 0, imageT.width / wfactor, imageT.height / hfactor);
  pop();

  push();
  translate(432 / wfactor, mappedYPosI2)
  image(imageI, 0, 0, imageI.width / wfactor, imageI.height / hfactor);
  pop();

  push();
  translate(mappedXPosM, mappedYPosM);
  image(imageM, 0, 0, imageM.width / wfactor, imageM.height / hfactor);
  pop();

  push();
  translate(1296 / wfactor, mappedYPosE2);
  image(imageE, 0, 0, imageE.width / wfactor, imageE.height / hfactor);
  pop();

  if (xPos > width / 2) {
    mappedYPosS = map(xPos, 432 / wfactor, getWindowWidth() / 2, 960 / hfactor, 500 / hfactor);
  } else {
    mappedYPosS = map(xPos, getWindowWidth() / 2, viewportWidth, 500 / hfactor, 960 / hfactor);
  }

  push();
  translate(1728 / wfactor, mappedYPosS);
  image(imageS, 0, 960 / hfactor, imageS.width / wfactor, imageS.height / hfactor);
  pop();

  // Scale the mouseX value from 0 to 720 to a range between 40 and 300
  /* let dia = map(mouseX, 0, width, 200, 600);
  blendMode(DIFFERENCE);
  fill(255);
  noStroke();
  ellipse(width / 2, height / 2, dia, dia); */

  posterTasks(); // do not remove this last line!  

}