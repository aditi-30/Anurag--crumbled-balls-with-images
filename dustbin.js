class Dustbin {
    constructor(x, y) {
      var options = {
        'isStatic':true
      }
      
      //var side1 = createSprite(700,530,10,100);
     // var side2 = createSprite(750,575,100,10);
      //var side3 = createSprite(800,530,10,100);
      //this.image=loadImage("dustbingreen.png")
     this.body = Bodies.rectangle(x, y, 100, 100, options);
     this.image=loadImage("dustbingreen.png")
      
      this.width = 100;
      this.height = 100;
      
      World.add(world, this.body);
    }

    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER)
     // rect(0, 0, this.width, this.height);
     image(this.image, 0,0, this.width, this.height)
     pop();
    
    }
  }