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

  //modify graphics
  graphics.background("pink");
  graphics.textSize(64);
  graphics.textAlign(CENTER);
  graphics.text("lööö",100,100);
  graphics.image(camera, 0, 0, width/2, width * camera.height / camera.width);

  //rotateX(angle);
  rotateX(PI);
  rotateY(angle);
  //rotateZ(angle * 0.7);

  texture(graphics);
  noStroke();

  model(mickey);

  angle += 0.01;
}