const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var snow = [];

function preload() {
  bg = loadImage("snow3.jpg");
  snowImg = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
 

  
}

function draw() {
  background(bg);  
 Engine.update(engine);
drawSprites();
if(frameCount % 60 === 0) {
  s();
}
}
function s() {
  var snow = createSprite(random(800, 0), 0,500,100);
  snow.addImage(snowImg);
  snow.scale = 0.15;
  snow.velocityY = 3;
  
}
