var game;
var useLandscape = true;

window.onload = function() {

  var isMobile = navigator.userAgent.indexOf("Mobile");
  var gameWidth = window.innerWidth * 0.80;
  var gameHeight = window.innerHeight * 0.60;
  if (isMobile > -1) {
    isMobile = true;
  } else {
    isMobile = false;
  }

  if (isMobile == false) {
    //desktop laptop
    if (useLandscape == true) {
      game = new Phaser.Game(gameWidth,gameHeight, Phaser.AUTO, "ph_game");
    } else {

      game = new Phaser.Game(480, 640, Phaser.AUTO, "ph_game");
    }

  } else {
    //mobile device
    game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, "ph_game");
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
      buttonLeft = game.add.button(gameWidth+100, game.world.centerY, 'scrollButton');
      buttonLeft.angle = 90;
      buttonRight = game.add.button(100, game.world.centerY, 'scrollButton');
      buttonRight.angle = 90;

      buttonLeft.onInputDown.add(downLeft, this);
      buttonLeft.onInputUp.add(upLeft, this);
      buttonRight.onInputDown.add(downRight, this);
      buttonRight.onInputUp.add(upRight, this);
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
