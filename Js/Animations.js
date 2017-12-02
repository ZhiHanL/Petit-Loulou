
function addAnimalAnimations(animal, tag, endOfIdle1, endOfTrans1, endOfIdle2, endOfTrans2){
  let idle1 = [];
  let trans1 = [];
  let trans2 = [];
  let idle2 = [];
  for(let i = 0; i < endOfIdle1; i++){
    idle1.push(i);
  }

  if(endOfTrans1 != null){
    for(let i = endOfIdle1; i <endOfTrans1; i++){
      trans1.push(i);
    }

    for(let i = endOfTrans1; i < endOfIdle2; i++){
      idle2.push(i);
    }

    for(let i = endOfIdle2; i < endOfTrans2; i++){
      trans2.push(i);
    }
    animal.sprite.animations.add(tag+"TransitionToIdle2", trans1, 24, false);
    animal.sprite.animations.add(tag+'CIdle', idle2, 24, true);
    animal.sprite.animations.add(tag+'TransitionToOriginal', trans2, 24, false);
  } else{
    animal.sprite.animations.add(tag+'CIdle', idle1, 24, true);
  }


  animal.sprite.animations.add(tag+"Idle", idle1, 24, true);

}
