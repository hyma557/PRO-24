class Paper {
    constructor(x, y, radius) {
      var options= {
          isStatic: false, 
          restitution:0.3,
          friction:5.5,
          density:1.2
      }
      this.radius = radius;
      this.body = Bodies.circle(x, y, radius/2, options);
      
      World.add(world, this.body);
    }
    display(){

      fill("purple");
      var posit = this.body.position;

      if(keyDown("LEFT_ARROW")){
          posit.x = posit.x-4
      }

      if(keyDown("RIGHT_ARROW")){
        posit.x = posit.x+4
    }

    if(keyDown("UP_ARROW")){
        posit.y = posit.y-4
    }

    if(keyDown("DOWN_ARROW")){
        posit.y = posit.y+4
    }
      push();
      translate(posit.x, posit.y);
      ellipseMode(RADIUS);
      ellipse(0, 0, this.radius);
      pop();

    }
}