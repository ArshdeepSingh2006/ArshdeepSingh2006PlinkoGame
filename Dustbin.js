class Dustbin{
    constructor(x, y, width, height){
        var options = {
            'isStatic': true
        }

        this.bodyb = Bodies.rectangle(x, y, width, height);
        World.add(world, this.bodyb); 
        this.body1 = Bodies.rectangle(x-(width/2)),(y-(height*2)), height, width;
        World.add(world, this.body1);
        this.bodyr = Bodies.rectangle(x+(width/2)),(y-(height*2)), height, width;
        World.add(world, this.bodyr);
        this.bodyb.width = width
        this.bodyb.height = height

    }
    display();
    

}