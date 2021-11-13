let angle = 0;
let doge;
let camera;

function setup(){
  createCanvas(500,500,WEBGL);
  camera = createCapture(VIDEO);
  camera.hide();
}

function preload(){
  doge = loadImage("assets/doge.jpg");
}

function draw(){
  //ambientLight(255);
  let dx = mouseX - width / 2;
  let dy = mouseY - height / 2;
  let v = createVector(dx,dy,0);

  directionalLight(255,255,255,v);

  background(255);

  push();
  rotateX(angle * 0.1);
  rotateY(angle * 0.1);
  rotateZ(angle * 0.1);

  noStroke();
  texture(camera);
  torus(100,40);

  pop();
  ambientMaterial(255);
  noStroke();
  translate(0,200);
  rotateX(-90);
  plane(500,500);

  angle += 0.03;
}
