var LoadState = {
  preload: function() {
    loadScreen = game.add.sprite(game.world.centerX,game.world.centerY,'loading');
    loadScreen.anchor.setTo(0.5, 0.5);
    loadScreen.animations.add('load');
    loadScreen.animations.play("load", 24, true);
    game.load.image('BG1', 'assets/BG1.png');
    game.load.image('BG2', 'assets/BG2.png');
    game.load.image('BG3', 'assets/BG3.png');
    game.load.spritesheet('soundIcon', 'assets/soundIcon.png', 70, 70, 2);
    game.load.audio('bgMusic', 'assets/music.ogg');
    //game.load.image('BG4', 'assets/BG4.png');
  //  game.load.spritesheet('raccoon', 'assets/raccoon.png', 398, 220);
    game.load.spritesheet('cactus', 'assets/cactus.png', 481,271);
    game.load.spritesheet('cloud', 'assets/cloud.png', 481,271, 261);
    game.load.spritesheet('rainbowCloud', 'assets/rainbowCloud.png', 481,271,279 );
    game.load.spritesheet('bear', 'assets/bear.png', 481,271,226); //might be 225
    game.load.spritesheet('dino', 'assets/Dino.png', 481,271,227);
    game.load.spritesheet('fish', 'assets/Fish.png', 481,271,381);
    game.load.spritesheet('fox', 'assets/fox.png', 481,271,284);
    game.load.spritesheet('giraffe', 'assets/Giraffe.png', 481,271,418);
    game.load.spritesheet('hedgehog', 'assets/hedgehog.png', 481,271,386);
    game.load.spritesheet('mBlue', 'assets/mBlue.png', 481,271,196);
    game.load.spritesheet('mLBlue', 'assets/mLBlue.png', 481,271,223);
    game.load.spritesheet('owl', 'assets/owl.png', 481,271,327);
    game.load.spritesheet('raccoon', 'assets/raccoon.png', 481,271,384);
    game.load.spritesheet('mobile', 'assets/mobile.png', 481,271,62);
    game.load.image('miloSpeech', 'assets/miloSpeech.png');
    game.load.image('speechButton', 'assets/speechButton.png');
    game.load.image('yetiFamily', 'assets/yetiFamily.png');
    game.load.image('bearSpeech', 'assets/bearSpeech.png');
  },

  create: function(){
    game.state.add("StateMain", StateMain);
    game.state.start("StateMain");
  }
}
