let angle = 10;
let doge;
let graphics;
let camera;
let mickey;

function preload(){
  doge = loadImage("assets/doge.jpg");
  mickey = loadModel("assets/mickey.obj");
}

function setup(){
  createCanvas(500,500,WEBGL);
  graphics = createGraphics(250,370);
  camera = createCapture(VIDEO);
  camera.hide();
}

function draw(){
  background(0);
  ambientLight(100);
  directionalLight(255,255,255,0,0,-1);

  rotateX(PI);
  rotateY(angle);

  noStroke();
  texture(camera);
  model(mickey);
  angle += 0.01;
}