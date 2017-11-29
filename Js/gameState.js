var StateMain = {


  create: function() {
    var worldEndX = 6120 * 1.4;
    game.world.setBounds(0, 0, worldEndX, 271.6);
    bg1 = createBG(0, 0, "BG1");
    bg2 = createBG(0, 0, "BG2");
    bg3 = createBG(0, 0, "BG3");

    cloud = new Animal(worldEndX - 800, game.world.centerY + 10, "cloud", "cloud", "miloSpeech", "speechButton", "https://petitloulou.com/products/milo-the-raccoon-pillow", "https://petitloulou.com/pages/monster-photo-gallery", "yetiFamily", 129, 191, 237, 261);
    rCloud = new Animal(worldEndX - 1200, game.world.centerY + 10, "rainbowCloud", "rCloud", "miloSpeech", "speechButton", "https://petitloulou.com/products/milo-the-raccoon-pillow", "https://petitloulou.com/pages/monster-photo-gallery", "yetiFamily", 150, 168, 275, 279);
    cactus = new Animal(3800, game.world.centerY, "cactus", "cactus", "miloSpeech", "speechButton", "https://petitloulou.com/products/milo-the-raccoon-pillow", "https://petitloulou.com/pages/monster-photo-gallery", "yetiFamily", 139, 239, 343, 447);
    owl = new Animal(5900, game.world.centerY+50, 'owl', 'owl', 'miloSpeech', 'speechButton', 'https://petitloulou.com/products/milo-the-raccoon-pillow', 'https://petitloulou.com/pages/monster-photo-gallery', 'yetiFamily', 56, 258, 290, 327);
    bear = new Animal(game.world.centerX + 2100, game.world.centerY, 'bear', 'bear', 'miloSpeech', 'speechButton', 'https://petitloulou.com/products/milo-the-raccoon-pillow', 'https://petitloulou.com/pages/monster-photo-gallery', 'yetiFamily', 133, 149, 210, 226);
    dino = new Animal(4900, game.world.centerY, 'dino', 'dino', 'miloSpeech', 'speechButton', 'https://petitloulou.com/products/milo-the-raccoon-pillow', 'https://petitloulou.com/pages/monster-photo-gallery', 'yetiFamily', 71, 133, 207, 227);
    fish = new Animal(4520, game.world.centerY+20, 'fish', 'fish', 'miloSpeech', 'speechButton', 'https://petitloulou.com/products/milo-the-raccoon-pillow', 'https://petitloulou.com/pages/monster-photo-gallery', 'yetiFamily', 180, 284, 327, 381);
    fox = new Animal(5300, game.world.centerY, 'fox', 'fox', 'miloSpeech', 'speechButton', 'https://petitloulou.com/products/milo-the-raccoon-pillow', 'https://petitloulou.com/pages/monster-photo-gallery', 'yetiFamily', 168, 232, 252, 284);
    giraffe = new Animal(4100, game.world.centerY, 'giraffe', 'giraffe', 'miloSpeech', 'speechButton', 'https://petitloulou.com/products/milo-the-raccoon-pillow', 'https://petitloulou.com/pages/monster-photo-gallery', 'yetiFamily', 246, 284, 364, 418);
    hedgehog = new Animal(5550, game.world.centerY, 'hedgehog', 'hedgehog', 'miloSpeech', 'speechButton', 'https://petitloulou.com/products/milo-the-raccoon-pillow', 'https://petitloulou.com/pages/monster-photo-gallery', 'yetiFamily', 169, 217, 339, 386);
    mBlue = new Animal(250, game.world.centerY-10, 'mBlue', 'mBlue', 'miloSpeech', 'speechButton', 'https://petitloulou.com/products/milo-the-raccoon-pillow', 'https://petitloulou.com/pages/monster-photo-gallery', 'yetiFamily', 112, 136, 188, 196);
    mLBlue = new Animal(600, game.world.centerY+60, 'mLBlue', 'mLBlue', 'miloSpeech', 'speechButton', 'https://petitloulou.com/products/milo-the-raccoon-pillow', 'https://petitloulou.com/pages/monster-photo-gallery', 'yetiFamily', 100, 150, 198, 223);
    raccoon = new Animal(6800, game.world.centerY+50, 'raccoon', 'raccoon', 'miloSpeech', 'speechButton', 'https://petitloulou.com/products/milo-the-raccoon-pillow', 'https://petitloulou.com/pages/monster-photo-gallery', 'yetiFamily', 294, 324, 340, 384);
    game.input.onDown.add(beginMoveBG, this);
    callbackID = this.game.input.addMoveCallback(moveBG, this);
    game.input.onUp.add(endMove, this);
    window.addEventListener('resize', function() {
      game.scale.setGameSize(window.innerWidth * 0.60, window.innerHeight * 0.40);
    });
  },
  update: function() {

    updateLoop(fox);
    updateLoop(cloud);
    updateLoop(rCloud);
    updateLoop(cactus);
    updateLoop(bear);
    updateLoop(fish);
    updateLoop(dino);
    updateLoop(giraffe);
    updateLoop(hedgehog);
    updateLoop(mBlue);
    updateLoop(mLBlue);
    updateLoop(owl);
    updateLoop(raccoon);
  }
}

function createBG(x, y, bg) {
  var bg = game.add.sprite(x, y, bg);
  bg.scale.setTo(1.4, 1.4);
  //bg.height = 400;
  //bg.anchor.setTo(0.5, 0.5);
  return bg;
}
