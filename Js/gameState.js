var StateMain = {


  create: function() {
    var worldEndX = 6120 * 1.4;
    game.world.setBounds(0, 0, worldEndX, 271.6);
    bg1 = createBG(0, 0, "BG1");
    bg2 = createBG(0, 0, "BG2");
    bg3 = createBG(0, 0, "BG3");


    mBlue = new Animal(250, game.world.centerY - 10,100,'mBlue', 'mBlue', 'blueSpeech', 'speechButton', 'https://petitloulou.com/collections/monsters/products/copy-of-stuffed-monster-blue-plush-monster-with-hornes-1', 'https://petitloulou.com/pages/monster-photo-gallery',   112, 136, 188, 196);
    mLBlue = new Animal(600, game.world.centerY + 60, 0,'mLBlue', 'mLBlue', 'lightBlueSpeech', 'speechButton', 'https://petitloulou.com/collections/monsters/products/make-your-own-monster-a-diy-plush-monster-kit-green', 'https://petitloulou.com/pages/monster-photo-gallery',   100, 150, 198, 223);
    yellow = new Animal(860, game.world.centerY + 10, 0,'yellow', 'yellow', 'yellowSpeech', 'speechButton', 'https://petitloulou.com/collections/monsters/products/make-your-own-monster-a-diy-plush-monster-kit-green', 'https://petitloulou.com/pages/monster-photo-gallery',   64, 68, 105, 107);
    orange = new Animal(1400, game.world.centerY - 20, 0,'redOrange', 'redOrange', 'redOrangeSpeech', 'speechButton', 'https://petitloulou.com/collections/monsters/products/make-your-own-monster-a-diy-plush-monster-kit-green', 'https://petitloulou.com/pages/monster-photo-gallery',   68 , 82, 94, 114);
    gray = new Animal(1800, game.world.centerY +20, 0,'gray', 'gray', 'graySpeech', 'speechButton', 'https://petitloulou.com/collections/monsters/products/make-your-own-monster-a-diy-plush-monster-kit-green', 'https://petitloulou.com/pages/monster-photo-gallery',   132, 204, 312, 338);
    dino = new Animal(2200, game.world.centerY, 120,'dino', 'dino', 'dinoSpeech', 'speechButton', 'https://petitloulou.com/collections/stuffed-animals/products/leo-the-dino-pillow', null,   71, 133, 207, 227);
    octo = new Animal(2950, game.world.centerY, 0,'octo', 'octo', 'octopusSpeech', 'speechButton', 'https://petitloulou.com/', null,   235 , 263, 285, 309);
    cactus = new Animal(3500, game.world.centerY, 80,"cactus", "cactus", "cactusSpeech", "speechButton", "https://petitloulou.com/collections/rattle/products/cali-the-cactus-rattle?variant=29464593548", null, 139, 239, 343, 447);
    giraffe = new Animal(4000, game.world.centerY,55,'giraffe', 'giraffe', 'giraffeSpeech', 'speechButton', 'https://petitloulou.com/collections/rattle/products/rattle-giraffe', null,   246, 284, 364, 418);
    fish = new Animal(4520, game.world.centerY + 20, 220,'fish', 'fish', 'fishSpeech', 'speechButton', 'https://petitloulou.com/collections/stuffed-animals/products/melvin-the-fish', null,   180, 284, 327, 381);
    fox = new Animal(4790, game.world.centerY + 30, - 30,'fox', 'fox', 'foxSpeech', 'speechButton', 'https://petitloulou.com/collections/stuffed-animals/products/decorative-pillow-tulka-the-fox-pillow',null,   168, 232, 252, 284);
    fox.sprite.scale.setTo(0.7, 0.7);
    hedgehog = new Animal(5160, game.world.centerY, 150,'hedgehog', 'hedgehog', 'hedgehogSpeech', 'speechButton', 'https://petitloulou.com/products/custom-hedgehog', null, 169, 217, 339, 386);
    hedgehog.sprite.scale.setTo(0.8, 0.8);
    owl = new Animal(5600, game.world.centerY, 50,'owl', 'owl', 'owlSpeech', 'speechButton', 'https://petitloulou.com/collections/baby-mobile/products/baby-musical-owl-mobile', null,   56, 258, 290, 309);
    yeti = new Animal(6100, game.world.centerY + 20, 0,'yeti', 'yeti', 'yetiSpeech', 'speechButton', 'https://petitloulou.com/collections/monsters', 'https://petitloulou.com/pages/monster-photo-gallery',   56 , 61, 139, 147);
    bear = new Animal(6400, game.world.centerY + 10, 100,'bear', 'bear', 'bearSpeech', 'speechButton', 'https://petitloulou.com/',  null, 133, 156, 207, 226);
    raccoon = new Animal(6780, game.world.centerY + 20, 150,'raccoon', 'raccoon', 'raccoonSpeech', 'speechButton', 'https://petitloulou.com/products/milo-the-raccoon-pillow', null,  294, 324, 340, 383);
    rCloud = new Animal(worldEndX - 1200, game.world.centerY + 10,0, "rainbowCloud", "rCloud", "cloudRainSpeech", "speechButton", "https://petitloulou.com/collections/baby-mobile/products/cloud-baby-mobile-music-box", null, 150, 168, 275, 279);
    mobile = new Animal(worldEndX - 800, game.world.centerY + 20, 0,'mobile', 'mobile', 'mobileSpeech', 'speechButton', 'https://petitloulou.com/collections/baby-mobile', null, null, 62, null, null, null);
    cloud = new Animal(worldEndX - 450, game.world.centerY + 10, 0,"cloud", "cloud", "cloudStarsSpeech", "speechButton", "https://petitloulou.com/collections/decorative-pillows/products/cloud-pillow", null, 129, 191, 237, 261);
    moon = new Animal(worldEndX - 150, game.world.centerY, 0,'moon', 'moon', 'moonSpeech', 'speechButton', 'https://petitloulou.com/products/moony-decorative-pillow', null,   116, 140, 221, 225);



    game.input.onDown.add(beginMoveBG, this);
    callbackID = this.game.input.addMoveCallback(moveBG, this);
    game.input.onUp.add(endMove, this);
    bgMusic = game.add.audio('bgMusic');
    createSound();
  },
  update: function() {

    updateLoop(octo);
    updateLoop(gray);
    updateLoop(moon);
    updateLoop(orange);
    updateLoop(yellow);
    updateLoop(yeti);
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
  return bg;
}

function createSound() {
bgMusic.loop = true;
  bgMusic.play();
  soundButton = game.add.sprite(10, 10, 'soundIcon');
  soundButton.scale.setTo(0.5, 0.5);
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
