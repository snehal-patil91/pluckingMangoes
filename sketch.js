
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var mango1,mango2,mango3,mango4,mango5;
var ground1,tree1,boyimg,stone1,slingshot1;

function preload()
{
	boyimg=loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  mango1=new Mango(690,180,50);
  mango1.scale=0.5;
  mango2=new Mango(780,100,50);
  mango2.scale=0.5;
  mango3=new Mango(790,200,50);
  mango3.scale=0.5;
  mango4=new Mango(950,180,50);
  mango4.scale=0.5;
  mango5=new Mango(900,110,50);
  mango5.scale=0.5;
  stone1=new Stone(500,400,70)
  slingshot1=new Slingshot(stone1.body,{x:120,y:330})
  ground1=new Ground(500,480,1000,20);
   tree1=new Tree (800,250,400,500);
   tree1.scale=0.5;
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(166,173,173);
  Engine.update(engine);
  ground1.display();
  tree1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  slingshot1.display();
  detectCollide(stone1,mango1);
  detectCollide(stone1,mango2);
  detectCollide(stone1,mango3);
  detectCollide(stone1,mango4);
  detectCollide(stone1,mango5);
  image(boyimg,200,400,250,300)
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot1.fly();
}

function keyPressed(){
  if(keyCode===32){
  slingshot1.respawn(stone1.body);
  }
  }
  
  function detectCollide(lstone,lmango){
mangoBodyPosition=lmango.body.position;
stoneBodyPosition=lstone.body.position;

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,
  mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<-lmango.r+lstone.r){
Matter.Body.setStatic(lmango.body,false);

}

  }


