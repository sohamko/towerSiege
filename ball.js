class Ball  {
    constructor(x,y){
    var options={
    'density':8,
    'restitution':0.8,
    'friction':0.1,
    isStatic:false,
    
    }
   // this.image=loadImage("sprites/paper.png");
    this.body=Bodies.circle(x,y,20,options);
   this.radius=20;
    World.add(world,this.body);    
    }
    
    display(){
       // super.display();
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    fill("red");
    translate(pos.x,pos.y);
    rotate(-20) 
    ellipseMode(CENTER);
    ellipse(0,0,100,30);
    //shape(200,400,230,400,250,430,230,460,200,460,170,430);
    stroke("green");
    strokeWeight(10);
    pop();
     
    }
    
    } 