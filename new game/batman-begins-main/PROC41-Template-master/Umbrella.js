class Umbrella {
    constructor(x,y){
        var options = {
            'isStatic': true,
        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        this.image = loadImage("images/Walking Frame_1.png","images/Walking Frame_2.png","images/Walking Frame_3.png","images/Walking Frame_4.png","images/Walking Frame_5.png","images/Walking Frame_6.png","images/Walking Frame_7.png","images/Walking Frame_8.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        imgMode(CENTER);
        image(this.image , pos.x,pos.y+70,300,300);
    }
}