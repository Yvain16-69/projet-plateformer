class Goomba extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {
        super(scene, x, y, "goomba");
        //pas de gravité
        this.body.allowGravity=false;

        //gestion de la taille
        this.setDisplaySize(64,64);

        //on réduit un peu la zone de hit
        this.setBodySize(this.body.width-100,this.body.height-100);
        this.setOffset(0,0);

        //définir les propriété que l'on va utiliser dans notre animation

        // X

        this.setCollideWorldBounds(true);
        this.setBounce(1);
        this.setVelocityX(80);
        this.setDepth(10);

        //on fait apparaitre notre objet avec un petit delay, puis on lance l'animation
        //ceci a pour effet de décaler les animations pour ce même objet

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