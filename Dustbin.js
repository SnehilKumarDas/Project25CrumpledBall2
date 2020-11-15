class Dustbin{
    constructor(x,y,width,height){

        this.image = loadImage("dustbingreen.png")
        this.body = Bodies.rectangle(x,y,width,height,{isStatic : true})
        this.left = Bodies.rectangle(900,545,20,height,{isStatic : true})
        this.right = Bodies.rectangle(1100,545,20,height,{isStatic : true})

        this.width = width;
        this.height = height;

        World.add(world,this.body)
        World.add(world,this.left)
        World.add(world,this.right)
    }


    display(){

    //rectMode(CENTER)
    //rect(this.body.position.x,this.body.position.y,this.width,this.height)
    
   push()
    translate(this.body.position.x,this.body.position.y)
    imageMode(CENTER)
    image(this.image,0,-125,this.width,this.height)
   // Matter.Body.scale(this.body,0.1,0.1)
   pop();

 }


}