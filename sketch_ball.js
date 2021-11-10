let x = -50;
let direction = 10;

function setup() {
  background(100);  
  createCanvas(window.innerWidth,window.innerHeight);
}

function draw() {
  background(100);  
  
  ellipse(x, height/2, 20, 20);

  if(direction == 10 && x >= width-20){
    direction = -10;
  }
  
  if(direction == -10 && x <= 0){
    direction = 10;
  }
  
  x = x + direction;
}