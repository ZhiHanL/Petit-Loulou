var bg1; //furthest back
var bg2;
window.onload = function() {

  var isMobile = navigator.userAgent.indexOf("Mobile");
  var gameWidth = window.innerWidth * 0.60;
  var gameHeight = window.innerHeight * 0.60;

  worldEndX = 6120*1.4;

  game = new Phaser.Game(gameWidth,271, Phaser.AUTO, "ph_game");
  inputX = 0;
  inputY = 0;

  var StateMain = {

    preload: function() {
      game.load.image('BG1', 'assets/BG1.png');
      game.load.image('BG2', 'assets/BG2.png');
      game.load.image('BG3', 'assets/BG3.png');
      //game.load.image('BG4', 'assets/BG4.png');
      game.load.spritesheet('raccoon', 'assets/raccoon.png', 406, 228);
    },

    create: function() {
      game.world.setBounds(0, 0, worldEndX, 194);
      bg1 = createBG(0, 0, "BG1");
      bg2 = createBG(0, 0, "BG2");
      bg3 = createBG(0, 0, "BG3");
      //bg4 = createBG(0,0,"BG4");
      raccoon = game.add.sprite(game.world.centerX +400, game.world.centerY+25, 'raccoon');
      raccoon.scale.setTo(0.7,0.7);
      raccoon.inputEnabled = true;
      addRacoonAnimations();
      raccoon.events.onInputDown.add(function(){
        inputX = game.input.mousePointer.x;
        inputY = game.input.mousePointer.y;
      });
      raccoon.events.onInputUp.add(function(){
        if(inputX == game.input.mousePointer.x && inputY == game.input.mousePointer.y){
            rListener();
        }
      });
      rIdleAnim = raccoon.animations.play('rIdle');


      game.input.onDown.add(beginMoveBG, this);
      game.input.onDown.add(rEnd, this);
      callbackID = this.game.input.addMoveCallback(moveBG, this);
      game.input.onUp.add(endMove, this);
    },

    update: function() {
      alignBG();
    }
  }


  function alignBG() {
    if (game.camera.x < 50) {
      if (bg1.x > 0) {
        bg1.x--;
      }
      if (bg2.x > 0) {
        bg2.x--;
      }
    }

    if (game.camera.x > worldEndX - 1500) {
      if (bg1.x + 3960 * 1.4 < worldEndX) {
        bg1.x++;
      }
      if (bg2.x + 5040 * 1.4 < worldEndX) {
        bg2.x++;
      }
    }
  }

  function createBG(x, y, bg) {
    var bg = game.add.sprite(x, y, bg);
    bg.scale.setTo(1.4, 1.4);
    //bg.height = 400;
    //bg.anchor.setTo(0.5, 0.5);
    return bg;
  }

  game.state.add("StateMain", StateMain);
  game.state.start("StateMain");
}
