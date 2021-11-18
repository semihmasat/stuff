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
    "position": [-220,-50,0],
    "size": [100,200,100]
  },{
    "type":"primative",
    "primative_type":"plane",
    "texture":"assets/images/concrete_floor.jpg",
    "position":[0,50,0],
    "rotation":[2/4,0,0],
    "size":1000
  },{
    "type":"model",
    "model":"assets/models/shrek/Shrek.obj",
    "texture":"assets/images/shrek/Shrek_Body.png",
    "position":[0,-50,500],
    "rotation":[1,0.5,0]
  }
]

function preload(){
  mapobjs.forEach(function(obj){
    if(obj["texture"]!=undefined){
      obj["texture_loaded"] = loadImage(obj["texture"]);
    }

    if(obj["model"]!=undefined){
      obj["model_loaded"] = loadModel(obj["model"]);
    }
  })
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight,WEBGL);
  playcam = createCamera();
  ambientLight(255);

  character = {
    position : new p5.Vector(0, -165, 500),
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
        if(!Array.isArray(obj["size"])){
          context.box(obj["size"]);
        }else{
          context.box(obj["size"][0],obj["size"][1],obj["size"][2]);
        }
      }else if(obj["primative_type"] == "plane"){
        if(!Array.isArray(obj["size"])){
          context.plane(obj["size"])
        }else{
          context.plane(obj["size"][0],obj["size"][1])
        }
      }
    }else if(obj["type"]=="model"){
      model(obj["model_loaded"]);
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
