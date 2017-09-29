window.onload = function() {

  var isMobile = navigator.userAgent.indexOf("Mobile");
  var gameWidth = window.innerWidth * 0.80;
  var gameHeight = window.innerHeight * 0.60;


  game = new Phaser.Game(900, 400, Phaser.AUTO, "ph_game");

  var bg1; //temp image

  var StateMain = {

    preload: function() {
      game.load.image('BG1', 'assets/BG1.jpg');
      game.load.spritesheet('raccoon', 'assets/raccoon.jpg', 406, 228);
    },

    create: function() {
      game.world.setBounds(0, 0, 1160, 400);
      bg1 = createBG(game.world.centerX, game.world.centerY);
      raccoon = game.add.sprite(game.world.centerX, game.world.centerY, 'raccoon');
      addRacoonAnimations();
      raccoon.animations.play('idle');
      game.input.onDown.add(beginMoveBG, this);
      callbackID = this.game.input.addMoveCallback(moveBG, this);
      game.input.onUp.add(endMove, this);

    },

    update: function() {
      scrollUpdate();
    }
  }



  function createBG(x, y) {
    var bg = game.add.sprite(x, y, 'BG1');
    bg.height = 400;
    bg.width = 1160;
    bg.anchor.setTo(0.5, 0.5);
    return bg;
  }

  function checkBGInBounds(){

  }
  game.state.add("StateMain", StateMain);
  game.state.start("StateMain");
}
