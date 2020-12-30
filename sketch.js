const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(300, 330);
	ground = new Ground(600, 350, 1200, 20);
	dustbin1 = new Ground(800, 330, 300, 20);
	dustbin2 = new Ground(639, 290, 20, 100);
	dustbin3 = new Ground(939, 290, 20, 100);

	var render = Render.create({
		element: document.body, 
		engine: engine, 
		options: { width: 1200, height: 400, showAngleIndicator: true }
		}); 
		Render.run(render);
}


function draw() {
	background(0);
  	Engine.update(engine);
  	paper.display();
  	ground.display();
  	dustbin1.display();
  	dustbin2.display();
	dustbin3.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:200, y:-100});
	}
}

