class TableauScrolling extends Tableau{

    preload() {
        super.preload();
        this.load.image('star', 'assets/star.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('sky', 'assets/sky.png');
        this.load.image('sky-2', 'assets/sky-2.png');
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
        this.platforms.create(224, 560, 'ground').setScale(1).refreshBody();
        this.platforms.create(672, 560, 'ground').setScale(1).refreshBody();
        this.platforms.create(1008, 480, 'platform-vg').setScale(1).refreshBody();
        this.platforms.create(1008, 560, 'platform-mg').setScale(1).refreshBody();
        this.platforms.create(1232, 480, 'platform-vd').setScale(1).refreshBody();
        this.platforms.create(1232, 560, 'platform-md').setScale(1).refreshBody();
        this.platforms.create(1568, 560, 'ground').setScale(1).refreshBody();
        this.platforms.create(1904, 560, 'platform-vd').setScale(1).refreshBody();

        //étoiles
        //this.stars.create(300,0,"star").setCollideWorldBounds(true).setBounce(0.4);

        //physique
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.platforms, this.stars);

        //on change de ciel, on fait une tileSprite ce qui permet d'avoir une image qui se répètE
        this.sky=this.add.tileSprite(
            0,
            21,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'sky'
            );
        this.sky.setOrigin(0,0);
        this.sky.setScrollFactor(0);//fait en sorte que le ciel ne suive pas la caméra
    
        //on ajoute une deuxième couche de ciel
            this.sky2=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'sky-2'
            );
        this.sky2.setScrollFactor(0);
        this.sky2.setOrigin(0,0);
        this.sky2.alpha=1;
        //this.sky.tileScaleX=this.sky.tileScaleY=0.8;

        //fait passer les éléments devant le ciel
        this.platforms.setDepth(10)
        this.stars.setDepth(10)
        this.player.setDepth(10)

    }

    update(){
        super.update();
        //le ciel se déplace moins vite que la caméra pour donner un effet paralax
        this.sky.tilePositionX=this.cameras.main.scrollX*0.6;
        this.sky.tilePositionY=this.cameras.main.scrollY*0.2;
        //le deuxième ciel se déplace moins vite pour accentuer l'effet
        this.sky2.tilePositionX=this.cameras.main.scrollX*0.3+500;
        this.sky2.tilePositionY=this.cameras.main.scrollY*0.1+30;

    }
}