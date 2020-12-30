class Paper{
    constructor(x, y){
        var options = {
            isStatic: false,
            restituition: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, 30, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        fill('yellow');
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 30, 30);
    }
}