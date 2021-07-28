//Global variable
var manani , pathimg , man, path  

function preload(){
  manani=loadAnimation('Runner-1.png','Runner-2.png')

  pathimg=loadImage('path.png')
}

function setup(){
  
  createCanvas(700,700);

  path=createSprite(350,350,700)
  path.addImage(pathimg)
  path.scale=1.8
  
  path2=createSprite(350,2,700,45)
  
  man=createSprite(500,400,20,35)
  man.addAnimation('walking',manani)
  man.scale=0.2 
}

function draw() {
  console.log(path.y)

  background('gray');

  man.collide(path2)

  path.velocityY = 5
  man.x = mouseX;

  if(path.y > 900){
    path.y = 700
  }
 drawSprites()
}
