let angle = 0;
let doge;
let font;
let lookingdirx = 0;
let lookingdiry = 0;
let cam;

function preload(){
  doge = loadImage("assets/doge.jpg");
  font = loadFont("assets/LEMONMILK-Medium.otf");
}

function setup(){
  createCanvas(window.innerWidth,window.innerHeight,WEBGL);
  textFont(font);
  textSize(40);
  textAlign(CENTER, CENTER);
  cam = createCamera();

  requestPointerLock();

  debugMode();
}

function mouseClick(){
  requestPointerLock();
}

function draw(){
  //ambientLight(255);
  let dx = mouseX - width / 2;
  let dy = mouseY - height / 2;
  let v = createVector(dx,dy,0);

  ambientLight(255);
  background(100);

  push();
  translate(0,0,0);
  texture(doge);
  box(100,100);

  pop();
  text('p5.js - camera test', -width/2+225, -height/2+20);

  lookingdirx += movedX;
  lookingdiry += movedY;

  cam.pan(-movedX * 0.001);
  cam.tilt(movedY * 0.001);

  cam.move(0,-0.01,-0.1);
}
