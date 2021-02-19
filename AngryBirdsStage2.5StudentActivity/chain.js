class Chain
{
    constructor(bodyA,bodyB)
    {
        //defining the properties or rules for object
        //for option JSON(Java script Object notation) { parameter:value for parameter}
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.5
        }
        this.chain=Matter.Constraint.create(options)
        World.add(world,this.chain)
    }
    display()
    {
        //to display the object using the property
        var pointA= this.chain.bodyA.position
        var pointB= this.chain.bodyB.position
        //line(x1,y1,x2,y2)
        //line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}