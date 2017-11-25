//Micron Array
var microns = [];
var surpriseMicrons = [];

//Micron class
function Micron(tempW, tempShade) {
  this.w = tempW;
  this.shade = tempShade;
  this.position = createVector(random(width),random(height));
  this.velocity = createVector();
  this.acceleration = createVector();
  this.topspeed = 1;

  this.update = function() {
    // Compute a vector that points from position to mouse
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


function makeMicrons(){
  for (var i = 0; i < 10; i++) {
     microns[i] = new Micron(1, 127); 
  }
}



function moveMicrons(){
  for (var i = 0; i < microns.length; i++) {
    microns[i].update();
    microns[i].display(); 
  }
}

function makeSurpriseMicrons(){

  var s = second();

  //create travelers when seconds are between 10 and 25
  if(s === 46.1){
    //for (var i = 0; i < 5; i++) {
      surpriseMicrons.push(new Micron(5, 15));
    //}
  }
  print(s);
}


function moveSurpriseMicrons(){

  for (var i = 0; i < surpriseMicrons.length; i++) {
    surpriseMicrons[i].update();
    surpriseMicrons[i].display(); 
  }

}

