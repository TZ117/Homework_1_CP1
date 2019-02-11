function setup() {
  createCanvas(400, 400);
}

var x = 10;
var changeInX = 3;
var speed = 1

function draw() {
  background(251);
	fill(200,220,200);
  
  
  ellipse(200, 200, x);
  x = x + speed
 x = x + changeInX;


  if (x > 260) {
    changeInX = -5;
  }

  if (x < 0) {
    changeInX = 11;
  }
}
