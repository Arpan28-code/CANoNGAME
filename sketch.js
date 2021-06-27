var canon,canonImg,canonBall,canonBallImg,coins,coins1,coins2,coins3,coins4,coins5,coins6,coins7,coinsImg,ship,shipImg,background,backgroundImg;
var boundary1,boundary2,boundary3,boundary4;
var score=0;
var gamestate;

function preload(){
canonImg = loadImage("Images/Canon0.png")
canonBallImg = loadImage("Images/canonBall0.png")
coinsImg = loadImage("Images/coin1.png")
shipImg = loadImage("Images/Player0.png")
backgroundImg = loadImage("Images/pic.jpg")


}


function setup() {
 createCanvas(displayWidth,displayHeight);
canon= createSprite(displayWidth/2,displayHeight/2,50,50);
canon.addImage("ufoBlue_1",canonImg);
canon.scale = 1.5;
canonBall= createSprite(displayWidth/2,displayHeight/2,10,10);
canonBall.addImage("eightball_1",canonBallImg);
canonBall.scale = 0.5
coins= createSprite(random(50,displayWidth-50),random(1,displayHeight),25,25);
coins.addImage("coin_gold_1",coinsImg);
coins.scale = 0.5;

coins1= createSprite(random(50,displayWidth-50),random(1,displayHeight),25,25);
coins1.addImage("coin_gold_1",coinsImg);
coins1.scale = 0.5;
coins2= createSprite(random(50,displayWidth-50),random(1,displayHeight),25,25);
coins2.addImage("coin_gold_1",coinsImg);
coins2.scale = 0.5;
coins3= createSprite(random(50,displayWidth-50),random(1,displayHeight),25,25);
coins3.addImage("coin_gold_1",coinsImg);
coins3.scale = 0.5;
coins4= createSprite(random(50,displayWidth-50),random(1,displayHeight),25,25);
coins4.addImage("coin_gold_1",coinsImg);
coins4.scale = 0.5;
coins5= createSprite(random(50,displayWidth-50),random(1,displayHeight),25,25);
coins5.addImage("coin_gold_1",coinsImg);
coins5.scale = 0.5;
coins6= createSprite(random(50,displayWidth-50),random(1,displayHeight),25,25);
coins6.addImage("coin_gold_1",coinsImg);
coins6.scale = 0.5;
coins7= createSprite(random(50,displayWidth-50),random(1,displayHeight),25,25);
coins7.addImage("coin_gold_1",coinsImg);
coins7.scale = 0.5;
ship= createSprite(displayWidth/2,displayHeight/2-200,25,25);
ship.addImage("ship16_1",shipImg);
ship.scale=1;
boundary1 = createSprite(displayWidth/2,1,displayWidth,5);
boundary2 = createSprite(displayWidth,displayHeight/2,5,displayHeight);
boundary3 = createSprite(displayWidth/2,displayHeight,displayWidth,5);
boundary4 = createSprite(1,displayHeight/2,5,displayHeight);


}

