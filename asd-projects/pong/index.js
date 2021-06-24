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
  var positionX = 0;
  var positionY = 0;
  var speedX = Math.random;
  var speedY = 0;
  
  function theball(theball) { 
    return theball();

    function theball() {
      $(theball.id).css("left", theball.x);

      var theball = {};
      theball.x = 0;
      theball.y = 100;
      theball.speedX = 4;
      theball.speedY = 5;
      theball.id = "#theball";
      return theball;
    }
  }
  function theleftpaddle(theleftpaddle) { 
    return theleftpaddle();

    function theleftpaddle() {
      $(theleftpaddle.id).css("top", theleftpaddle.y);
      var theleftpaddle = {};
      theleftpaddle.x = 0;
      theleftpaddle.y = 100;
      theleftpaddle.speedX = 1;
      theleftpaddle.speedY = 1;
      theleftpaddle.id = "#theleftpaddle";

      return theleftpaddle;
    }
  }
  function therightpaddle(therightpaddle) {
    return therightpaddle();

    function therightpaddle() {
      $(therightpaddle.id).css("top", therightpaddle.y);
      var therightpaddle = {};
      therightpaddle.x = 0;
      therightpaddle.y = 100;
      therightpaddle.speedX = 1;
      therightpaddle.speedY = 1;
      therightpaddle.id = "#therightpaddle";
      return therightpaddle;
    }
  };
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
  
  function theball() {
    positionX += speedX;                 
    $("#theball").css("left", positionX);    
  }

  function theleftpaddle() {
    positionY += speedY;                 
    $("#theleftpaddle").css("top", positionY);    
  }

  function therightpaddle() {
    positionY += speedY;                 
    $("#therightpaddle").css("top", positionY);    
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
      speedY = 5;
    }
    if (event.which === KEY.UP) {
      speedY = -5;
    }
    if (event.which === KEY.S) {
      console.log("S pressed")
    }
    if (event.which === KEY.W) {
      console.log("W pressed")
    }
    if (event.which === KEY.S) {
      speedY = 5;
    }
    if (event.which === KEY.W) {
      speedY = -5;
      
    }
  }
  function handleKeyUp(event) {
   
    if (event.which === KEY.UP) {
      speedY = 0;
    }
    if (event.which === KEY.DOWN) {
      speedY = 0;
    }
    if (event.which === KEY.W) {
      speedY = 0;
    }
    if (event.which === KEY.S) {
      speedY = 0;
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
  function doCollide(paddle, ball) {
    
    square1.leftX = square1.x;
    square1.topY = square1.y;
    square1.rightX = square1.x;
    square1.bottomY = square1.y;
  
    
    square2.leftX = square2.x;
    square2.topY = square2.y;
    square2.rightX = square2.x;
    square2.bottomY = square2.y;
    
    if (square1.rightX > square2.leftX &&  square1.leftX < square2.rightX && square1.bottomY > square2.topY && square1.topY < square2.bottomY) {
        return true;
      } else {
    return false;
    }
	
  }
}
