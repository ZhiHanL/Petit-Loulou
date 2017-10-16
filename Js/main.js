var bg1; //furthest back
var bg2;
window.onload = function() {

  var isMobile = navigator.userAgent.indexOf("Mobile");
  var gameWidth = window.innerWidth * 0.80;
  var gameHeight = window.innerHeight * 0.60;


  game = new Phaser.Game(gameWidth, 243, Phaser.AUTO, "ph_game");


  var StateMain = {

    preload: function() {
      game.load.image('BG1', 'assets/BG1.png');
      game.load.image('BG2', 'assets/BG2.png');
      game.load.image('BG3', 'assets/BG3.png');
      //game.load.image('BG4', 'assets/BG4.png');
      game.load.spritesheet('raccoon', 'assets/raccoon.jpg', 406, 228);
    },

    create: function() {
      game.world.setBounds(0, 0, 6120, 194);
      bg1 = createBG(0,0, "BG1");
      bg2 = createBG(0,0, "BG2");
      bg3 = createBG(0,0,"BG3");
      //bg4 = createBG(0,0,"BG4");
      raccoon = game.add.sprite(game.world.centerX+10, game.world.centerY-50, 'raccoon');
      addRacoonAnimations();
      raccoon.animations.play('rIdle');


      game.input.onDown.add(beginMoveBG, this);
      callbackID = this.game.input.addMoveCallback(moveBG, this);
      game.input.onUp.add(endMove, this);

    },

    update: function() {
      scrollUpdate();
    }
  }



  function createBG(x, y, bg) {
    var bg = game.add.sprite(x, y, bg);
    bg.scale.setTo(1.25,1.25);
    //bg.height = 400;
    //bg.anchor.setTo(0.5, 0.5);
    return bg;
  }

  function checkBGInBounds(){

  }
  game.state.add("StateMain", StateMain);
  game.state.start("StateMain");
}