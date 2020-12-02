const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(400,510,30,30);
	

	bob2=new Bob(460,510,30,30);
	

	bob3=new Bob(520,510,30,30);
	

	bob4=new Bob(580,510,30,30);
	

	bob5=new Bob(640,510,30,30);
	


    ground = new Roof(520,210,380,40);
	
	
	rope1=new Rope(bob3.body,ground.body,0,0);

	rope2=new Rope(bob2.body,ground.body,-60,-3);

	rope3=new Rope(bob1.body,ground.body,-120,-3);

	rope4=new Rope(bob4.body,ground.body,60,3);

	rope5=new Rope(bob5.body,ground.body,120,3);

	
	

	
	Engine.run(engine);
  
}


function draw() {
  background("white");
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 ground.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();


  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-85 , y:-75});
	}
}












