
function addRacoonAnimations(animal){
  animal.sprite.animations.add('rIdle',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35], 24, true);
  animal.sprite.animations.add('rFaceCamera', [36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51], 24, false);
  animal.sprite.animations.add('rWalkTowardsCamera', [52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68], 24, true);
  animal.sprite.animations.add('rSittingDown', [69,70,71,72,73,74,75,76,77,78,79], 24, false);
  animal.sprite.animations.add('rCIdle', [80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,
  121,123,124,125,126,127,128], 24, true);
  animal.sprite.animations.add('rTurnBack', [129,130,131,132,133,134,135,136], 24, false);
  animal.sprite.animations.add('rWalkBack', [137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156], 24, true);
  animal.sprite.animations.add('rTransitionToOriginal', [157,158,159,160,161,162,163,164,165,166,167,168,169], 24, false);

}

function addCloudAnimations(animal){
  let idle1 = [];
  let trans1 = [];
  let trans2 = [];
  let idle2 = [];
  for(let i = 0; i < 123; i++){
    idle1.push(i);
  }


  for(let i = 129; i <181; i++){
    trans1.push(i);
  }

  for(let i = 181; i < 224; i++){
    idle2.push(i);
  }

  for(let i = 224; i < 246; i++){
    trans2.push(i);
  }
  console.log(trans1);

  animal.sprite.animations.add("cloudIdle", idle1, 24, true);
  animal.sprite.animations.add("cloudFaceCamera", trans1, 24, false);
  animal.sprite.animations.add('cloudWalkTowardsCamera', [], 24, true);
  animal.sprite.animations.add('cloudSittingDown', [], 24, false);
  animal.sprite.animations.add('cloudCIdle', idle2, 24, true);
  animal.sprite.animations.add("cloudTurnBack", [], 24, false);
  animal.sprite.animations.add("cloudWalkBack", [], 24, true);
  animal.sprite.animations.add('cloudTransitionToOriginal', trans2, 24, false);
}

function addRCloudAnimations(animal){
  let idle1 = [];
  let trans1 = [];
  let trans2 = [];
  let idle2 = [];
  for(let i = 0; i < 150; i++){
    idle1.push(i);
  }


  for(let i = 150; i <168; i++){
    trans1.push(i);
  }

  for(let i = 168; i < 260; i++){
    idle2.push(i);
  }

  for(let i = 260; i < 264; i++){
    trans2.push(i);
  }


  animal.sprite.animations.add("rCloudIdle", idle1, 24, true);
  animal.sprite.animations.add("rCloudFaceCamera", trans1, 24, false);
  animal.sprite.animations.add('rCloudWalkTowardsCamera', [], 24, true);
  animal.sprite.animations.add('rCloudSittingDown', [], 24, false);
  animal.sprite.animations.add('rCloudCIdle', idle2, 24, true);
  animal.sprite.animations.add("rCloudTurnBack", [], 24, false);
  animal.sprite.animations.add("rCloudWalkBack", [], 24, true);
  animal.sprite.animations.add('rCloudTransitionToOriginal', trans2, 24, false);
}

function addCactusAnimations(animal){
  let idle1 = [];
  let trans1 = [];
  let trans2 = [];
  let idle2 = [];
  for(let i = 0; i < 131; i++){
    idle1.push(i);
  }


  for(let i = 131; i <239; i++){
    trans1.push(i);
  }

  for(let i = 239; i < 343; i++){
    idle2.push(i);
  }

  for(let i = 343; i < 420; i++){
    trans2.push(i);
  }
  console.log(trans1);

  animal.sprite.animations.add("cactusIdle", idle1, 24, true);
  animal.sprite.animations.add("cactusFaceCamera", trans1, 24, false);
  animal.sprite.animations.add('cactusWalkTowardsCamera', [], 24, true);
  animal.sprite.animations.add('cactusSittingDown', [], 24, false);
  animal.sprite.animations.add('cactusCIdle', idle2, 24, true);
  animal.sprite.animations.add("cactusTurnBack", [], 24, false);
  animal.sprite.animations.add("cactusWalkBack", [], 24, true);
  animal.sprite.animations.add('cactusTransitionToOriginal', trans2, 24, false);
}
