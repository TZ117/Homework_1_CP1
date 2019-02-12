var on = false

function setup() {
  createCanvas(400, 400);
}

// track the circle to draw next frame
var x = 25;
var y = 25;

function draw() {
  colorMode(RGB);
  stroke(255);
  // draw circle with random hue
  fill(random(200), 100, 100);
  if (on == true) {
fill (251,251,251)
  }
  ellipse(x, y, 20);
  ellipse(y, x, 20);
  // set up next circle
  x = x + 25;

  // if we hit the right edge, go down a line
  if (x > width - 25) {
    x = 25;
    y = y + 25;

  }
  if (x > 200) {
  }
  // if we hit the bottom edge, reset to top
  if (y > height - 25) {
    y = 25;
    on = !on
  }
}
