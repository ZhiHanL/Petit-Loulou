var StateMain={    
    
	var seal;
	
   preload:function()
    {
       game.load.image('test', 'assets/Sebastian.jpg');
    },
    
    create:function()
    {
        seal = createSeal(0,0);
    },
    
    update:function()
    {       
        
    }

	function createSeal(x,y){
		var seal = game.add.sprite(x,y,'test');
		seal.anchor.setTo(0.5,0.5);
		return seal;
	}
    
}