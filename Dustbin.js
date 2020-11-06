class Dustbin{
    constructor(x,y,width,height){

        this.image = loadImage("dustbingreen.png")
        this.body = Bodies.rectangle(x,y,width,height,{isStatic : true})
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }


    display(){

    //rectMode(CENTER)
    //rect(this.body.position.x,this.body.position.y,this.width,this.height)
    
   push()
    translate(this.body.position.x,this.body.position.y)
    imageMode(CENTER)
    image(this.image,0,0,this.width,this.height)
   // Matter.Body.scale(this.body,0.1,0.1)
   pop();

 }


}