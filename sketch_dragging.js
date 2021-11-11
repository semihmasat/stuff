let stored_x = [];
let stored_y = [];

let isDragging = false;
let draggin_index = 0;

function setup() {
  createCanvas(600, 400);
  
  background(200);
}

function touchMoved() {
  background(200);

  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "pink";

  ellipse(mouseX, mouseY, 50, 50);

  return false;
}

function mousePressed(){
  for(let i = stored_x.length; i > 0; i--){
    let elx = stored_x[i-1];
    let ely = stored_y[i-1];

    if(dist(elx,ely,mouseX,mouseY) < 25){
      isDragging = true;
      draggin_index = i-1;

      stored_x[i-1] = -100;
      break;
    }
  }
}

function mouseReleased() {
  background(200);

  if(isDragging){
    stored_x[draggin_index] = mouseX;
    stored_y[draggin_index] = mouseY;
  }else{
    stored_x.push(mouseX);
    stored_y.push(mouseY);
  }
  
  isDragging = false;
}

function draw(){
  for( let i = 0; i < stored_x.length; i++){
    ellipse(stored_x[i], stored_y[i], 50, 50);
  }

  if(mouseIsPressed){
    ellipse(mouseX, mouseY, 50, 50);
  }

  text(isDragging,10,10,30,30);
}