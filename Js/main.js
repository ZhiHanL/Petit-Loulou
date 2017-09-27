window.onload = function() {

  var isMobile = navigator.userAgent.indexOf("Mobile");
  var gameWidth = window.innerWidth * 0.80;
  var gameHeight = window.innerHeight * 0.60;


  game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, "ph_game");

  var seal; //temp image

  var StateMain = {

    preload: function() {
      game.load.image('test', 'assets/Sebastian.jpg');
    },

    create: function() {
      game.world.setBounds(0, 0, gameWidth+2000, gameHeight);
      seal = createSeal(game.world.centerX, game.world.centerY);
      game.input.onDown.add(beginMoveBG, this);
      callbackID = this.game.input.addMoveCallback(moveBG, this);
      game.input.onUp.add(endMove, this);

    },

    update: function() {
      scrollUpdate();
    }
  }



  function createSeal(x, y) {
    var seal = game.add.sprite(x, y, 'test');
    seal.anchor.setTo(0.5, 0.5);
    return seal;
  }

  function checkBGInBounds(){

  }
  game.state.add("StateMain", StateMain);
  game.state.start("StateMain");
}
