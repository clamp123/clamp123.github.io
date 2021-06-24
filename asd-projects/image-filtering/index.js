// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // TODO: Call your apply function(s) here
applyFilter();




    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1 & 3: Create the applyFilter function here
function applyFilter() {
for (var a = 0; a < image.length; a++) {
    var row = image[a];
for (var b = 0; b < row.length; b++) { 
        //var value = image[a][b];
       // var rgbString = image[a][b];//
      // var rgbNumbers = rgbStringToArray(rgbString);
      // filterFunction(rgbNumbers);
      // var rgbString = arrayToString(rgbNumbers);
       // image[a][b] = rgbString;//
        var rgbString = image[a][b];
       var rgbNumbers = rgbStringToArray(rgbString);
       filterFunction(rgbNumbers);
       rgbString = rgbArrayToString(rgbNumbers);
        image[a][b] = rgbString;

    };
};
    
}

// TODO 5: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
    for (var a = 0; a < image.length; a++) {
        for (var b = 0; b < image[a].length; b++) {
            if (image[a][b] !== image[0][0]) {
                var rgbString = image[a][b];
                var rgbNumbers = rgbStringToArray(rgbString);
                filterFunction(rgbNumbers);
                var rgbString = rgbArrayToString(rgbNumbers);
            }
        }
    }
}

// TODO 2 & 4: Create filter functions
function reddify() {
    rgbNumbers[RED] = 255;
}

function decreaseBlue(rgbNumbers) {
    rgbNumbers[BLUE] = Math.max(0, rgbNumbers[BLUE] - 30)
    }
function increaseGreenByBlue(rgbNumbers) {
    rgbNumbers[GREEN] = Math.min(255, rgbNumbers[GREEN] + rgbNumbers[BLUE])
}

// CHALLENGE code goes below here
