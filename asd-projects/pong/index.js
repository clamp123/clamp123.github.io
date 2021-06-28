/* global $, sessionStorage */
// below factory function //
function pongstuff($id) {
  var pong = {};
  pong.id = $id;
  
  pong.width = $($id).width();
  pong.height = $($id).height();
  pong.x = parseFloat($($id).css('left'));
pong.y = parseFloat($($id).css('top'));
  pong.speedX = (0);
  pong.speedY = (0);
return pong;
} 
// above factory function //
$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
debugger
  // Constant Variables
  
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    "W": 87,
    "UP": 38,
    "S": 83,
    "DOWN": 40,
  }
  // Game Item Objects
  // mobility
  var theball = pongstuff("#theball");
  var theleftpaddle = pongstuff("#theleftpaddle");
  var therightpaddle = pongstuff("#therightpaddle");
  
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
 // helping with animation
  function newFrame() {
    
    redrawtheball();
    repositiontheleftpaddle();
    redrawtheleftpaddle();
    repositiontherightpaddle();
    redrawtherightpaddle();

  }
  
  
  /* 
  Called in response to events.
  */
 // actual key movements
  function handleKeyDown(event) {
    if (event.which === KEY.DOWN) {
      console.log("DOWN pressed")
    }
    if (event.which === KEY.UP) {
      console.log("UP pressed")
    }
    if (event.which === KEY.DOWN) {
      therightpaddle.speedY = 5;
    }
    if (event.which === KEY.UP) {
      therightpaddle.speedY = -5;
    }
    if (event.which === KEY.S) {
      console.log("S pressed")
    }
    if (event.which === KEY.W) {
      console.log("W pressed")
    }
    if (event.which === KEY.S) {
      theleftpaddle.speedY = 5;
    }
    if (event.which === KEY.W) {
      theleftpaddle.speedY = -5;
      
    }
  }
  function handleKeyUp(event) {
   
    if (event.which === KEY.UP) {
      therightpaddle.speedY = 0;
    }
    if (event.which === KEY.DOWN) {
      therightpaddle.speedY = 0;
    }
    if (event.which === KEY.W) {
      theleftpaddle.speedY = 0;
    }
    if (event.which === KEY.S) {
      theleftpaddle.speedY = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
 // collision and stuff
  function repositiontheball(){
    positionX += speedX;
    positionY += speedY;
  }
  function redrawtheball() {
    $("#theball").css("left", positionX);
    $("#theball").css("top", positionY);
  }
  function repositiontheleftpaddle(){
    positionX += speedX;
    positionY += speedY;
  }
  function redrawtheleftpaddle() {
    $("#theleftpaddle").css("left", positionX);
    $("#theleftpaddle").css("top", positionY);
  }
  function repositiontherightpaddle(){
    positionX += speedX;
    positionY += speedY;
  }
  function redrawtherightpaddle() {
    $("#therightpaddle").css("left", positionX);
    $("#therightpaddle").css("top", positionY);
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function doCollide(theleftpaddle, theball, therightpaddle) {
    
    theleftpaddle.leftX = theleftpaddle.x;
    theleftpaddle.topY = theleftpaddle.y;
    theleftpaddle.rightX = theleftpaddle.x;
    theleftpaddle.bottomY = theleftpaddle.y;
  
    
    theball.leftX = theball.x;
    theball.topY = theball.y;
    theball.rightX = theball.x;
    theball.bottomY = theball.y;

    therightpaddle.leftX = therightpaddle.x;
    therightpaddle.topY = therightpaddle.y;
    therightpaddle.rightX = therightpaddle.x;
    therightpaddle.bottomY = therightpaddle.y;
    
    if (theleftpaddle.rightX > theball.leftX &&  theleftpaddle.leftX < theball.rightX && theleftpaddle.bottomY > theball.topY && theleftpaddle.topY < theball.bottomY) {
        theball.speedX = theball.speedX++;
        theball.speedY = theball.speedY++;
        theball.speedX++;
        theball.speedY++;
      return true;
      } else {
    return false;
    }
  }
     if (theball.rightX > therightpaddle.leftX &&  theball.leftX < therightpaddle.rightX && theball.bottomY > therightpaddle.topY && theball.topY < therightpaddle.bottomY) {
      return true;
    } else {
  return false;
  } 
 
  if (theball.y < -10) {
  theball.speedY = theball.speedY + 1;
  }
  if (theball.y > board_hight) {
    theball.speedY = theball.speedY - 1;
  }
  if (theball.x < -10) {
    theball.speedX = theball.speedX + 1;
    }
  if (theball.x > board_width) {
    theball.speedX = theball.speedX - 1;
  }
}
