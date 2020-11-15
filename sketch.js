
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground;
var d1,d2,d3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,650)
	paper1 = new Paper(50,500,50,50)
	d1 = new Dustbin(1000,650,170,213)
	//d2 = new Dustbin(1070,600,20,100)
    //d3 = new Dustbin(870,600,20,100)
	


	Engine.run(engine);
  
}


function draw() {
  background(170);


  paper1.display();
  ground.display();
  d1.display();
  //d2.display();
 // d3.display();
 

  
  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.paper,paper1.paper.position,{x:222,y:289})


	}
}


