let trees;
let model_position = {x:0,y:0}

function preload() {
  trees = loadModel('assets/trees9.obj',true);
}

function setup(){
  createCanvas(400,400,WEBGL);
}

function draw(){
  if(keyIsDown(UP_ARROW)){
    model_position.y -=1;
  };
  if(keyIsDown(DOWN_ARROW)){
    model_position.y +=1;
  };
  if(keyIsDown(LEFT_ARROW)){
    model_position.x -=1;
  };
  if(keyIsDown(RIGHT_ARROW)){
    model_position.x +=1;
  };

  background(200);
  translate(model_position.x,model_position.y);
  rotateX(3);
  rotateY(frameCount * 0.01);
  normalMaterial();
  model(trees);
}