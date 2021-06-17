/*class Constrained{
    constructor(bodyA, pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffnes:0.05,
        }
        this.pointB = pointB;
        this.rubber = Constraint.create(options);
        World.add(world, this.rubber);
    }

    attatch(bodyA) {
        this.rubber.bodyA = bodyA
    }

    fly() {
        this.rubber.bodyA = null
    }

    display() {

        if(this.rubber.bodyA) {

        var pointA = this.rubber.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(10);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}
*/

class Constrained{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.Constrained=Constraint.create(options)
		World.add(world,this.Constrained)
	}

	attach(body){
		this.Constrained.bodyA=body;
	}

	fly()
	{
		this.Constrained.bodyA=null;
	}

	display()
	{
		if(this.Constrained.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}