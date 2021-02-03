class BobOmb extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {
        super(scene, x, y, "bob-omb");
        //pas de gravité
        this.body.allowGravity=false;

        //gestion de la taille
        this.setDisplaySize(80,80);

        //on réduit un peu la zone de hit
        this.setBodySize(this.body.width-400,this.body.height-400);
        this.setOffset(150, 250);

        //définir les propriété que l'on va utiliser dans notre animation

        this.setCollideWorldBounds(true);
        this.setBounce(1);
        this.setVelocityX(80);

        //on fait apparaitre notre objet avec un petit delay, puis on lance l'animation
        //ceci a pour effet de décaler les animations pour ce même objet

    }
}