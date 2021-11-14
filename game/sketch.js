let character;
let playcam;

function setup() {
  createCanvas(400, 400,WEBGL);
  playcam = createCamera();
  ambientLight(255);

  character = {
    position : new p5.Vector(0, 0, 400),
    looks_at : new p5.Vector(0, 0, 1),
    health : 6
  }
}

function draw() {
  debugMode();
  background(220);

  box(100,100);

  if(keyIsDown(LEFT_ARROW)){
    playcam.pan((PI/3)/deltaTime);
  }
  if(keyIsDown(RIGHT_ARROW)){
    playcam.pan(-((PI/3)/deltaTime));
  }

  character.looks_at.set(playcam.centerX,playcam.centerY,playcam.centerZ)

  if(keyIsDown(UP_ARROW)||keyIsDown(DOWN_ARROW)){
    let xdiff = character.position.x - character.looks_at.x
    let zdiff = character.position.z - character.looks_at.z

    let xfinal,zfinal;
    if(character.position.x > character.looks_at.x){
      xfinal = -Math.abs(xdiff);
    }else{
      xfinal = Math.abs(xdiff);
    }

    if(character.position.z > character.looks_at.z){
      zfinal = -Math.abs(zdiff);
    }else{
      zfinal = Math.abs(zdiff);
    }

    let finalvector = createVector(xfinal*0.01,0,zfinal*0.01);
    if(keyIsDown(UP_ARROW)){
      character.position = character.position.add(finalvector);
    }
    if(keyIsDown(DOWN_ARROW)){
      character.position = character.position.sub(finalvector);
    }
  }

  playcam.setPosition(character.position.x,character.position.y,character.position.z)
}
