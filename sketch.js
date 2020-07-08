
var block1,
block2,
block3,
block4,
block5,
block6,
block7,
block8,
block9,
block10,
block11,
block12,
block13,
block14,
block15,
ground1,
ball,
rubber,
ground,wall1,wall2,wall3
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var engine,world;


function setup() {
  engine=Engine.create();
  world=engine.world;
  
  createCanvas(1500,800);
 // createSprite(400, 200, 50, 50);
 //creating blocks in shape of pyramid
 block1=new Block(430,588);
 block2=new Block(490,588);
 block3=new Block(550,588);
 block4=new Block(610,588);
 block5=new Block(670,588);
 block6=new Block(460,488);
 block7=new Block(520,488);
 block8=new Block(580,488);
 block9=new Block(640,488);
 block10=new Block(490,380);
 block11=new Block(550,380);
 block12=new Block(610,380);
 block13=new Block(520,280);
 block14=new Block(590,280);
 block15=new Block(550,100);

 //creating ground for blocks
 ground1=new Ground(550,600,420,20);

 //creating ball for hitting blocks
 ball=new Ball(200,900);
// World.add(world,ball)

//creating rubberband for ball
rubber=new  Rubber(ball.body,{x:200,y:550});

wall1=new Ground(-50,320,100,640);
wall2=new Ground(1550,320,100,640);
wall3=new Ground(750,-50,1500,100);
ground=new Ground(750,690,1500,100);
//World.add(world,ground);





  Engine.run(engine);
}

function draw() {
  background(25,225,105); 
  console.log(mouseX);
  console.log(mouseY);
  Engine.update(engine);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  ground1.display();
  ball.display();
  rubber.display();
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
  drawSprites();
}
function keyPressed(){
  if(KeyCode ===  32){
    rubber.attach(ball.body);
  }
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  
  
  }

function mouseReleased(){
  rubber.fly();
  
  }

  
  