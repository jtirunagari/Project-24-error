
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var box1,box2,box3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	myWorld = engine.world;
	box1=new Box(240,310,20,100)
	box2=new Box(340,310,20,100)
	box3=new Box(290,325,200,20)
	ball=new Ball(40,650,25)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  box1.display()
  box2.display()
  box3.display()
  ball.display()
  drawSprites();
 
}
function keyPressed(){
	
	if(keyCode === UP_ARROW){
		console.log("hi")
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
}



