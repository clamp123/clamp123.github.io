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
  applyFilter(reddify);


    // do not change the below line of code
    render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (var r = 0; r < image.length; r++) {
    var row = image[r];

    for (var c = 0; c < row.length; c++) {

      //todo2 2a below
      var rgbString = image[r][c]
      //todo2 2a above
      //todo2 2b and 2c 4c replacing 2c below
      var rgbNumbers
        = rgbStringToArray(rgbString)
      filterFunction(rgbNumbers)
      //todo2 2b and 2c 4c replacing 2c above
      //todo2 2d below
      rgbString = rgbArrayToString(rgbNumbers);
      //todo2 2d above
      //todo2 2e below
      image[r][c] = rgbString
      //todo2 2e above
    }
  }
};

// TODO 7: Create the applyFilterNoBackground function
//todo7 7a below
function applyFilterNoBackground(filterFunction) {
  background = image[0][0];
  for (var r = 0; r < image.length; r++) {
    var row = image[r];

    for (var c = 0; c < row.length; c++) {
      //todo7 7c below in progress
      var rgbString = image[r][c]
      //var rgbNumbers
      //  = rgbStringToArray(rgbString)
      //filterFunction(rgbNumbers)
      //rgbString = rgbArrayToString(rgbNumbers);
      //image[r][c] = rgbString
      if (rgbString !== background) {
        var rgbNumbers
        = rgbStringToArray(rgbString)
        filterFunction(rgbNumbers)
        rgbString = rgbArrayToString(rgbNumbers);
        image[r][c] = rgbString
      }

    }
  }
  //todo7 7c above in progress
 


};
//todo7 7a above

// TODO 5: Create the keepInBounds function
function keepInBounds(number) {
  //(255,0
  //  0, 255)
  Math.max(number, 0);

  Math.min(number, 255);
  number = Math.max(number, 0);
  number = Math.min(number, 255);

  return number;

  // same as earlier but above
}

// TODO 3: Create reddify function
function reddify(totallyArray) {
  totallyArray[RED] = 200;
};

// TODO 6: Create more filter functions
function decreaseBlue(bluArray) {
  bluArray[BLUE] = keepInBounds(bluArray[BLUE] - 50);
};
function increaseGreenByBlue(greebArray) {
  greebArray[GREEN] = keepInBounds(greebArray[BLUE] + greebArray[GREEN]);
};

// CHALLENGE code goes below here
