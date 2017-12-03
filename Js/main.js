window.onload = function() {

  //var isMobile = navigator.userAgent.indexOf("Mobile");
  // gameWidth = window.innerWidth * 0.60;
  gameWidth = 865;
   //console.log(gameWidth);
   gameHeight = 271.6;
   //window.innerHeight * 0.40;

  game = new Phaser.Game(gameWidth,gameHeight, Phaser.AUTO, "ph_game", {create : create});

  function create(){
    game.stage.backgroundColor = 0xffffff;
    window.addEventListener('resize', function () {
      game.scale.setGameSize(window.innerWidth * 0.60, gameHeight);
    });
  }
  game.state.add("BootState", BootState);
  game.state.start("BootState");
}
