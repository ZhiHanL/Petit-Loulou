window.onload = function() {

  //var isMobile = navigator.userAgent.indexOf("Mobile");
  var gameWidth = window.innerWidth * 0.60;
  var gameHeight = window.innerHeight * 0.60;

  game = new Phaser.Game(gameWidth,271, Phaser.AUTO, "ph_game", {create : create});

  function create(){
    game.stage.backgroundColor = 0xffffff;
  }
  game.state.add("BootState", BootState);
  game.state.start("BootState");
}
