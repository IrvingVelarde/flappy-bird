/* Inicializamos una variable llamda juego y despues en los argumentos declaramos: ANCHO, ALTO, COMPILADOR DEL JUEGO O RENDER Y  */
//var game = new Phaser.Game(800,400,Phaser.AUTO,'block_game');
var backgroundgame;
var flatgame;
var button;
var flappy;
//var keyright;
var cursors;
var player;
var game = new Phaser.Game(370,550,Phaser.Canvas,'block_game');

var StateMain = {
    /* Carga todos los recursos */
    preload: function () {
        //game.stage.backgroundColor = "#00804d";
        //Cargamos la imagen el primer parametro es el nombre que le asignaremos y el segundo la ruta de donde estamos llamando a la imagen
        game.load.image('background','images/background-day.png');
        game.load.image('flat','images/flat.png');
        //game.load.image('yellowbird','images/yellowbird-downflap.png');
        //game.load.image('playbutton','images/play-button.png');
        //game.load.spritesheet('flyflappy','images/fly-flappy.png',36,26);
        game.load.spritesheet('playertalk','images/sprite_player.png',51.375,72.5);
    },

    /* Mostramos en pantalla */
    create: function () {
        // Mostramos en pantalla la imagen en la posicion (x1,y1) = (0,0) (x2,y2)=(370,550)
        backgroundgame = game.add.tileSprite(0,0,370,550,'background');
        flatgame       = game.add.tileSprite(0,440,370,200,'flat');
        // Carga de una imagen en el juego
        //flappy = game.add.sprite(100,100,'flyflappy');
        //flappy.frame = 1;
        ///flappy.animations.add('fly',[0,1,2],10,true);
        player = game.add.sprite(game.width/2,game.height/2,'playertalk');
        //Capturamos la tecla que esta siendo presionada
        cursors = game.input.keyboard.createCursorKeys();
        // Nos permite iniciar y dar fisica al personaje como: gravedad,frontera.
        game.physics.startSystem(Phaser.Physics.ARCADE);
        // Nos permite añadir la frontera del personaje y fisicas que se habilito
        //game.physics.arcade.enable(flappy);
        // Nos permite poner limites(que no se salga del limite establecido) al personaje
        //flappy.body.collideWorldBounds = true;
        //keyright = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        //flappy = game.add.sprite(game.width/2,game.height/2,'yellowbird');
        //flappy.anchor.setTo(0.5,0.5);
        //flappy.scale.setTo(-1,1);
        //game.add.sprite(185,275,'playbutton');
        //button = game.add.sprite(185,275,'playbutton');
        //button = game.add.sprite(game.width/2,game.height/2,'playbutton');
        // Punto de apoyo para una imgagen
        //button.anchor.setTo(0.5,0.5);
        //button.anchor.setTo(0.5,0.5);
    },

    /* Animamos el juego*/
    update: function () {
        //backgroundgame.tilePosition.x = backgroundgame.tilePosition.x - 1 ;
        //backgroundgame.tilePosition.x -= 1 ;
        //flatgame.tilePosition.x -= 1 ;
        //flappy.animations.play('fly');
        if(cursors.right.isDown){
            //flappy.position.x += 1;
        }
        if(cursors.left.isDown){
            //flappy.position.x -= 1;
        }
        if(cursors.up.isDown){
            //flappy.position.y -= 1;
        }
        if(cursors.down.isDown){
            //flappy.position.y += 1;
        }
        /* if(keyright.isDown){
            //flappy.angle = 90;
            flappy.position.x+=1;
        } */



    }
};

game.state.add('main',StateMain);
game.state.start('main');