var retFixo, retMovendo;

function setup() {
  createCanvas(1200,800);
  retFixo = createSprite(400, 100, 50, 80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;
  retMovendo = createSprite(400, 800,80,30);
  retMovendo.shapeColor = "green";
  retMovendo.debug = true;

  retMovendo.velocityY = -5;
  retFixo.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  if(isTouching(retFixo, retMovendo)){
    retFixo.shapeColor = "red";
    retMovendo.shapeColor = "red";
  }
  else{
    retFixo.shapeColor = "green";
    retMovendo.shapeColor = "green";
  }
  bounceOff(retMovendo, retFixo);
  drawSprites();
}
