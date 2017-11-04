var bg1; //furthest back
var bg2;
window.onload = function() {

  var isMobile = navigator.userAgent.indexOf("Mobile");
  var gameWidth = window.innerWidth * 0.60;
  var gameHeight = window.innerHeight * 0.60;

  worldEndX = 6120*1.4;

  game = new Phaser.Game(gameWidth,271, Phaser.AUTO, "ph_game");
  inputX = 0;
  inputY = 0;

  game.state.add("BootState", BootState);
  game.state.start("BootState");
}
