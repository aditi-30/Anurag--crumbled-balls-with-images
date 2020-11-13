
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crum_paper, groundobject, dustbinobject
var world, engine;

function preload()
{
	
}

function setup() {
	createCanvas(900,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	crum_paper = new Paper(100,100,100);

	groundobject = new Ground (450,590,900,20)
	dustbinobject = new Dustbin(700,500);


	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(255);


  crum_paper.display();
  groundobject.display();
  dustbinobject.display();
  

  keyPressed()
  //drawSprites();
 
}

function keyPressed(){
	 if(keyCode === UP_ARROW){
		 Matter.body.applyForce(PaperObject.body,PaperObject.body.position,{x:85,y:-85})
}
}