let angle = 0;
let cx = -1;
let cy = -1;
let cxdir = true;
let cydir = true;

function setup(){
  createCanvas(400,300,WEBGL);
}

function draw(){
  //pointLight(0,0,255,-200,0,200);
  //pointLight(255,0,0,200,0,200);

  //let dx = width/2 - mouseX;
  //let dy = height/2 - mouseY;
  //let v = createVector(dx,dy,-1);

  let v = createVector(cx,cy,-1);
  v.normalize();
  
  directionalLight(255,200,0,v);

  background(255);

  rotateX(angle * 0.1);
  rotateY(angle * 0.1);
  rotateZ(angle * 0.1);

  noStroke();
  ambientMaterial(255);
  torus(100,20);

  angle += 0.03;

  if(cxdir && cx > 1){
    cxdir = false;
  }
  if(!cxdir && cx < -1){
    cxdir = true;
  }
  if(cydir && cy > 1){
    cydir = false;
  }
  if(!cydir && cy < -1){
    cydir = true;
  }

  if(cxdir){
    cx += 0.01;
  }else{
    cx -= 0.007;
  }

  if(cydir){
    cy += 0.06;
  }else{
    cy -= 0.03;
  }
}
