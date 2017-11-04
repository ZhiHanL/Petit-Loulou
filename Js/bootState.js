var BootState = {
  preload: function() {
    game.load.spritesheet('loading', 'assets/loadingScreen.png', 341, 197, 48);
  },

  create: function(){
    game.state.add("LoadState", LoadState);
    game.state.start("LoadState");
  }
}
