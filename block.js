class Block {
constructor(x,y){
var options={
density:0.5,
restitution:0.4,
friction:0.5,
isStatic:false,


}
this.body=Bodies.rectangle(x,y,60,70,options);
this.width=60;
this.height=70;
World.add(world,this.body)

}
display(){
var pos=this.body.position;
var angle=this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
stroke("red");
strokeWeight(1);
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop();


}




}