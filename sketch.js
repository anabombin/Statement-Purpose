let Rx;
let Bx;
let Yx;


let bgImg;
let cityImg;
let floorImg;
let detailsImg;
let details2Img;

let bgW;
let bgH;
let cityW;
let cityH;
let detailsW;
let detailsH;
let details2W;
let details2H;


function preload() {
  detailsImg = loadImage("assets/Principles_background_pt1.png");
  details2Img = loadImage("assets/Principles_background_pt2.png");
  bgImg = loadImage("assets/Sky_Background.png");
  cityImg = loadImage("assets/city_Background.png");
  floorImg = loadImage("assets/floor_Background.png");
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

  details2W = details2Img.width / 8;
  details2H = details2Img.height / 8;
}

function draw() {
  //Background Image of Sky
  image(bgImg, Rx-30, 0-30, bgW, bgH);
  image(cityImg, Rx+30, 250, cityW-20, cityH);
  
  // City Image in the background
  image(cityImg, Bx, 250, cityW, cityH);

  // Floor does not move
  image(smallerFloor, -45, 510);
  
  // Details Image with Principles
  image(detailsImg, Yx, 0, detailsW, detailsH);
  image(details2Img, Yx+2670+windowWidth, 0, details2W, details2H);
  
  
  // Moving forward & backward with arrow keys
  if (keyIsPressed === true && key === "." ) {
    Rx -= 0.5;
    Bx -= 2;
    Yx -= 5;
  } else if (keyIsPressed === true && key === "," && Bx<=0){
    Rx += 0.5;
    Bx += 2;
    Yx += 5;
  }
  
  // Stops working at -1400
  console.log(Yx);
}