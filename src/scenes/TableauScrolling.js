class TableauScrolling extends Tableau{

    preload() {
        super.preload();
        this.load.image('star', 'assets/star.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('ciel', 'assets/ciel.png');
        this.load.image('plan-buisson', 'assets/plan-buisson.png')
        this.load.image('plan-troncs', 'assets/plan-troncs.png')
        this.load.image('plan-feuilleshaut', 'assets/plan-feuilleshaut.png');
        this.load.image('platform-vg', 'assets/platform-vg.png');
        this.load.image('platform-mg', 'assets/platform-mg.png');
        this.load.image('platform-vd', 'assets/platform-vd.png');
        this.load.image('platform-md', 'assets/platform-md.png');

    }
    create() {
        super.create();

        //on définit la taille du tableau
        let largeurDuTableau=4000;
        let hauteurDuTableau=448; //la hauteur est identique au cadre du jeu
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
        this.platforms.create(224, 428, 'ground').setScale(1).refreshBody();
        this.platforms.create(672, 428, 'ground').setScale(1).refreshBody();
        this.platforms.create(1008, 352, 'platform-vg').setScale(1).refreshBody();
        this.platforms.create(1008, 428, 'platform-mg').setScale(1).refreshBody();
        this.platforms.create(1232, 352, 'platform-vd').setScale(1).refreshBody();
        this.platforms.create(1232, 428, 'platform-md').setScale(1).refreshBody();
        this.platforms.create(1568, 428, 'ground').setScale(1).refreshBody();
        this.platforms.create(1904, 428, 'platform-vd').setScale(1).refreshBody();

        new Goomba(this,450,580);

        //étoiles
        //this.stars.create(300,0,"star").setCollideWorldBounds(true).setBounce(0.4);

        //physique
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.platforms, this.stars);

        //on change de ciel, on fait une tileSprite ce qui permet d'avoir une image qui se répètE
        this.ciel=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'ciel'
            );
        this.ciel.setOrigin(0,0);
        this.ciel.setScrollFactor(0);//fait en sorte que le ciel ne suive pas la caméra
    
        //on ajoute une deuxième couche de ciel

        this.planbuisson=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'plan-buisson'
            );
        this.planbuisson.setScrollFactor(0);
        this.planbuisson.setOrigin(0,0);
        this.planbuisson.alpha=1;
        //this.sky.tileScaleX=this.sky.tileScaleY=0.8;


        this.plantroncs=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'plan-troncs'
            );
        this.plantroncs.setScrollFactor(0);
        this.plantroncs.setOrigin(0,0);
        this.plantroncs.alpha=1;
        //this.sky.tileScaleX=this.sky.tileScaleY=0.8;

        this.planfeuilleshaut=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'plan-feuilleshaut'
            );
        this.planfeuilleshaut.setScrollFactor(0);
        this.planfeuilleshaut.setOrigin(0,0);
        this.planfeuilleshaut.alpha=1;

        //fait passer les éléments devant le ciel
        this.platforms.setDepth(10)
        this.stars.setDepth(10)
        this.player.setDepth(10)

    }

    update(){
        super.update();
        //le ciel se déplace moins vite que la caméra pour donner un effet paralax
        this.ciel.tilePositionX=this.cameras.main.scrollX*0.4;
        this.ciel.tilePositionY=this.cameras.main.scrollY*0.2;
        //le deuxième ciel se déplace moins vite pour accentuer l'effet

        this.planbuisson.tilePositionX=this.cameras.main.scrollX*0.6+500;
        this.planbuisson.tilePositionY=this.cameras.main.scrollY*0.1;

        this.plantroncs.tilePositionX=this.cameras.main.scrollX*0.8+500;
        this.plantroncs.tilePositionY=this.cameras.main.scrollY*0.1+30;

        this.planfeuilleshaut.tilePositionX=this.cameras.main.scrollX*1+500;
        this.planfeuilleshaut.tilePositionY=this.cameras.main.scrollY*0.1;



    }
}