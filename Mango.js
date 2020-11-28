class mango{
    constructor() {
        var options = {
            isStatic : true,
            restitution : 0,
            friction :1
        }

        this.body = Bodies.circle(options);

        this.image = loadImage("sprite/mango.png");
    }
}