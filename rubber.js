class Rubber {
    constructor(bodyA,pointB){
    var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.1,
    length:5,
    }
    this.pointB=pointB;
    this.rubber=Constraint.create(options);
    World.add(world,this.rubber);
    }
    attach(body){
      this.rubber.bodyA = body;
    }
    fly(){
    this.rubber.bodyA=null;
    }
    
    display(){
    strokeWeight(10)
    if(this.rubber.bodyA){
        var pointA=this.rubber.bodyA.position;
        var pointB=this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
       }
        
      }
    
    
    }
    