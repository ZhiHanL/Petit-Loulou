var StateMain = {


  create: function() {
    var worldEndX = 6120 * 1.4;
    game.world.setBounds(0, 0, worldEndX, 271.6);
    bg1 = createBG(0, 0, "BG1");
    bg2 = createBG(0, 0, "BG2");
    bg3 = createBG(0, 0, "BG3");

    owl = new Animal(5900, game.world.centerY + 50, 'owl', 'owl', 'miloSpeech', 'speechButton', 'https://petitloulou.com/collections/baby-mobile/products/baby-musical-owl-mobile', 'https://petitloulou.com/pages/monster-photo-gallery', 'yetiFamily', 56, 258, 290, 327);
    bear = new Animal(game.world.centerX + 2100, game.world.centerY, 'bear', 'bear', 'bearSpeech', 'speechButton', 'https://petitloulou.com/products/milo-the-raccoon-pillow', 'https://petitloulou.com/pages/monster-photo-gallery', null, 133, 149, 210, 226);
    raccoon = new Animal(6800, game.world.centerY + 50, 'raccoon', 'raccoon', 'miloSpeech', 'speechButton', 'https://petitloulou.com/products/milo-the-raccoon-pillow', 'https://petitloulou.com/pages/monster-photo-gallery', 'yetiFamily', 294, 324, 340, 384);
    rCloud = new Animal(worldEndX - 1200, game.world.centerY + 10, "rainbowCloud", "rCloud", "miloSpeech", "speechButton", "https://petitloulou.com/collections/baby-mobile/products/cloud-baby-mobile-music-box", "https://petitloulou.com/pages/monster-photo-gallery", "yetiFamily", 150, 168, 275, 279);
    cloud = new Animal(worldEndX - 800, game.world.centerY + 10, "cloud", "cloud", "miloSpeech", "speechButton", "https://petitloulou.com/collections/decorative-pillows/products/cloud-pillow", "https://petitloulou.com/pages/monster-photo-gallery", "yetiFamily", 129, 191, 237, 261);
    cactus = new Animal(3800, game.world.centerY, "cactus", "cactus", "miloSpeech", "speechButton", "https://petitloulou.com/collections/rattle/products/cali-the-cactus-rattle?variant=29464593548", "https://petitloulou.com/pages/monster-photo-gallery", "yetiFamily", 139, 239, 343, 447);
    dino = new Animal(4900, game.world.centerY, 'dino', 'dino', 'miloSpeech', 'speechButton', 'https://petitloulou.com/collections/stuffed-animals/products/leo-the-dino-pillow', 'https://petitloulou.com/pages/monster-photo-gallery', 'yetiFamily', 71, 133, 207, 227);
    fish = new Animal(4520, game.world.centerY + 20, 'fish', 'fish', 'miloSpeech', 'speechButton', 'https://petitloulou.com/collections/stuffed-animals/products/melvin-the-fish', 'https://petitloulou.com/pages/monster-photo-gallery', 'yetiFamily', 180, 284, 327, 381);
    fox = new Animal(5300, game.world.centerY, 'fox', 'fox', 'miloSpeech', 'speechButton', 'https://petitloulou.com/collections/stuffed-animals/products/decorative-pillow-tulka-the-fox-pillow', 'https://petitloulou.com/pages/monster-photo-gallery', 'yetiFamily', 168, 232, 252, 284);
    giraffe = new Animal(4100, game.world.centerY, 'giraffe', 'giraffe', 'miloSpeech', 'speechButton', 'https://petitloulou.com/collections/rattle/products/rattle-giraffe', 'https://petitloulou.com/pages/monster-photo-gallery', 'yetiFamily', 246, 284, 364, 418);
    hedgehog = new Animal(5550, game.world.centerY, 'hedgehog', 'hedgehog', 'miloSpeech', 'speechButton', 'https://petitloulou.com/products/custom-hedgehog', 'https://petitloulou.com/pages/monster-photo-gallery', null, 169, 217, 339, 386);
    mBlue = new Animal(250, game.world.centerY - 10, 'mBlue', 'mBlue', 'miloSpeech', 'speechButton', 'https://petitloulou.com/collections/monsters/products/copy-of-stuffed-monster-blue-plush-monster-with-hornes-1', 'https://petitloulou.com/pages/monster-photo-gallery', 'yetiFamily', 112, 136, 188, 196);
    mLBlue = new Animal(600, game.world.centerY + 60, 'mLBlue', 'mLBlue', 'miloSpeech', 'speechButton', 'https://petitloulou.com/collections/monsters/products/make-your-own-monster-a-diy-plush-monster-kit-green', 'https://petitloulou.com/pages/monster-photo-gallery', 'yetiFamily', 100, 150, 198, 223);
    mobile = new Animal(worldEndX - 450, game.world.centerY + 20, 'mobile', 'mobile', 'miloSpeech', 'speechButton', 'https://petitloulou.com/collections/baby-mobile', 'https://petitloulou.com/pages/monster-photo-gallery', null, 62, null, null, null);

    game.input.onDown.add(beginMoveBG, this);
    callbackID = this.game.input.addMoveCallback(moveBG, this);
    game.input.onUp.add(endMove, this);
    window.addEventListener('resize', function() {
      game.scale.setGameSize(window.innerWidth * 0.60, window.innerHeight * 0.40);
    });
    bgMusic = game.add.audio('bgMusic');
    createSound();
  },
  update: function() {

    updateLoop(mobile);
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

function createSound() {
  bgMusic.play();
  bgMusic.loop = true;
  soundButton = game.add.sprite(20, 20, 'soundIcon');
  soundButton.animations.add('soundOff', [0], 24, false);
  soundButton.animations.add('soundOn', [1], 24, false);
  soundButton.play('soundOn');
  soundButton.inputEnabled = true;
  soundButton.fixedToCamera = true;
  soundButton.events.onInputDown.add(function() {
    if (soundButton.animations.currentAnim.name == 'soundOn') {
      bgMusic.pause();
      soundButton.play('soundOff');
    } else {
      bgMusic.play();
      soundButton.play('soundOn');
    }
  });
}
