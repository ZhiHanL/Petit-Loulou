var LoadState = {
  preload: function() {
    loadScreen = game.add.sprite(game.world.centerX,game.world.centerY,'loading');
    loadScreen.anchor.setTo(0.5, 0.5);
    loadScreen.animations.add('load');
    loadScreen.animations.play("load", 24, true);
    game.load.image('BG1', 'assets/BG1.png');
    game.load.image('BG2', 'assets/BG2.png');
    game.load.image('BG3', 'assets/BG3.png');
    //game.load.image('BG4', 'assets/BG4.png');
    game.load.spritesheet('raccoon', 'assets/raccoon.png', 398, 220);
    game.load.spritesheet('cactus', 'assets/cactus.png', 240.95,135.48, 447);
    game.load.spritesheet('cloud', 'assets/cloud.png', 241,135.4);
    game.load.spritesheet('rainbowCloud', 'assets/rainbowCloud.png', 241,135.4,279 );
    game.load.image('miloSpeech', 'assets/miloSpeech.png');
    game.load.image('speechButton', 'assets/speechButton.png');
    game.load.image('yetiFamily', 'assets/yetiFamily.png');
  },

  create: function(){
    game.state.add("StateMain", StateMain);
    game.state.start("StateMain");
  }
}
