class Roof {
    constructor(x, y, w,h) {
      var options = {
        isStatic:true
        }
       
        
      this.body = Bodies.rectangle(x, y,w,h,options);
      this.w=w;
      this.h=h;
       World.add(world, this.body);
    }
     display(){
      var groundpos=this.body.position;
      rectMode(CENTER);
      fill("yellow");
      rect(groundpos.x, groundpos.y, this.w,this.h);
      pop()
      
    }
  }
  
    