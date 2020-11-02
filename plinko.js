class plinko{
    constructor(x, y, radius){
       
        this.body=Bodies.circle(x, y, r, {isStatic:true, density:1.2, restitution:0.3, friction:0.5});
        this.radius=radius;
        World.add(world, this.body);
    }
    display(){
        push ();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r * 2);
        pop ();
        var pos = this.body.position;
        fill ("green");
        stroke (255);


        
    }
}
