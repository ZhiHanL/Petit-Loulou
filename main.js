window.onload = function() {

  var isMobile = navigator.userAgent.indexOf("Mobile");
  var gameWidth = window.innerWidth * 0.80;
  var gameHeight = window.innerHeight * 0.60;


  var game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, "ph_game");

  var seal; //temp image

  //Variables for Scrolling BG
  var timeConstantScroll = 500;
  var pressedDown = false;
  var dragging = false;
  var startX = 0;
  var bgVelocity = 0;
  var callbackID = 0;
  var timestamp = 0;
  var now = 0;
  var amplitudeX = 0;
  var targetX = 0;

  var StateMain = {

    preload: function() {
      game.load.image('test', 'assets/Sebastian.jpg');
    },

    create: function() {
      seal = createSeal(game.world.centerX, game.world.centerY);
      game.input.onDown.add(beginMoveBG, this);
      callbackID = this.game.input.addMoveCallback(moveBG, this);
      game.input.onUp.add(endMove, this);

    },

    update: function() {
      scrollUpdate();
    }
  }

  /**
   * Event triggered when a pointer is pressed down, resets the value of variables.
   */
  function beginMoveBG() {
    //variables for scrolling bg
    pressedDown = true;
    startX = game.input.x;
    bgVelocity = 0;
    timestamp = Date.now();
    amplitudeX = 0;;
  }

  /**
   * Event triggered when the activePointer receives a DOM move event such as a mousemove or touchmove.
   * The camera moves according to the movement of the pointer, calculating the velocity.
   */
  function moveBG(pointer, x, y) {
    if (!pressedDown) return;
    //calculate time difference
    now = Date.now();
    var elapsed = now - timestamp;
    timestamp = Date.now();

    var delta = x - startX;
    if (delta !== 0) dragging = true;
    startX = x;
    bgVelocity = 0.8 * (1000 * delta / (1 + elapsed)) + 0.2 * bgVelocity;
    seal.x += delta;


  }

  /**
   * Event triggered when a pointer is released, calculates the automatic scrolling.
   */

   function endMove() {
     pressedDown = false;
     now = Date.now();
     if (bgVelocity > 10 || bgVelocity < -10) {
       amplitudeX = 0.8 * bgVelocity;
       targetX = Math.round(seal.x + amplitudeX);
     }
  }

  function scrollUpdate() {
    elapsed = Date.now() - timestamp;
    if (amplitudeX != 0) {
      var delta = -amplitudeX * Math.exp(-elapsed / timeConstantScroll);
      if (delta > 0.5 || delta < -0.5) {
        seal.x = targetX + delta;
      }
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
