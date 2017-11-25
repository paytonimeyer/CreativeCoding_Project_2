//DRAWING MACHINE

//Setup
function setup() {
  //Set canvas to size of browser
  createCanvas(windowWidth,windowHeight);
  background(215);
  makeMicrons();
}



//Draw 
function draw() {
  push();
  makeSurpriseMicrons();
  moveSurpriseMicrons();
  pop();
   
  push();
  translate(width/2, height/2);
  pushPaintClass();
  pop();

  eraser();
  moveMicrons();

  garbageMan();
}


//Click to reset the machine
function mousePressed(){

    background(215);
    makeMicrons();

}




