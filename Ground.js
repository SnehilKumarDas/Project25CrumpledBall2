class Ground{
    constructor(x,y,options){

        var options = {

            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,1200,20,options)
        this.width = 1200
        this.height = 20
        World.add(world,this.body);
    }

    display(){

        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }



}