class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        var dis =this.display;
         push();

         console.log(this.body.speed);
         if(this.body.speed < 3 ){
          this.display;
         }
         else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          image(this.image, this.body.position.x, this.body.position.y, 50, 50);
          pop();
        }

        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
}



