// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
applyFilter(),
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter() {
  for (var r = 0; r < image.length; r++) { 
    var row = image[r];

    for (var c = 0; c < row.length; c++) { 
     
      //todo2 2a below
      var rgbString = image[r][c]
//todo2 2a above
//todo2 2b and 2c below
var rgbNumbers 
  = rgbStringToArray(rgbString)
  rgbNumbers[RED] = 255;
  //todo2 2b and 2c above
  //todo2 2d below
  rgbArrayToString(rgbNumbers);
  //todo2 2d above
//todo2 2e below
image[r][c] = rgbString
//todo2 2e above

};

// TODO 7: Create the applyFilterNoBackground function


// TODO 5: Create the keepInBounds function


// TODO 3: Create reddify function


// TODO 6: Create more filter functions


// CHALLENGE code goes below here
