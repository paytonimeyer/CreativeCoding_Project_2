var scribble = [];

//Scribble class
function Scribble() {
  //Scribble class variables
  this.position = createVector(width/2,height/2);
  this.velocity = createVector();
  this.acceleration = createVector();
  this.topspeed = 5;
  this.o = 215;
  this.oSpeed = .45;

  this.update = function() {
    this.acceleration = p5.Vector.random2D();
    this.acceleration.mult(random(2));
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
  };

  //Display the scribble and fade the opacity to create an interesting visual effect
  this.display = function() {
    noStroke();
    fill(215, 215, 215, this.o);
    ellipse(this.position.x, this.position.y, 1, 1);
  
    this.o = this.o + this.oSpeed;
    if ((this.o > 254 || this.o < 0 )) {
      this.oSpeed = this.oSpeed * -1;
    }
  };

  //This will reset the scribble to enter the screen again if it leaves
  this.checkEdges = function() {

    if (this.position.x > width) {
      this.position.x = 0;
    }
    else if (this.position.x < 0) {
      this.position.x = width;
    }

    if (this.position.y > height) {
      this.position.y = 0;
    }
    else if (this.position.y < 0) {
      this.position.y = height;
    }
  };
}

//Initial scribble setup. This function will go into draw.
function makeScribble(){
  for (var i = 0; i < 3; i++) {
     scribble[i] = new Scribble(); 
  }
}

//This function will run the scribble class function once in draw
function moveScribble(){
  for (var i = 0; i < scribble.length; i++) {
    scribble[i].update();
    scribble[i].checkEdges();
    scribble[i].display(); 
  }
}


