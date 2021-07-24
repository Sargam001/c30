class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
        
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
         image(this.image1, 230, 20, this.width, this.height);
         image(this.image2, 200, 15, this.width, this.height);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           if( pointA.x<230){
            strokeWeight(2);
            stroke(48,22,8)
            line(pointA.x-15, pointA.y, pointB.x-20, pointB.y);
            line(pointA.x-15, pointA.y, pointB.x+30, pointB.y);
            image(this.image3, pointA.x-30,pointA.y-10, 15,30);
           }
            strokeWeight(4);
            stroke(48,22,8)
            line(pointA.x-15, pointA.y, pointB.x-20, pointB.y);
            line(pointA.x-15, pointA.y, pointB.x+30, pointB.y);
            image(this.image3, pointA.x-30,pointA.y-10, 15,30);
        }
       
    }
    attach(body){
        this.sling.bodyA = body;
    }
}