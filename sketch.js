
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImage, boy;


function preload()
{
	boyImage = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200,200,10,10);
	boy = setAnimation(boyImage);

	rock = new stone(100,200,10,20);

	mango1 = new mango(300,200,20,30);
	mango2 = new mango(200,200,20,30);
	mango3 = new mango(300,190,20,30);
	mango3 = new mango(300,190,20,30);
	mango4 = new mango(200,190,20,30);
	mango5 = new mango(100,190,20,30);
	mango6 = new mango(340,190,20,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	
	boy.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();

	set.mango.isStatic = false;

	detecollision(rock,mangoo1);
	detectollision(rock,mango2);
	detectollision(rock,mango3);
	detectollision(rock,mango4);
	detectollision(rock,mango5);
	detectollision(rock,mango6);

  drawSprites();
 
}

function fly() {
	bodyA = null;
}

funtion keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(rock.body, {x:235,y:420});
		launcherObject.attach(rock.body);
	}
}


function mouseDragged() {

}

function mouseReleased() {
	s
}