
var song;
var song1;

var drip = [];
var paint = [];
var cones2 = [];


var traveler = [];

var travXPos = 0;

//Microbe array position 
var xMov = 0;
var yMov = 0;

var xMov2 = 0;
var yMov2 = 0;

function setup() {

  //Be somebody - Be as big as the window
  createCanvas(windowWidth,windowHeight);
  //song = loadSound("bass.mp3", loaded); 
  song1 = loadSound("pulse.mp3", loaded); 
  background(215);
}

function loaded(){
  //song.loop();
  song1.loop();

}


function draw() {

    push();
    //pushTravelers();
    pop();

    push();
    translate(width/2, height/2);
    pushPaintClass();
    pop();

    push();
    //pushCone2Class();
    pop();
    pushTraveler2()
    garbageMan();
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

  if ( s > 10 && s < 11 ){
    yMov = -1000;
    xMov = random(0,width);
  }

  //Constrain 
  xMov = constrain(xMov,0,width);
  yMov = constrain(yMov,-1000,height+100);

  for (var i = paint.length-1; i >= 0; i--) {
    paint[i].show();
  }
}

function pushCone2Class() {
  var s = second();
//if(s > 30 && s < 40){
  cones2.push(new Cone(xMov2, yMov2, 150, 150, 150));

  var choice = random(0,4);

  //dice roll conditionals 
  if (choice < 1 ){
    xMov2 = xMov2 - 5;
  } else if (choice < 2 ){
    xMov2 = xMov2 + 15;
  } else if (choice < 3 ){
    yMov2 = yMov2 + 25;
  } else {
    yMov2 = yMov2 - 5;
  }

  if ( s > 10 && s < 11 ){
    yMov2 = -1000;

    xMov2 = random(0,width);
  }

  //Constrain 
  xMov2 = constrain(xMov2,0,width);
  yMov2 = constrain(yMov2,-1000,height+100);
//print(xMov);

  for (var i = cones2.length-1; i >= 0; i--) {
    cones2[i].show();
  }
}
//}


//Cone Class
function Paint(tempX, tempY, tempR, tempG, tempB) {
  //Microbe Constructor Variables
  this.x = tempX;
  this.y = tempY;

  this.time = 0.0;  
  this.decrement = .5;
  this.increment = .01;
  this.o = 127;
 // this.circleW = random(0, 100);
  //this.xPos = tempX;
  //this.yPos = tempY;
  this.r = tempR;
  this.g = tempG;
  this.b = tempB;
  this.rspeed = .45;
  this.gspeed = .45;    
  this.bspeed = .45;

  this.w = 25;
  //this.choice = random(0,4);
  //this.divide = tempDivide;

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
function Traveler2(tempX, tempWidthNoise, tempShade) {
  //Microbe Constructor Variables
  this.xPos = tempX;
  //this.yPos = tempY;
  this.s = second();
  this.wn = tempWidthNoise;

  this.shade = tempShade;
  this.gird  = .001;
  this.time = 0.0;  
  this.increment = .005;
  this.sw = 0;
  this.gSpeed = 1;

  //Show, grow and color fade functionality

    this.n = noise(this.time)*height;
    this.time = this.time + this.increment;

    stroke(this.shade);
    strokeWeight(this.sw);
    fill(this.shade,this.shade,this.shade,100);
    ellipse(this.xPos, this.n, this.n/this.wn+this.gird, this.n/this.wn+this.gird);

    this.sw += this.increment;

    this.xPos = this.xPos + 4;
    this.n += 1;
    if (this.xPos>width){
      this.xPos = -6;
  }
}


//Microbe Traveler Class
function Traveler(tempX, tempWidthNoise, tempShade) {
  //Microbe Constructor Variables
  this.xPos = tempX;
  //this.yPos = tempY;
  this.s = second();
  this.wn = tempWidthNoise;

  this.shade = tempShade;
  this.gird  = .001;
  this.time = 0.0;  
  this.increment = .005;
  this.sw = 0;
  this.gSpeed = 1;

  //Show, grow and color fade functionality
  this.show = function() {  
    this.n = noise(this.time)*height;
    this.time = this.time + this.increment;

    stroke(this.shade);
    strokeWeight(this.sw);
    fill(this.shade,this.shade,this.shade,100);
    ellipse(this.xPos, this.n, this.n/this.wn+this.gird, this.n/this.wn+this.gird);

    this.sw += this.increment;

    this.xPos = this.xPos + 4;
    this.n += 1;
    if (this.xPos>width){
      this.xPos = -6;

    }
  }
}

function pushTraveler2(){
    Traveler2(travXPos,30,215);

}

//Push Traveler Class Function - continuously pushes new travelers under certain time conditions. 
function pushTravelers() {
  this.s = second();

  traveler.push(new Traveler(travXPos,30,215));

  for (var i = traveler.length-1; i >= 0; i--) {
    traveler[i].show();
  }
  
    //Constrain 
  xMov = constrain(xMov,0,width);
  yMov = constrain(yMov,-1000,height+100);
 

}


function garbageMan() {
  //Constrain lines to 15 at a time
  if (paint.length > 500){
    paint.splice(0,1); 
  }



}