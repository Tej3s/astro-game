function preload(){
  bg = loadImage("Astronaut's daily routine/iss.png");
  sleep = loadAnimation("Astronaut's daily routine/sleep.png");
  brush = loadAnimation("Astronaut's daily routine/brush.png");
  gym = loadAnimation("Astronaut's daily routine/gym11.png", "Astronaut's daily routine/gym12.png");
  eat = loadAnimation("Astronaut's daily routine/eat1.png", "Astronaut's daily routine/eat2.png");
  drink = loadAnimation("Astronaut's daily routine/bath1.png", "Astronaut's daily routine/bath2.png");
  move = loadAnimation("Astronaut's daily routine/move1.png");
}
function setup() {
  createCanvas(800,400);
  
  background1 = createSprite(400, 200, 50, 50);
  background1.addImage(bg);
  astronaut = createSprite(300, 230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(255,255,255); 
  x = createEdgeSprites();
  astronaut.bounceOff(x);
  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  } 
  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", drink);
    astronaut.changeAnimation ("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("M")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 5;
    astronaut.velocityY = 5;
  }
  drawSprites();
}