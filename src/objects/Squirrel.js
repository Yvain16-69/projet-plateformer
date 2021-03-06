class Squirrel extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {
        super(scene, x, y, "squirrel");
        scene.add.existing(this)
        scene.physics.add.existing(this)

        //gestion de la taille
        this.setDisplaySize(32,48);

        //on réduit un peu la zone de hit
        this.setBodySize(this.body.width,this.body.height);
        this.setOffset(0, 0);
        this.setDepth(10);
        this.setCollideWorldBounds(true);
        this.setBounce(1);
        this.setVelocityY(10);

    }
}



/*
this.monstre=this.physics.add.sprite(850,this.sys.canvas.height-70,"goomba");
this.monstre.setOrigin(0,0);
this.monstre.setDisplaySize(64,64);
this.monstre.setCollideWorldBounds(true);
this.monstre.setBounce(1);
this.monstre.setVelocityX(80);
this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);*/