var StateMain = {


  create: function() {
      var worldEndX = 6120*1.4;
    game.world.setBounds(0, 0, worldEndX, 194);
    bg1 = createBG(0, 0, "BG1");
    bg2 = createBG(0, 0, "BG2");
    bg3 = createBG(0, 0, "BG3");

    raccoon = new Animal(game.world.centerX +450, game.world.centerY+85, 'raccoon',addRacoonAnimations,  "r", "miloSpeech", "speechButton", "https://petitloulou.com/products/milo-the-raccoon-pillow","https://petitloulou.com/collections/monsters", "yetiFamily");

    game.input.onDown.add(beginMoveBG, this);
    callbackID = this.game.input.addMoveCallback(moveBG, this);
    game.input.onUp.add(endMove, this);
    window.addEventListener('resize', function () {
      game.scale.setGameSize(window.innerWidth * 0.60, window.innerHeight * 0.40);
    });
  },

  update: function() {
      animalSizeListener(raccoon);
      activateSpeech(raccoon);
  }
}

function createBG(x, y, bg) {
  var bg = game.add.sprite(x, y, bg);
  bg.scale.setTo(1.4, 1.4);
  //bg.height = 400;
  //bg.anchor.setTo(0.5, 0.5);
  return bg;
}
