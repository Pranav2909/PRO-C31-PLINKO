const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);

  Engine = Engine.create();
  world = engine.world;

  ground = new Ground(750,10,100,20);
}

function draw() {
  background(0);  
  drawSprites();
}