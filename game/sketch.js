let character;
let playcam;
let canvas;
let levelvector;

let mapobjs = [
  {
    "type":"primative",
    "primative_type":"box",
    "position": [0,0,0],
    "rotation": [0,0,0],
    "size": 100,
    "texture":"assets/images/wat.jpg"
  },{
    "type":"primative",
    "primative_type":"box",
    "position": [0,-100,0],
    "rotation": [0,0,0],
    "size": 100
  },{
    "type":"primative",
    "primative_type":"box",
    "position": [0,-200,0],
    "rotation": [0,0,0],
    "size": 100
  },{
    "type":"primative",
    "primative_type":"box",
    "position": [110,0,0],
    "size": 100
  },{
    "type":"primative",
    "primative_type":"box",
    "position": [220,0,0],
    "size": 100
  },{
    "type":"primative",
    "primative_type":"box",
    "position": [-110,0,0],
    "size": 100
  },
  {
    "type":"primative",
    "primative_type":"box",
    "position": [-220,0,0],
    "size": 100
  },{
    "type":"primative",
    "primative_type":"plane",
    "position":[0,50,0],
    "rotation":[2/4,0,0],
    "size":1000
  }
]

let testimg;
function preload(){
  mapobjs.forEach(function(obj){
    if(obj["texture"]!=undefined){
      console.log("waaa");
      obj["texture_loaded"] = loadImage(obj["texture"]);
      console.log(obj["texture_loaded"]);
    }
  })
}

function setup() {
  canvas = createCanvas(400, 400,WEBGL);
  playcam = createCamera();
  ambientLight(255);

  character = {
    position : new p5.Vector(0, -165, 400),
    looks_at : new p5.Vector(0, 0, 1),
    health : 6
  }

  levelvector = createVector(1,1,1);
}

function drawgameobjects(context,PI){
  mapobjs.forEach(function(obj){
    push();
    translate(obj["position"][0],obj["position"][1],obj["position"][2]);
    if(obj["rotation"]!=undefined){
      rotateX(obj["rotation"][0]*PI);
      rotateY(obj["rotation"][1]*PI);
      rotateZ(obj["rotation"][2]*PI);
    }

    if(obj["texture"]!=undefined){
      texture(obj["texture_loaded"]);
    }

    if(obj["type"]=="primative"){
      if(obj["primative_type"] == "box"){
        context.box(obj["size"]);
      }else if(obj["primative_type"] == "plane"){
        context.plane(obj["size"])
      }
    }

    pop();
  });
}

function draw() {
  debugMode();
  background(220);  
  drawgameobjects(this,PI);
  move();
}
