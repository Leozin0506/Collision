

function bounceOff(obj1, obj2){

    if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
      && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
      obj1.velocityX = obj1.velocityX * (-1);
      obj2.velocityX = obj2.velocityX * (-1);
    }
    if (obj1.y - obj2.y < obj2.height/2 + obj1.height/2
      && obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
     obj1.velocityY = obj1.velocityY * (-1);
     obj2.velocityY = obj2.velocityY * (-1);
    }
}


function isTouching(sprite1,sprite2){
    if (sprite1.x - sprite2.x < sprite2.width/2 + sprite1.width/2
        && sprite2.x - sprite1.x < sprite2.width/2 + sprite1.width/2
        && sprite1.y - sprite2.y < sprite2.height/2 + sprite1.height/2
        && sprite2.y - sprite1.y < sprite2.height/2 + sprite1.height/2){
           return true;
        }
        
    else 
        { 
           return false; 
        } 
}
