//Variables for Scrolling BG
var timeConstantScroll = 325;
var pressedDown = false;
var dragging = false;
var startX = 0;
var bgVelocity = 0;
var callbackID = 0;
var timestamp = 0;
var now = 0;
var amplitudeX = 0;
var targetX = 0;
var cameraAtEdge = false;

var cameraTotalMovement = 7703;
var bg1TotalMovement = 3212.59002;
var bg2TotalMovement = 1764.23999;

/**
 * Event triggered when a pointer is pressed down, resets the value of variables.
 */
function beginMoveBG() {
  //variables for scrolling bg
  pressedDown = true;
  startX = game.input.x;
  bgVelocity = 0;
  timestamp = Date.now();
  amplitudeX = 0;;
}

/**
 * Event triggered when the activePointer receives a DOM move event such as a mousemove or touchmove.
 * The camera moves according to the movement of the pointer, calculating the velocity.
 */
function moveBG(pointer, x, y) {
  if (!pressedDown) return;
  //calculate time difference
  now = Date.now();
 var elapsed = now - timestamp;
  timestamp = Date.now();

  var delta = x - startX;
  if (delta !== 0) dragging = true;
  startX = x;
  bgVelocity = 0.8 * (1000 * delta / (1 + elapsed)) + 0.2 * bgVelocity;
  game.camera.x -= delta;
  var percentOfMovement = game.camera.x/cameraTotalMovement;
  bg1.x = percentOfMovement * bg1TotalMovement;
  bg2.x = percentOfMovement * bg2TotalMovement;
}

/**
 * Event triggered when a pointer is released, calculates the automatic scrolling.
 */

function endMove() {
  pressedDown = false;
}
//  now = Date.now();
//  if (bgVelocity > 10 || bgVelocity < -10) {
//    amplitudeX = 0.8 * bgVelocity;
//    targetX = Math.round(game.camera.x - amplitudeX);
//  }

// function scrollUpdate() {
//   elapsed = Date.now() - timestamp;
//   if (amplitudeX != 0) {
//     var delta = -amplitudeX * Math.exp(-elapsed / timeConstantScroll);
//     if (delta > 0.5 || delta < -0.5) {
//     //  game.camera.x = targetX - delta;
//
//     }
//   }
// }
