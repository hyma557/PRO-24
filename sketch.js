
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1;
var ground;
var paper1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

bin1 = new Bin(650, 470, 180, 20)
bin2 = new Bin(750, 420, 20, 120)
bin3 = new Bin(560, 420, 20, 120)
ground = new Ground(400, 490, 800, 20)
paper1 = new Paper(50, height-80, 30)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER)
  background(0);
  
bin1.display();
bin2.display();
bin3.display();
ground.display();
paper1.display();




  drawSprites();
 
}

function keyPressed(){
	if(keyDown("LEFT_ARROW")){
		Matter.body.x =  Matter.body.x+4 
	}
}

