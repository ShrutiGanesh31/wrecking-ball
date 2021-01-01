class Rope{
    constructor(bodyA,pointB){
        var Option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.5,
            length:300

        }
       
        this.pointB= pointB;
   this.Rope= Constraint.create(Option);
    World.add(world,this.Rope);
    
    }
   
    display() {
       
        if(this.Rope.bodyA){
    

        var pointA=this.Rope.bodyA.position;
        var pointB=this.pointB;
        
        push();
       
        strokeWeight(7);
        stroke(48,22,8);
    line(pointA.x,pointA.y,pointB.x,pointB.y);  
     
        
        pop();
        }

    }
}