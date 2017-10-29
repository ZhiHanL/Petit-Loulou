var LoadState = {
  preload: function() {
    game.load.image('BG1', 'assets/BG1.png');
    game.load.image('BG2', 'assets/BG2.png');
    game.load.image('BG3', 'assets/BG3.png');
    //game.load.image('BG4', 'assets/BG4.png');
    game.load.spritesheet('raccoon', 'assets/raccoon.png', 406, 228);
  },

  create: function(){
    game.state.add("MainState", StateMain);
    game.state.start("MainState");
  }
};
