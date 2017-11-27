//Eraser Variables
var xPos = 0;
var gird  = .001;
var time = 0.0;  
var increment = .005;
var sw = 0;
var gSpeed = 1;

//A noise based eraser line that continuously travels across the screen
function eraser(tempWN, tempSpeed) {
    //noise will give the eraser an interesting pattern as it moves across the screen
    var n = noise(this.time)*height;
    time = time + increment;

    this.wn = tempWN;
    this.speed = tempSpeed;
    //fill should be exactly the same color as the background so it  appears as if its erasing the paint and micron pen lines
    fill(215);
    ellipse(xPos, n, n/tempWN+gird, n/tempWN+gird);

    sw +=  increment;
    xPos =  xPos + tempSpeed;
    n += 1;
    
    if (xPos>width){
      xPos = -6;
    }

}
