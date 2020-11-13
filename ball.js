/*class Paper {
    constructor(x, y,r) {
      var options = {
        isStatic: false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2,
      }

      
      this.body = Bodies.circle(x, y,r, options);
      this.body = loadImage("ball.png")
      this.r = r;
      this.x=x;
      this.y=y;
      
      World.add(world, this.body);
    }

    display(){
      var pos = this.body.position;
     // var angle = this.body.angle;
      push();
     // translate(pos.x, pos.y);
     // rotate(angle);
      imageMode(CENTER);
      stroke("red")
      strokeWeight(5)
      fill("white");
      image(this.image,0, 0, this.r,this.r);
      pop();
    }
  }*/

  class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
    this.body=Bodies.circle(this.x, this.y, this.r/2, options)
    this.image=loadImage("ball.png");
		World.add(world, this.body);

	}
	display()
	{
			
      var paperpos=this.body.position;	
      var angle= this.body.angle;	

			push()
      translate(paperpos.x, paperpos.y);
      rotate(angle)
		//rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
    	image(this.image, 0,0,this.r, this.r)
    
    //ellipseMode(RADIUS)
		//	ellipse(0,0,this.r, this.r);
			pop()
			
	}

}