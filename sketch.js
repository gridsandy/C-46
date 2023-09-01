const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backg;
var heliimg, heli;
var airdropBImg, airdropHImg, alienImg, blastImg, bulletImg, barrelImg, turretImg;
var aliensGroup, barrelsGroup;
var alien, barrel;

function preload() {
  backg = loadImage('./assets/backg.webp');
  heliimg = loadAnimation('./assets/Heli1.png', './assets/Heli2.png');
  airdropBImg = loadImage('./assets/Airdrop_Bullet.png');
  airdropHImg = loadImage('./assets/Airdrop_Health.png');
  alienImg = loadImage('./assets/Alien.png');
  blastImg = loadImage('./assets/blast.png');
  bulletImg = loadImage('./assets/bullet.png');
  barrelImg = loadImage('./assets/oil_barrel.png');
  turretImg = loadImage('./assets/Turret.png');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  engine = Engine.create();
  world = engine.world;

  heli = createSprite(width-250, 100, 100, 100)
  heli.addAnimation('heli', heliimg)
  heli.scale = 0.7;
  turret = createSprite(width-280, 145, 100, 100);
  turret.addImage(turretImg);
  turret.scale = 0.1

  aliensGroup = new Group();
  barrelsGroup = new Group();

}


function draw() 
{
  background(backg);
  Engine.update(engine);
  handleHeli();
  spawnAliens();
  spawnBarrels();
  
  drawSprites();
}

function handleHeli() {
  if (keyIsDown(UP_ARROW)) {
    heli.y = heli.y-7
    turret.y = turret.y-7
  }
  
  if(keyIsDown(DOWN_ARROW)) {
    heli.y = heli.y+7
    turret.y = turret.y+7
  }
  
  if(keyIsDown(LEFT_ARROW)) {
    heli.x = heli.x-7;
    turret.x = turret.x-7;
  }
  
  if(keyIsDown(RIGHT_ARROW)) {
    heli.x = heli.x + 7
    turret.x = turret.x + 7
  }

  if (keyIsDown('s')) {
    console.log('')
  }
}

function spawnAliens() {
  if (frameCount % 50 === 0) {
    alien = createSprite(Math.round(random(-200, -80)), Math.round(random(400, 700)), 80, 100);
    alien.addImage(alienImg);
    alien.scale = 0.35;
    alien.velocityX = 8;
    aliensGroup.add(alien);
  }
}

function spawnBarrels() {
  if (frameCount % 200 === 0) {
    barrel = createSprite(Math.round(random(25, 1000)), 700, 60, 80);
    barrel.addImage(barrelImg);
    barrel.scale = 0.1;
    barrelsGroup.add(barrel);
  }
}