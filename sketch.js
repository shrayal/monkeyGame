
var monkey , monkey_running
var fruit ,bananaImage, stone, stoneImage;
var invisibleGround;
var FoodGroup, obstacleGroup
var score=0
var land
var gameState="play"

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,300)
land=createSprite(250,250,600,10)
monkey=createSprite(50,225,50,50)
monkey.addAnimation("hhu",monkey_running)
monkey.scale=0.1
//monkey.debug=true
invisibleGround=createSprite(250,250,600,5)
invisibleGround.visible = false;
obstacleGroup=createGroup();
FoodGroup=createGroup();
}


function draw() {
  background("lightblue");
  text("SURVIVAL TIME="+score,400,50)
  if(gameState==="play"){
  if(keyDown("space")&& monkey.y >= 150) {
    monkey.velocityY = -17;
  }
  monkey.velocityY = monkey.velocityY +0.8
  spawnobstacle()
  spawnFruit()
  score=score+Math.round(frameCount/200)
   if(obstacleGroup.isTouching(monkey)){
    gameState="end"
   }
  }
  else if(gameState="end"){
   FoodGroup.setVelocityXEach(0)
    obstacleGroup.setVelocityXEach(0)
    FoodGroup.setLifetimeEach(-1)
    obstacleGroup.setLifetimeEach(-1)
  }
  monkey.collide(invisibleGround);
  monkey.setCollider("circle",0,0,250)
  
  
  drawSprites()
}
function spawnobstacle(){
 if(frameCount%90===0) {
  var stone=createSprite(500,215,20,20)
  stone.addImage("gfgf",stoneImage)
   stone.velocityX=-4;
   stone.scale=0.2;
 //stone.debug=true
   stone.lifetime=-1;
   obstacleGroup.add(stone);
    stone.setCollider("rectangle",0,0,200,200)
   monkey.depth=stone.depth
   monkey.depth=monkey.depth+1
 } 
}
function spawnFruit() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    fruit = createSprite(600,100,40,10);
    fruit.addImage(bananaImage)
    fruit.y = Math.round(random(50,150))
    fruit.scale = 0.1;
    fruit.velocityX = -3;
    fruit.lifetime =200;
    FoodGroup.add(fruit)
    }
}






