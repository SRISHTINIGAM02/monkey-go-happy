
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var SurvivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  Monkey = createSprite(80,315,20,20);
  Monkey.addAnimation("moving",monkey_running);
  Monkey.scale = 0.1;

  ground = createSprite(400,350,900,10);
  
 
  SurvivalTime = 0;
}



function draw() {
  background(255);
  text("SurvivalTime: "+ SurvivalTime, 470,50);
  
  SurvivalTime = SurvivalTime + Math.round(getFrameRate()/60);
   ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)
  
  if(keyDown("space") && Monkey.y >= 159) {
      Monkey.velocityY = -12;
    }
   Monkey.velocityY = Monkey.velocityY + 0.8

  Monkey.collide(ground);
  
  foodGroup();
  ObstacleGroup();
  
 drawSprites(); 
}

function foodGroup(){
  if(World.frameCount % 80 === 0){
     banana = createSprite(400,200,20,20);
     banana.addImage(bananaImage);
     banana.y = Math.round(random(120,200));
     banana.velocityX = -(6 + 3/100);
     banana.scale = 0.1;
    banana.setLifetime = 50; 
  }  
}

 function ObstacleGroup() {
  if(frameCount % 90 === 0) {
    var obstacle = createSprite(200,330,10,40);
    obstacle.velocityX = -(6 + 3/100);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
  }
 }





