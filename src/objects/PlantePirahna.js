class PlantePirahna extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {
        super(scene, x, y, "plante-pirahna");
        //pas de gravité
        this.body.allowGravity=false;

        //gestion de la taille
        this.setDisplaySize(64,104);

        //on réduit un peu la zone de hit
        this.setBodySize(this.body.width-400,this.body.height-200);
        this.setOffset(250, 250);

        //définir les propriété que l'on va utiliser dans notre animation

        // X
        
    }

}