function draw() {
  background(backgroundImg);
textSize(28);
text("Score"+":"+ score,100,100);

if (ship.isTouching(coins) ) {
  score = score+2;
  coins.destroy()
  
 }
 if (ship.isTouching(coins1) ) {
  score = score+2;
  coins1.destroy()
  
 }
 if (ship.isTouching(coins2) ) {
  score = score+2;
  coins2.destroy()
  
 }
 if (ship.isTouching(coins3) ) {
  score = score+2;
  coins3.destroy()
  
 }
 if (ship.isTouching(coins4) ) {
  score = score+2;
  coins4.destroy()
  
 }
 if (ship.isTouching(coins5) ) {
  score = score+2;
  coins5.destroy()
  
 }
 if (ship.isTouching(coins6) ) {
  score = score+2;
  coins6.destroy()
  
 }
 if (ship.isTouching(coins7) ) {
  score = score+2;
  coins7.destroy()
  
 }
 if (ship.isTouching(canonBall)) {
  ship.destroy()
  coins.destroy()
  coins1.destroy()
  coins2.destroy()
  coins3.destroy()
  coins4.destroy()
  coins5.destroy()
  coins6.destroy()
  coins7.destroy()
  canonBall.destroy()
  gamestate = "over" ;
  
   
 }
 if (gamestate=== "over") {
textSize(50);
text("GAME OVER",600,600)

 }

ship.bounceOff(canon);
ship.bounceOff(boundary1);
ship.bounceOff(boundary2);
ship.bounceOff(boundary3);
ship.bounceOff(boundary4);


coins1.bounceOff(boundary1);
coins1.bounceOff(boundary2);
coins1.bounceOff(boundary3);
coins1.bounceOff(boundary4);
coins1.bounceOff(canon);

coins2.bounceOff(boundary1);
coins2.bounceOff(boundary2);
coins2.bounceOff(boundary3);
coins2.bounceOff(boundary4);
coins2.bounceOff(canon);

coins3.bounceOff(boundary1);
coins3.bounceOff(boundary2);
coins3.bounceOff(boundary3);
coins3.bounceOff(boundary4);
coins3.bounceOff(canon);

coins4.bounceOff(boundary1);
coins4.bounceOff(boundary2);
coins4.bounceOff(boundary3);
coins4.bounceOff(boundary4);
coins4.bounceOff(canon);

coins5.bounceOff(boundary1);
coins5.bounceOff(boundary2);
coins5.bounceOff(boundary3);
coins5.bounceOff(boundary4);
coins5.bounceOff(canon);

coins6.bounceOff(boundary1);
coins6.bounceOff(boundary2);
coins6.bounceOff(boundary3);
coins6.bounceOff(boundary4);
coins6.bounceOff(canon);

coins7.bounceOff(boundary1);
coins7.bounceOff(boundary2);
coins7.bounceOff(boundary3);
coins7.bounceOff(boundary4);
coins7.bounceOff(canon);

coins.bounceOff(boundary1);
coins.bounceOff(boundary2);
coins.bounceOff(boundary3);
coins.bounceOff(boundary4);
coins.bounceOff(canon);



canonBall.bounceOff(boundary1);
canonBall.bounceOff(boundary2);
canonBall.bounceOff(boundary3);
canonBall.bounceOff(boundary4);


 




  drawSprites();
}
function keyPressed(){

  if(keyCode===87 && coins.velocityX !== 0){

ship.velocityY=-4;


}
  if(keyCode===83 && coins.velocityX !== 0){
  ship.velocityY=6; }
  if(keyCode===68 && coins.velocityX !== 0){

    ship.velocityX=5;

  }
  if(keyCode===65 && coins.velocityX !== 0){

    ship.velocityX=-5;

  }
  if(keyCode===69 && coins.velocityX !== 0){

    ship.velocityX=0;
    ship.velocityY=0;

  }
  if (keyCode===32 && coins.velocityX===0) {
    coins.velocityX=random(-6,15)
    coins.velocityY=random(-3,15)
    

    coins1.velocityX=random(-6,15)
    coins1.velocityY=random(-3,15)
    

    coins2.velocityX=random(-6,15)
    coins2.velocityY=random(-3,15)
    

    coins3.velocityX=random(-6,15)
    coins3.velocityY=random(-3,15)
    

    coins4.velocityX=random(-6,15)
    coins4.velocityY=random(-3,15)
    

    coins5.velocityX=random(-6,15)
    coins5.velocityY=random(-3,15)
    
    coins6.velocityX=random(-6,15)
    coins6.velocityY=random(-3,15)
    

    coins7.velocityX=random(-6,15)
    coins7.velocityY=random(-3,15)
    
    
    canonBall.velocityX = random(10,30)
    canonBall.velocityY = random(-8,18)
    gamestate = "play" ;
    
  }
   

 
}
