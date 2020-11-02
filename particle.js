class particle{
    constructor(x, y, radius){
       var options= {
           isStatic:false
       }
        this.body=Bodies.circle(x, y, this.r, options);
this.color=color(random(0,255), random(0, 255))

        World.add(world, this.body);
    }
    display(){
        push ();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r * 2);
        pop ();
        var pos = this.body.position;
        fill (255);
        stroke (255);


        
    }
}
