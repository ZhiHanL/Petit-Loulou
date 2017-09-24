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
      game = new Phaser.Game(window.innerWidth * 0.80, window.innerHeight * 0.6, Phaser.AUTO, "ph_game");
    } else {

      game = new Phaser.Game(480, 640, Phaser.AUTO, "ph_game");
    }

  } else {
    //mobile device
    game = new Phaser.Game(window.innerWidth * 0.80, window.innerHeight * 0.6, Phaser.AUTO, "ph_game");
  }

  var seal;
  var buttonRight;
  var buttonLeft;
  var buttonRightDown = false;
  var buttonLeftDown = false;
  var StateMain = {

    preload: function() {
      game.load.image('test', 'assets/Sebastian.jpg');
      game.load.image('scrollButton', 'assets/buttons_PNG32.png')
    },

    create: function() {
      seal = createSeal(game.world.centerX, game.world.centerY);
      buttonLeft = game.add.button(gameWidth - 20, game.world.centerY, 'scrollButton');
      buttonRight = game.add.button(20, game.world.centerY, 'scrollButton');

      buttonLeft.onInputDown.add(downLeft, this);
      buttonLeft.onInputUp.add(upLeft, this);
      buttonRight.onInputDown.add(downRight, this);
      buttonRight.onInputup.add(upRight, this);
    },

    update: function() {
        moveBG();
    }


  }

  function downLeft() {
    buttonLeftDown = true;
  }

  function downRight() {
    buttonRightDown = true;

  }

  function upLeft() {
    buttonLeftDown = false;
  }

  function upRight() {
    buttonRightDown = false;
  }

  function moveBG() {
    if (buttonLeftDown) {
      seal.x = seal.x - 1;
    } else if (buttonRightDown) {
      seal.x = seal.x + 1;
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
