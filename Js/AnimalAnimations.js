function Animal (x, y, bubbleOffSet, sprite, id, speechBubble, button, pageLink, familyLink, endOfIdle1, endOfTrans1, endOfIdle2, endOfTrans2){
  this.pageLink = pageLink;
  this.familyLink = familyLink;

  this.sprite = game.add.sprite(x, y, sprite);
  this.id = id;
  this.speechActive = false;
  this.speechBubble = game.add.sprite(x - 400 + bubbleOffSet, game.world.centerY - 140, speechBubble);

  this.cartButton = game.add.sprite(x-162 + bubbleOffSet, game.world.centerY-115, button);
  this.cartButton.inputEnabled = false;
  this.cartButton.alpha = 0;

  if(familyLink != null){
    this.familyButton = game.add.sprite(x-210+bubbleOffSet, game.world.centerY-120, button);
    this.familyButton.inputEnabled = false;
    this.familyButton.alpha = 0;
  }

  this.speechBubble.alpha = 0;
  this.sprite.anchor.setTo(0.5,0.5);

  this.sprite.inputEnabled = true;

  addAnimalAnimations(this, id, endOfIdle1, endOfTrans1, endOfIdle2, endOfTrans2);
  addListener(this);
  this.sprite.animations.play(id + "Idle");
  this.sprite.animations.paused = true;

}
function addListener(animal) {
  if (animal.familyLink != null) {
    animal.familyButton.events.onInputDown.add(function() {
      window.open(animal.familyLink, "_blank");
    });
  }



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
      if(animal.id == 'mobile'){
        animal.sprite.play(animal.id + 'CIdle');
        animal.speechActive = true;
        animal.cartButton.inputEnabled = true;
      } else{
        animalFaceAndWalk(animal);
      }
      break;
    case animal.id + 'CIdle':
    if(animal.id == 'mobile'){
      animal.sprite.play(animal.id + 'Idle');
      animal.speechActive = false;
      animal.cartButton.inputEnabled = false;
    } else{
        animalTurnBackAndWalk(animal);
    }

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
    if(animal.familyLink != null){
      animal.familyButton.inputEnabled = true;
    }

    return;

}

function animalTurnBackAndWalk(animal){
    animal.speechActive = false;
    animal.cartButton.inputEnabled = false;
    if(animal.familyLink != null){
      animal.familyButton.inputEnabled = false;
    }
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


  if(game.camera.x > animal.sprite.x - 850 && game.camera.x < animal.sprite.x + 10){
      if(animal.sprite.animations.paused){
          animal.sprite.animations.paused = false;
      }
  } else if(!animal.sprite.animations.paused){
    animal.sprite.animations.paused = true;
  }
}
