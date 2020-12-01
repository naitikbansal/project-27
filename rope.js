class rope{
    
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var opt={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
             }
    this.rope=Constraints.create(opt);
    World.add(world,this.rope);
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        strokeWeight(1);
        var r1X=pointA.x
        var r1Y=pointA.y

        var r2X=pointB.x+this.offsetX
        var r2Y=pointB.y+this.offsetY
        line(r1X,r1Y,r2X,r2Y);
    }
}
