var bg, bgImage;
var player,playerAnim;
var obstacle1, obstacle1Image, obstacle2, obstacle2Image;
var invisibleGround;

function preload() {
  bgImage = loadImage("assets/bg.png");
  playerAnim = loadAnimation("assets/gif/0001.png","assets/gif/0002.png","assets/gif/0003.png","assets/gif/0004.png","assets/gif/0005.png","assets/gif/0006.png");
  obstacle1Image = loadImage("assets/obstacle1.png")
  obstacle2Image = loadImage("assets/obstacle2.png")
}

function setup() {
  createCanvas(600,400);
  bg = createSprite(0,-50,0,0);
  bg.velocityX = -2;
  bg.x = width/2;

  invisibleGround = createSprite(300,400,900,10);
  invisibleGround.visible = false;

  bg.addImage(bgImage);
  // bg.x = bg.width/2;
  bg.scale =3;
  player = createSprite(50, 300, 50, 50)
  player.addAnimation('playerRunning', playerAnim);
  player.scale = 0.8;
}

function draw() {
  background(255,255,255);  
  if(bg.x < 0){
    bg.x = bg.width/2;
  }
  if(frameCount%100 === 0){
  var obstacle = createSprite(400,350,40,50);
  obstacle.y = Math.round(random(250,380));
  obstacle.scale = 0.03;
  obstacle.velocityX = -3;
  var rand = Math.round(random(1,2));
  //var rand=roundoff(random(1,2))
  
      switch(rand) {
        case 1: obstacle.addImage(obstacle1Image);
                break;
        case 2: obstacle.addImage(obstacle2Image);
                break;
        default: break;
      }
  } 
  if(keyDown("space") && player.y > 200 ){
    player.velocityY = -8;
  }
  player.velocityY = player.velocityY + 0.5;
  player.collide(invisibleGround);
  drawSprites();
}