const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1,box2,box3;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(100,200,40,40);
    box2=new Box(130,150,35,35);
    ground=new Ground(200,390,400,20);
    
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
}