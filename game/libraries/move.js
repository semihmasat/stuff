function istiltable(){
    normalized = createVector(character["position"].x-character["looks_at"].x,character["position"].y-character["looks_at"].y,character["position"].z-character["looks_at"].z);
    distance_x = abs(character["position"].x - character["looks_at"].x)
    distance_z = abs(character["position"].z - character["looks_at"].z)
  
    if((distance_x<=50)&&(distance_z<=50)){
      return false;
    }else{
      return true;
    }
  }
  
  function move(){
    if(keyIsDown(LEFT_ARROW)){
      playcam.pan((PI/3)/deltaTime);
    }
    if(keyIsDown(RIGHT_ARROW)){
      playcam.pan(-((PI/3)/deltaTime));
    }
    if(keyIsDown(UP_ARROW)){
      tilt = -(PI/3)/1000*deltaTime;
      playcam.tilt(tilt);
  
      console.log("tilt: ",tilt);
      if(!istiltable()){
        playcam.tilt(-tilt*10);
        console.log("tiltback",tilt,-tilt);
      }
    }
    if(keyIsDown(DOWN_ARROW)){
      tilt = (PI/3)/1000*deltaTime
      playcam.tilt(tilt);
      console.log("tilt: ",tilt);
  
      if(!istiltable()){
        playcam.tilt(-tilt*5);
      }
    }
  
    character.looks_at.set(playcam.centerX,playcam.centerY,playcam.centerZ)
  
    speedbuff = 1;
    if(keyIsDown(UP_ARROW)||keyIsDown(DOWN_ARROW)||keyIsDown(87)||keyIsDown(83)||keyIsDown(65)||keyIsDown(68)){
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
  
      if(keyIsDown(SHIFT)){
        speedbuff = 2;
      }
      
      let finalvector = createVector(xfinal*0.01*speedbuff,0,zfinal*0.01*speedbuff);
      
      if(keyIsDown(87)){
        character.position = character.position.add(finalvector);
      }
      if(keyIsDown(83)){
        character.position = character.position.sub(finalvector);
      }
  
      //3D Vector Rotation is really trickly on p5js ( afaik ). Need to write from scrath. So just did this manually
      if(keyIsDown(65)){
        leftlookingvector = createVector(-finalvector.z,finalvector.y,finalvector.x);
        character.position = character.position.sub(leftlookingvector);
      }
      if(keyIsDown(68)){
        leftlookingvector = createVector(-finalvector.z,finalvector.y,finalvector.x);
        character.position = character.position.add(leftlookingvector);
      }
    }
  
    playcam.setPosition(character.position.x,character.position.y,character.position.z)
  }