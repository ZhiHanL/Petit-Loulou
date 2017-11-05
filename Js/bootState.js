var BootState = {
  preload: function() {
    game.load.spritesheet('loading', 'assets/loadingScreen.png', 334, 189, 48);
  },

  create: function(){
    game.stage.backgroundColor = '#ffffff'; 
    game.state.add("LoadState", LoadState);
    game.state.start("LoadState");
  }
}
