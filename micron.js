//Micron Array
var microns = [];
var surpriseMicrons = [];

//Micron class
function Micron(tempW, tempShade) {
  this.w = tempW;
  this.shade = tempShade;
  //will create each vector at a random location on the canvas
  this.position = createVector(random(width),random(height));
  this.velocity = createVector();
  this.acceleration = createVector();
  //speed cannot exceed 1
  this.topspeed = 1;

  this.update = function() {

    var mouse = createVector(mouseX,mouseY);
    this.acceleration = p5.Vector.sub(mouse,this.position);
    // Set magnitude of acceleration
    this.acceleration.setMag(0.2);

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
  };

  this.display = function() {
    noStroke();
    fill(this.shade);
    ellipse(this.position.x, this.position.y, this.w, this.w);
  };
}

//initalize microns on the canvas. This will go in setup
function makeMicrons(){
  for (var i = 0; i < 10; i++) {
     microns[i] = new Micron(1, 127); 
  }
}


//move microns each frame. This function will go in draw
function moveMicrons(){
var s = second();

if (s === 30){
  for (var i = 0; i < 10; i++) {
     microns[i] = new Micron(1, 127); 
  }
}

  for (var i = 0; i < microns.length; i++) {
    microns[i].update();
    microns[i].display(); 
  }

print(s);
}



