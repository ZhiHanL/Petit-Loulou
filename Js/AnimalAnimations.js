function Animal (x, y, sprite, id, speechBubble, button, pageLink, familyLink, familyImage, endOfIdle1, endOfTrans1, endOfIdle2, endOfTrans2){
  this.pageLink = pageLink;
  this.familyLink = familyLink;

  this.sprite = game.add.sprite(x, y, sprite);
  this.id = id;
  this.speechActive = false;
  this.speechBubble = game.add.sprite(x - 400 ,game.world.centerY - 140, speechBubble);

  this.cartButton = game.add.sprite(x-142, game.world.centerY-32, button);
  this.cartButton.inputEnabled = false;
  this.cartButton.alpha = 0;

  this.familyButton = game.add.sprite(x-166, game.world.centerY-70, button);
  this.familyButton.inputEnabled = false;
  this.familyButton.alpha = 0;

  if(familyImage != null){
    this.familyImage = game.add.sprite(x+55, game.world.centerY-50, familyImage);
    this.familyImage.alpha = 0;
    this.familyImageActive = false;
  } else{
    this.familyImage = null;
  }

  this.speechBubble.alpha = 0;
  this.sprite.anchor.setTo(0.5,0.5);

  this.sprite.inputEnabled = true;

  addAnimalAnimations(this, id, endOfIdle1, endOfTrans1, endOfIdle2, endOfTrans2);
  addListener(this);
  this.sprite.animations.play(id + "Idle");
  this.sprite.animations.paused = true;

}

function addListener(animal){
  animal.familyButton.events.onInputOver.add(function(){
    if(animal.familyImage != null){
      animal.familyImageActive = true;
    }

  });

  animal.familyButton.events.onInputOut.add(function(){
    animal.familyImageActive = false;
  });


  animal.familyButton.events.onInputDown.add(function(){
    animal.familyImageActive = false;
    window.open(animal.familyLink, "_blank");
  });

  animal.cartButton.events.onInputDown.add(function(){
     window.open(animal.pageLink, "_blank");
  });
  animal.sprite.events.onInputDown.add(function(){
    animal.inputX = game.input.mousePointer.x;
    animal.inputY = game.input.mousePointer.y;
  });
  animal.sprite.events.onInputUp.add(function(){
    if(animal.inputX == game.input.mousePointer.x && animal.inputY == game.input.mousePointer.y){
        animationListener(animal);
    }
  });
}

function animationListener(animal){
  switch (animal.sprite.animations.currentAnim.name){
    case animal.id + "Idle":
      animalFaceAndWalk(animal);
      break;
    case animal.id + 'CIdle':
      animalTurnBackAndWalk(animal);
      break;
  }
}

function animalFaceAndWalk(animal){
    let faceCamAnim = animal.sprite.play(animal.id + 'TransitionToIdle2');
    faceCamAnim.onComplete.addOnce(function(){
        animalSitAndIdle(animal);
        return;
    });

}

function animalSitAndIdle(animal){
    cIdleAnim = animal.sprite.play(animal.id + 'CIdle');
    animal.speechActive = true;
    animal.cartButton.inputEnabled = true;
    animal.familyButton.inputEnabled = true;
    return;

}

function animalTurnBackAndWalk(animal){
    animal.speechActive = false;
    animal.cartButton.inputEnabled = false;
    animal.familyButton.inputEnabled = false;
    animal.sprite.play(animal.id +'TransitionToOriginal').onComplete.addOnce(function(){
    animal.sprite.play(animal.id + 'Idle');
      return;
    });
}




function updateLoop(animal){
  if(animal.speechBubble.alpha < 1 && animal.speechActive){
    animal.speechBubble.alpha += 0.02;
  }
  if(animal.speechBubble.alpha > 0 && !animal.speechActive){
    animal.speechBubble.alpha -= 0.02;
  }

  if(animal.familyImage.alpha < 1 && animal.familyImageActive){
      animal.familyImage.alpha += 0.05;
  }
  if(animal.familyImage.alpha > 0 && !animal.familyImageActive){
      animal.familyImage.alpha -= 0.05;
  }
  if(game.camera.x > animal.sprite.x - 850 && game.camera.x < animal.sprite.x + 50){
      if(animal.sprite.animations.paused){
          animal.sprite.animations.paused = false;
      }
  } else if(!animal.sprite.animations.paused){
    animal.sprite.animations.paused = true;
  }
}
