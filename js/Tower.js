class Tower {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };
    
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/tower.png");
    //made height of tower body smaller else tower interferes with ball hit when cannon is pointing very down
    this.body = Bodies.rectangle(x, y , this.width/3, this.height/2, options); 
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
