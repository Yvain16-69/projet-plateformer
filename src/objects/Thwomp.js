class Thwomp extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {
        super(scene, x, y, "thwomp");
        //pas de gravité
        this.body.allowGravity=true;

        //gestion de la taille
        this.setDisplaySize(64,72);

        //on réduit un peu la zone de hit
        this.setBodySize(this.body.width-400,this.body.height-400);
        this.setOffset(50, 150);

        //définir les propriété que l'on va utiliser dans notre animation

        this.setVelocityX(0);

        //on fait apparaitre notre objet avec un petit delay, puis on lance l'animation
        //ceci a pour effet de décaler les animations pour ce même objet
    }
}