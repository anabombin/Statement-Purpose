let Rx;
let Bx;
let Yx;


let bgImg;
let cityImg;
let floorImg;
let detailsImg;

let bgW;
let bgH;
let cityW;
let cityH;
let detailsW;
let detailsH;


function preload() {
  bgImg = loadImage("assets/Sky_Background.png");
  cityImg = loadImage("assets/city_Background.png");
  floorImg = loadImage("assets/floor_Background.png");
  detailsImg = loadImage("assets/Principles_background.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // rectMode(CENTER);
  
  Rx = 0;
  Bx = 0;
  Yx = 0;


  // Resize images here
  cityW = cityImg.width / 12;
  cityH = cityImg.height / 12;

  let floorW = floorImg.width / 4;
  let floorH = floorImg.height / 4;
  smallerFloor = floorImg.get();
  smallerFloor.resize(floorW, floorH);

  bgW = bgImg.width / 8;
  bgH = bgImg.height / 8;

  detailsW = detailsImg.width / 8;
  detailsH = detailsImg.height / 8;
}

function draw() {
  //Background Image of Sky
  image(bgImg, Rx, 0, bgW, bgH);
  
  // City Image in the background
  image(cityImg, Bx, 250, cityW, cityH);

  // Floor does not move
  image(smallerFloor, 0, 550);
  
  // Details Image with Principles
  image(detailsImg, Yx, 0, detailsW, detailsH);
  
  
  // Moving forward & backward with arrow keys
  if (keyIsPressed === true && key === ".") {
    Rx -= 1;
    Bx -= 5;
    Yx -= 10;
  } else if (keyIsPressed === true && key === ","){
    Rx += 1;
    Bx += 5;
    Yx += 10;
  }
  
  
}