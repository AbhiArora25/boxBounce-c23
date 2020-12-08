class Ground{
    constructor(x,y,width,height){
        var ground_options ={
            isStatic: true
        }
    
    this.ground=Bodies.rectangle(x,y,width,height,ground_options);
    this.width=width;
    this.height=height;
    World.add(world,this.ground);
    }

    display(){
    var pos=this.ground.position;
    var angle=this.ground.angle;
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
    }
}