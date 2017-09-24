window.onload = function() {

  var isMobile = navigator.userAgent.indexOf("Mobile");
  var gameWidth = window.innerWidth * 0.80;
  var gameHeight = window.innerHeight * 0.60;


  var game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, "ph_game");

  var seal; //temp image

  //Variables for Scrolling BG
  var pressedDown = false;
  var dragging = false;
  var startX = 0;
  var bgVelocity = 0;
  var callbackID = 0;
  var timestamp = 0;
  var now = 0;

  var StateMain = {

    preload: function() {
      game.load.image('test', 'assets/Sebastian.jpg');
    },

    create: function() {
      seal = createSeal(game.world.centerX, game.world.centerY);
      game.input.onDown.add(this.beginMoveBG, this);
      //ssgame.input.addMoveCallback(this.moveBG, this.game);
      game.input.onUp.add(this.endMove, this);

    },

    update: function() {

    }
  }

  /**
  * Event triggered when a pointer is pressed down, resets the value of variables.
  */
  function beginMoveBG() {
    //variables for scrolling bg
    this.pressedDown = true;
    this.startX = game.input.x;
    this.bgVelocity = 0;
    this.timestamp = Date.now();
  }

  /**
  * Event triggered when the activePointer receives a DOM move event such as a mousemove or touchmove.
  * The camera moves according to the movement of the pointer, calculating the velocity.
  */
  function moveBG(pointer, x, y) {
    if(!this.pressedDown) return;

    //calculate time difference
    this.now = Date.now();
    var elapsed = this.now - this.timestamp;
    this.timestamp = this.now();

    var delta = x - this.startX;
    if (delta !== 0) this.dragging = true;
    this.startX = x;
    this.bgVelocity = 0.8 * (1000 * delta / (1 + elapsed)) + 0.2 * this.velocityX;
    seal.x -=delta;
  }

  function endMove(){

  }

  function createSeal(x, y) {
    var seal = game.add.sprite(x, y, 'test');
    seal.anchor.setTo(0.5, 0.5);
    return seal;
  }

  game.state.add("StateMain", StateMain);
  game.state.start("StateMain");
}
