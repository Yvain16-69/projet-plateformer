class TableauScrolling extends Tableau{

    preload() {
        super.preload();
        this.load.image('star', 'assets/star.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('ciel', 'assets/ciel.png');
        this.load.image('premier-plan', 'assets/premier-plan.png');
        this.load.image('deuxieme-plan', 'assets/deuxieme-plan.png')
        this.load.image('platform-vg', 'assets/platform-vg.png');
        this.load.image('platform-mg', 'assets/platform-mg.png');
        this.load.image('platform-vd', 'assets/platform-vd.png');
        this.load.image('platform-md', 'assets/platform-md.png');

    }
    create() {
        super.create();

        //on définit la taille du tableau
        let largeurDuTableau=4000;
        let hauteurDuTableau=600; //la hauteur est identique au cadre du jeu
        this.cameras.main.setBounds(0, 0, largeurDuTableau, hauteurDuTableau);
        this.physics.world.setBounds(0, 0, largeurDuTableau,  hauteurDuTableau);

        this.cameras.main.startFollow(this.player, false, 0.05, 0.05);

        //quelques étoiles et plateformes qui vont avec
        this.stars=this.physics.add.group();
        this.platforms=this.physics.add.staticGroup();

        this.physics.add.overlap(this.player, this.stars, this.ramasserEtoile, null, this);
        this.physics.add.collider(this.player,this.platforms);

        // placement des pateformes
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(224, 580, 'ground').setScale(1).refreshBody();
        this.platforms.create(672, 580, 'ground').setScale(1).refreshBody();
        this.platforms.create(1008, 500, 'platform-vg').setScale(1).refreshBody();
        this.platforms.create(1008, 580, 'platform-mg').setScale(1).refreshBody();
        this.platforms.create(1232, 500, 'platform-vd').setScale(1).refreshBody();
        this.platforms.create(1232, 580, 'platform-md').setScale(1).refreshBody();
        this.platforms.create(1568, 580, 'ground').setScale(1).refreshBody();
        this.platforms.create(1904, 580, 'platform-vd').setScale(1).refreshBody();

        //étoiles
        //this.stars.create(300,0,"star").setCollideWorldBounds(true).setBounce(0.4);

        //physique
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.platforms, this.stars);

        //on change de ciel, on fait une tileSprite ce qui permet d'avoir une image qui se répètE
        this.ciel=this.add.tileSprite(
            0,
            21,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'ciel'
            );
        this.ciel.setOrigin(0,0);
        this.ciel.setScrollFactor(0);//fait en sorte que le ciel ne suive pas la caméra
    
        //on ajoute une deuxième couche de ciel
        this.deuxiemeplan=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'deuxieme-plan'
            );
        this.deuxiemeplan.setScrollFactor(0);
        this.deuxiemeplan.setOrigin(0,0);
        this.deuxiemeplan.alpha=1;
        //this.sky.tileScaleX=this.sky.tileScaleY=0.8;

        this.premierplan=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'premier-plan'
            );
        this.premierplan.setScrollFactor(0);
        this.premierplan.setOrigin(0,0);
        this.premierplan.alpha=1;

        //fait passer les éléments devant le ciel
        this.platforms.setDepth(10)
        this.stars.setDepth(10)
        this.player.setDepth(10)

    }

    update(){
        super.update();
        //le ciel se déplace moins vite que la caméra pour donner un effet paralax
        this.ciel.tilePositionX=this.cameras.main.scrollX*0.6;
        this.ciel.tilePositionY=this.cameras.main.scrollY*0.2;
        //le deuxième ciel se déplace moins vite pour accentuer l'effet
        this.premierplan.tilePositionX=this.cameras.main.scrollX*0.3+500;
        this.premierplan.tilePositionY=this.cameras.main.scrollY*0.1+30;

        this.deuxiemeplan.tilePositionX=this.cameras.main.scrollX*0.5+500;
        this.deuxiemeplan.tilePositionY=this.cameras.main.scrollY*0.1+30;

    }
}