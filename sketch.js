/*.....DRAWING MACHINE.....*/

//Setup
function setup() {
  //Set canvas to size of browser
  createCanvas(windowWidth,windowHeight);
  background(215);
  //Make micron class
  makeMicrons();
  //Make scribble class
  makeScribble();
}

//Draw 
function draw() {
  push();
  //translate function will set the center point of paint class to center of canvas
  translate(width/2, height/2);
  //Paint class
  pushPaintClass();
  pop();

  //eraser function
  eraser(30, 4);
    //eraser function
  blackTraveler(250, 6);
  //micron + scribble class 
  moveMicrons();
  moveScribble();

  //initiate garbage man class who will splice unneeded indices
  garbageMan();
}


//Click to reset the machine
function mousePressed(){
  //resets the background and microns
  background(215);
  makeMicrons();

}




