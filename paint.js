//Paint tree array position 
var xMov = 0;
var yMov = 0;

//Paint array
var paint = [];

//Paint Class
function Paint(tempX, tempY, tempR, tempG, tempB) {
  //location
  this.x = tempX;
  this.y = tempY;

  //variance
  this.time = 0.0;  
  this.decrement = .5;
  this.increment = .01;
  this.o = 127;

  //color+color variance
  this.r = tempR;
  this.g = tempG;
  this.b = tempB;
  this.rspeed = .45;
  this.gspeed = .45;    
  this.bspeed = .45;

  this.w = 25;

  //Show, grow and color fade functionality
  this.show = function() {  

    //this.n = noise(this.time)*width/15;
    noStroke();
    fill(this.r, this.g, this.b, this.o);
    ellipse(this.x, this.y, this.w, this.w);

    this.w -= 1;
    this.y = this.y - 5;
    this.x = this.x + random(-50,50);


    if (this.w<1){
      this.w = 1;

    }

    //color builder - this will constantly change the r, g, b values of each microbe on the canvas
    this.r = this.r + this.rspeed;
    if ((this.r > 254 || this.r < 0 )) {
      this.rspeed = this.rspeed * -1;
    }
    this.g = this.g + this.gspeed;
    if ((this.g > 254 || this.g < 0 )) {
      this.gspeed = this.gspeed * -1;
    }
        this.b = this.b + this.bspeed;
    if ((this.b > 254 || this.b < 0 )) {
      this.bspeed = this.bspeed * -1;
    }
  }

  this.fade = function() {
    this.time = this.time + this.increment;
  }

}


function pushPaintClass() {
  var s = second();

  paint.push(new Paint(xMov, yMov, 15, 15, 15));

  var choice = random(0,4);

  //dice roll conditionals 
  if (choice < 1 ){
    xMov = xMov - 5;
  } else if (choice < 2 ){
    xMov = xMov + 5;
  } else if (choice < 3 ){
    yMov = yMov + 15;
  } else {
    yMov = yMov - 5;
  }

  //create a slight delay between paint 
  if ( yMov > height+500){
    yMov = -0;
    xMov = random(-1000,1000);
  }

  //Constrain 
  xMov = constrain(xMov,-1000,1000);
  yMov = constrain(yMov,-1000,height+500);

  for (var i = paint.length-1; i >= 0; i--) {
    paint[i].show();
  }
}
