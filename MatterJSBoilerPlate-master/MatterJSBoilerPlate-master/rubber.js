class Rubber {
    constructor(x, y, radius, options, maxsides) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1,
      }
      this.body = Bodies.circle(x, y, radius, options, maxsides);
      this.radius = radius;
      this.options = options;
      this.maxsides = maxsides;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(1);
      fill("blue");
      circle(0, 0, this.radius, this.options, this.maxsides);
      pop();
    }
  };