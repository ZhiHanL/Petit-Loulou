function addRacoonAnimations(){
  raccoon.animations.add('rIdle',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35], 24, true);
  raccoon.animations.add('rFaceCamera', [36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51], 24, false);
  raccoon.animations.add('rWalkTowardsCamera', [52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68], 24, true);
  raccoon.animations.add('rSittingDown', [69,70,71,72,73,74,75,76,77,78,79], 24, false);
  raccoon.animations.add('rCIdle', [80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,
  121,123,124,125,126,127,128], 24, true);
  raccoon.animations.add('rTurnBack', [129,130,131,132,133,134,135,136], 24, false);
  raccoon.animations.add('rWalkBack', [137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156], 24, true);
  raccoon.animations.add('rTransitionToOriginal', [157,158,159,160,161,162,163,164,165,166,167,168,169], 24, false);

}


function rListener(){
    switch (raccoon.animations.currentAnim.name){
      case 'rIdle':
      //  rTriggerStart = true;
        rFaceAndWalk();
        //rIdleAnim.onLoop.addOnce(rFaceAndWalk, this);
        break;
      case 'rCIdle':
        //rTriggerEnd = true;
        rTurnBackAndWalk();
        //rCIdleAnim.onLoop.addOnce(rTurnBackAndWalk, this);
        break;
    }
}

function rEnd(){
  if(raccoon.animations.currentAnim.name == 'rCIdle'){
    rTurnBackAndWalk();
  }
}

function rTurnBackAndWalk(){
    raccoon.play('rTurnBack').onComplete.addOnce(function(){
      tempAnim = raccoon.play('rWalkBack');
      tempAnim.onLoop.add(function(){
        console.log(tempAnim.loopCount);

        if(tempAnim.loopCount == 2){
          raccoon.play('rTransitionToOriginal').onComplete.addOnce(function(){
            raccoon.play('rIdle');
          });
        }
      });
    });

}

function rFaceAndWalk(){
    let rFaceCamAnim = raccoon.play('rFaceCamera');
    rFaceCamAnim.onComplete.addOnce(function(){
      tempAnim = raccoon.play('rWalkTowardsCamera');
      tempAnim.onLoop.add(function(){
        if(tempAnim.loopCount == 2){
          rSitAndIdle();
        }
      });
    }, this);
}

function rSitAndIdle(){
  raccoon.play('rSittingDown').onComplete.addOnce(function(){
    rCIdleAnim = raccoon.play('rCIdle');
  });
}
