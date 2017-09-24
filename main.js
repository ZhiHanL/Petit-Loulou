var game;
var useLandscape = true;

window.onload = function() {

  var isMobile = navigator.userAgent.indexOf("Mobile");
  var gameWidth = window.innerWidth * 0.80;
  var gameHeight = window.innerHeight * 0.4;
  if (isMobile > -1) {
    isMobile = true;
  } else {
    isMobile = false;
  }

  if (isMobile == false) {
    //desktop laptop
    if (useLandscape == true) {
      game = new Phaser.Game(window.innerWidth * 0.80, window.innerHeight * 0.4, Phaser.AUTO, "ph_game");
    } else {

      game = new Phaser.Game(480, 640, Phaser.AUTO, "ph_game");
    }

  } else {
    //mobile device
    game = new Phaser.Game(window.innerWidth * 0.80, window.innerHeight * 0.4, Phaser.AUTO, "ph_game");
  }

  var seal;
  var StateMain = {

    preload: function() {
      game.load.image('test', 'assets/Sebastian.jpg');
    },

    create: function() {
      seal = createSeal(game.world.centerX, game.world.centerY);
    },

    update: function() {

    }


  }

  function createSeal(x, y) {
    var seal = game.add.sprite(x, y, 'test');
    seal.anchor.setTo(0.5, 0.5);
    //seal.height = gameHeight;
    return seal;
  }

  game.state.add("StateMain", StateMain);
  game.state.start("StateMain");
}
