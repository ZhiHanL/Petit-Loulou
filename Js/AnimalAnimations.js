function Animal (x, y, sprite, addAnimations, id, speechBubble, button, pageLink, familyLink, familyImage){
  this.pageLink = pageLink;
  this.familyLink = familyLink;

  this.sprite = game.add.sprite(x, y, sprite);
  this.id = id;
  this.speechActive = false;
  this.speechBubble = game.add.sprite(x - 370 ,game.world.centerY - 102, speechBubble);

  this.cartButton = game.add.sprite(x-142, game.world.centerY-32, button);
  this.cartButton.inputEnabled = false;
  this.cartButton.alpha = 0;

  this.familyButton = game.add.sprite(x-166, game.world.centerY-70, button);
  this.familyButton.inputEnabled = false;
  this.familyButton.alpha = 0;

  if(familyImage != null){
    this.familyImage = game.add.sprite(x+55, y-130, familyImage);
    this.familyImage.alpha = 0;
    this.familyImageActive = false;
  } else{
    this.familyImage = null;
  }

  this.speechBubble.alpha = 0;
  this.walkingTowards = false;
  this.walkingWay = false;
  this.sprite.anchor.setTo(0.5,0.5);
  this.sprite.scale.setTo(0.7,0.7);
  this.sprite.inputEnabled = true;
  addAnimations(this);
  addListener(this);
  this.IdleAnim = this.sprite.animations.play(id + "Idle");

}

function addListener(animal){
  animal.familyButton.events.onInputOver.add(function(){
    animal.familyImageActive = true;
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
    let faceCamAnim = animal.sprite.play(animal.id + 'FaceCamera');
    faceCamAnim.onComplete.addOnce(function(){
      tempAnim = animal.sprite.play('rWalkTowardsCamera');
      animal.walkingTowards = true;
      tempAnim.onLoop.add(function(){
        if(tempAnim.loopCount == 2){
          animalSitAndIdle(animal);
        }
      });
    }, this);
}
function animalSitAndIdle(animal){
  animal.walkingTowards = false;
  animal.sprite.play('rSittingDown').onComplete.addOnce(function(){
    cIdleAnim = animal.sprite.play(animal.id + 'CIdle');
    animal.speechActive = true;
    animal.cartButton.inputEnabled = true;
    animal.familyButton.inputEnabled = true;
  });
}

function animalTurnBackAndWalk(animal){
    animal.speechActive = false;
    animal.cartButton.inputEnabled = false;
    animal.familyButton.inputEnabled = false;
    animal.sprite.play(animal.id +'TurnBack').onComplete.addOnce(function(){
      tempAnim = animal.sprite.play(animal.id +'WalkBack');
        animal.walkingAway = true;
      tempAnim.onLoop.add(function(){
        if(tempAnim.loopCount == 2){
          animal.walkingAway = false;
          animal.sprite.play(animal.id +'TransitionToOriginal').onComplete.addOnce(function(){
            animal.sprite.play('rIdle');
          });
        }
      });
    });

}



function animalSizeListener(animal){
  if(animal.walkingTowards){
      animal.sprite.height = animal.sprite.height + 0.3;
      animal.sprite.width = animal.sprite.width + 0.3;
  }else if(animal.walkingAway){
    animal.sprite.height= animal.sprite.height - 0.3;
    animal.sprite.width = animal.sprite.width - 0.3;
  }
}

function activateSpeech(animal){
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
}
