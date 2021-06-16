const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 


var drop2

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;


   //drop2= new Drops (100,100)
    

    

    

}


function draw() {
  background("black");
  
 //text("Score : "+score,20,30);
  Engine.update(engine);
 

 //Drops()
  
 
}