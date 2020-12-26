var frect,mrect;
var car ,wall,truck;
function setup(){
  createCanvas(800,400);
 frect= createSprite(400, 200, 50, 50);
 mrect=createSprite(300,200,40,80);
 car=createSprite(200,200,50,50);
 car.velocityX=5
 wall=createSprite(500,200,40,300);
}

function draw() {
  background(0);  
  mrect.x=World.mouseX
  mrect.y=World.mouseY
  //if(isTouching(car,wall)){
   // text("car is crashed",300,300);
  //}
  bounceoff(car,wall)
  drawSprites();
}
