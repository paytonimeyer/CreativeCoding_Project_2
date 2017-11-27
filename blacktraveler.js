//Eraser Variables
var xPos2 = 0;
var gird2  = .001;
var time2 = 0.0;  
var increment2 = .005;
var gSpeed2 = 1;

//A noise based eraser line that continuously travels across the screen
function blackTraveler(tempWN, tempSpeed) {

  this.o = 127;
  this.oSpeed = .45;

    //noise will give the eraser an interesting pattern as it moves across the screen
    var n = noise(this.time)*height;
    time2 = time2 + increment2;

    this.wn = tempWN;
    this.speed = tempSpeed;
    //fill should be exactly the same color as the background so it  appears as if its erasing the paint and micron pen lines
    fill(127,127,127,this.o);
    ellipse(xPos2, n, n/tempWN+gird, n/tempWN+gird);

    this.o = this.o + this.oSpeed;
    if ((this.o > 128 || this.o < 0 )) {
      this.oSpeed = this.oSpeed * -1;
    }

     xPos2 =  xPos2 + tempSpeed;
    n += 1;
    if (xPos2 > width){
    xPos2 = -6;
  }
}
