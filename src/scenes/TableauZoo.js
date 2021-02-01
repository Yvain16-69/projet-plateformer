class TableauZoo extends Tableau{

    preload() {
        super.preload();
        this.load.image('star', 'assets/star.png');
        this.load.image('goomba', 'assets/goomba.png');
        this.load.image('bob-omb', 'assets/bob-omb.png');
        this.load.image('monster-fly', 'assets/monster-fly.png');
        this.load.image('plante-pirahna', 'assets/plante-pirahna.png');
        this.load.image('thwomp', 'assets/thwomp.png');

    }
    create() {
        super.create();

        //quelques étoiles
        let largeur=64*2;
        this.stars=this.physics.add.group();
        for(let posX=largeur/2;posX<largeur*7;posX+=largeur){
            this.stars.create(posX ,0,"star");
        }
        this.stars.children.iterate(function (child) {
            child.setBounce(1);
            child.setGravity(1);
            child.setCollideWorldBounds(true);
            child.setVelocity(0,Phaser.Math.Between(-100, 100));
            child.setMaxVelocity(0,500);
        });
        this.physics.add.overlap(this.player, this.stars, this.ramasserEtoile, null, this);

        //notre monstre
    
        new MonsterFly(this,400,100);
        new Goomba(this,750,420);
        new BobOmb(this,400,415);
        new Thwomp(this,85,40);
        new Thwomp(this,170,40);
        new PlantePirahna(this,300,400);
    }

}