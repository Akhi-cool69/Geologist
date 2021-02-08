
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1,ground1,stone1,rubber1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer1 = new Hammer(400,300,50,50);
	ground1 = new Ground(400,700,1000,100);
	stone1 = new Stone(300,200,100,100);
    rubber1 = new Rubber(400,100,40,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  hammer1.display();
  ground1.display();
  stone1.display();
  rubber1.display();
  
  drawSprites();
 
}



