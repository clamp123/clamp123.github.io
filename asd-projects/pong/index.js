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
  theball.speedX = 3;
  theball.speedY = (Math.random() * 6 - 3);
  var theleftpaddle = pongstuff("#theleftpaddle");
  var therightpaddle = pongstuff("#therightpaddle");
  var board_width = 443
  var board_height = 440
  
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
    repositiontheball();
    redrawtheball();
    repositiontheleftpaddle();
    redrawtheleftpaddle();
    repositiontherightpaddle();
    redrawtherightpaddle();
    
   
    var check = doCollide(theleftpaddle, theball);
    if (check === true) {
     theball.speedX = -theball.speedX;
    }
    else {
      theball.speedX = theball.speedX;
    }
    

   
    var check = doCollide(theball, therightpaddle);
    if (check === true) {
      theball.speedX = -theball.speedX;
     }
     else {
      theball.speedX = theball.speedX;
     }
     
    
    var check = collision( theball, board_height);
    if (check === true) {
      theball.speedY = -theball.speedY;
     } 
     else {
      theball.speedY = theball.speedY;
     }
     var check = collision( theball, board_width);
     if (check === true) {
       theball.speedX = -theball.speedX;
      } 
      else {
       theball.speedX = theball.speedX;
      }
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
    theball.x += theball.speedX;
    theball.y += theball.speedY;
  }
  function redrawtheball() {
    $("#theball").css("left", theball.x);
    $("#theball").css("top", theball.y);
  }
  function repositiontheleftpaddle(){
    theleftpaddle.x += theleftpaddle.speedX;
    theleftpaddle.y += theleftpaddle.speedY;
  }
  function redrawtheleftpaddle() {
    $("#theleftpaddle").css("left", theleftpaddle.x);
    $("#theleftpaddle").css("top", theleftpaddle.y);
  }
  function repositiontherightpaddle(){
    therightpaddle.x += therightpaddle.speedX;
    therightpaddle.y += therightpaddle.speedY;
  }
  function redrawtherightpaddle() {
    $("#therightpaddle").css("left", therightpaddle.x);
    $("#therightpaddle").css("top", therightpaddle.y);
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function doCollide(theleftpaddle, theball) {
    
    theleftpaddle.leftX = theleftpaddle.x;
    theleftpaddle.topY = theleftpaddle.y;
    theleftpaddle.rightX = theleftpaddle.x + theleftpaddle.width;
    theleftpaddle.bottomY = theleftpaddle.y + theleftpaddle.height;
  
    
    theball.leftX = theball.x;
    theball.topY = theball.y;
    theball.rightX = theball.x + theball.width;
    theball.bottomY = theball.y + theball.height;

    
    if ((theleftpaddle.rightX > theball.leftX) &&  
      (theleftpaddle.leftX < theball.rightX) &&
       (theleftpaddle.bottomY > theball.topY) &&
        (theleftpaddle.topY < theball.bottomY)) {
        
      return true;
      
      } else {
    return false;
    }
  }
  
  function collision( theball, board_height) {
    
  if ((theball.bottomY >= board_height) ||
   (theball.topY <= 0)){
     return true;
   } else {
     return false;
   }
  
  }
  function collision( theball, board_width) {
    
    if ((theball.bottomY >= board_width) ||
     (theball.topY <= 0)){
       return true;
     } else {
       return false;
     }
    
    }
    
}