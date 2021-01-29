class TableauZoo extends Tableau{

    preload() {
        super.preload();
        this.load.image('star', 'assets/star.png');
        this.load.image('goomba', 'assets/goomba.png');
        this.load.image('monster-violet', 'assets/monster-violet');
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
        this.monstre=this.physics.add.sprite(850,this.sys.canvas.height-70,"goomba");
        this.monstre.setOrigin(0,0);
        this.monstre.setDisplaySize(64,64);
        this.monstre.setCollideWorldBounds(true);
        this.monstre.setBounce(1);
        this.monstre.setVelocityX(80);
        this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);

        this.monstre=this.physics.add.sprite(850,this.sys.canvas.height-70,"monster-violet");
        this.monstre.setOrigin(0,0);
        this.monstre.setDisplaySize(64,64);
        this.monstre.setCollideWorldBounds(true);
        this.monstre.setBounce(1);
        this.monstre.setVelocityX(50);
        this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);

        this.monstre=this.physics.add.sprite(220,this.sys.canvas.height-70,"plante-pirahna");
        this.monstre.setOrigin(0,0);
        this.monstre.setDisplaySize(48, 90);
        this.monstre.setCollideWorldBounds(true);
        this.monstre.setBounce(0);
        this.monstre.setVelocityX(0);
        this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);

        this.monstre=this.physics.add.sprite(270,this.sys.canvas.height-70,"thwomp");
        this.monstre.setOrigin(3,7);
        this.monstre.setDisplaySize(64, 80);
        this.monstre.setCollideWorldBounds(false);
        this.monstre.setBounce(0);
        this.monstre.setVelocityX(0);
        this.monstre.setVelocityY(-100);
        this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);

        this.monstre=this.physics.add.sprite(320,this.sys.canvas.height-70,"thwomp");
        this.monstre.setOrigin(3,7);
        this.monstre.setDisplaySize(64, 80);
        this.monstre.setCollideWorldBounds(false);
        this.monstre.setBounce(0);
        this.monstre.setVelocityX(0);
        this.monstre.setVelocityY(50);
        this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);

    
        new MonsterFly(this,400,100);
    }

}
