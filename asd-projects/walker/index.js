/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
var BOARD_WIDTH = $('#board').width();
var BOARD_HEIGHT = $('#board').height();
  var KEY = {
    "LEFT": 37,
    "UP": 38,
    "RIGHT": 39,
    "DOWN": 40,
    "W": 87,
    "A": 65,
    "S": 83,
    "D": 68
  }
  
  // Game Item Objects
  
  box.x = 0;
   box.speedX = 0;
   box.y = 0;
   box.speedY = 0;
  
   box2.x = 0;
   box2.speedX = 0;
   box2.y = 0;
   box2.speedY = 0;

   var board_width = 440;
   var board_height = 440;

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
  function newFrame() {
     repositionbox();
   redrawbox();
   repositionbox2();
   redrawbox2();


   var check = collision( box, board_height);
   if (check === true) {
     box.y = 440;
    } 
    else {
     box.y = box.y;
    }
    var check = collision( box, board_width);
    if (check === true) {
      box.x = 440;
     } 
     else {
      box.x = box.x;
     }
     var check = collision( box2, board_height);
   if (check === true) {
     box2.y = 440;
    } 
    else {
     box2.y = box2.y;
    }
    var check = collision( box2, board_width);
    if (check === true) {
      box2.x = 440;
     } 
     else {
      box2.x = box2.x;
     }
     


  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
console.log("LEFT pressed");
  }
  if (event.which === KEY.DOWN) {
    console.log("DOWN pressed")
  }
  if (event.which === KEY.UP) {
    console.log("UP pressed")
  }
  if (event.which === KEY.RIGHT) {
    console.log("RIGHT pressed")
  }
  if (event.which === KEY.LEFT) {
    box.speedX = -5;
  }
  if (event.which === KEY.RIGHT) {
    box.speedX = 5;
  }
  if (event.which === KEY.DOWN) {
    box.speedY = 5;
  }
  if (event.which === KEY.UP) {
    box.speedY = -5;
  }
  if (event.which === KEY.A) {
    box2.speedX = -5;
  }
  if (event.which === KEY.D) {
    box2.speedX = 5;
  }
  if (event.which === KEY.S) {
    box2.speedY = 5;
  }
  if (event.which === KEY.W) {
    box2.speedY = -5;
  }
  }
  function handleKeyUp(event) {
   
      if (event.which === KEY.LEFT) {
        box.speedX = 0;
      }
      if (event.which === KEY.RIGHT) {
        box.speedX = 0;
      }
      if (event.which === KEY.UP) {
        box.speedY = 0;
      }
      if (event.which === KEY.DOWN) {
        box.speedY = 0;
      }
      if (event.which === KEY.A) {
      box2.speedX = 0;
    }
    if (event.which === KEY.D) {
      box2.speedX = 0;
    }
    if (event.which === KEY.W) {
      box2.speedY = 0;
    }
    if (event.which === KEY.S) {
      box2.speedY = 0;
    }
  
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionbox(){
  box.x += box.speedX;
  box.y += box.speedY;
  }
  function redrawbox() {
  $("#box").css("left", box.x);
  $("#box").css("top", box.y);
  }
  function repositionbox2(){
box2.x += box2.speedX;
box2.y += box2.speedY;
  }
  function redrawbox2() {
    $("#box2").css("left", box2.x);
    $("#box2").css("top", box2.y);
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
          function collision() {
            if (box.x > BOARD_WIDTH - $('#box').width()) {
              box.x = BOARD_WIDTH - $('#box').width();
            }
            else if (box.x < 0) {
              box.x = 0;
            }
            if (box2.x > BOARD_WIDTH - $('#box2').width()) {
              box2.x = BOARD_WIDTH - $('#box2').width();
            }
            else if (box2.x < 0) {
              box2.x = 0;
            }
            if (box.y > BOARD_HEIGHT - $('#box').height()) {
              box.y = BOARD_HEIGHT - $('#box').height();
            }
            else if (box.y < 0) {
              box.y = 0;
            }
            if (box2.y > BOARD_HEIGHT - $('#box2').height()) {
              box2.y = BOARD_HEIGHT - $('#box2').height();
            }
            else if (box2.y < 0) {
              box2.y = 0;
            } 
          }
  }
