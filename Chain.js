class Chain {
    constructor(bodyA,bodyB) {
        var options = {
            bodyA: bird.body,
            bodyB: constraintLog.body,
            stiffness: 0.04,
            lenght: 10,
        }
        this.chain = Constraint.create(options);
World.add(world,chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}