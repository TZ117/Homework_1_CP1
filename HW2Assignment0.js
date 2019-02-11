var bubbles = [];
var speed;
var width

function setup() {
	createCanvas(400, 400);
}

function draw() {
  
	var leftLineX = width*.1725;
	var rightLineX = width*.9125;
	var topLineY = height*.4;
	var middleLineY = height*.8;
	var bottomLineY = height*.9;
	background(240);
	noStroke();
	strokeCap(SQUARE);
	fill(220, 0, 0); //Red
	rect(leftLineX, 0, width*.8275, middleLineY);
  width= width+.4
 
	fill(0, 0, 220); //Blue
	rect(0, middleLineY, leftLineX, width*.2);

	fill(250, 21, 94); //Yellow
	rect(rightLineX, bottomLineY, width*.0875, height*.1);

	stroke(0); //draw black
	strokeWeight(10);
	line(leftLineX, 0, leftLineX, height);
	line(0, middleLineY, width, middleLineY);

	strokeWeight(15);
	line(0, topLineY, leftLineX, topLineY);

	strokeWeight(10);
	line(rightLineX, middleLineY, rightLineX, height);

	strokeWeight(15);
	line(rightLineX, bottomLineY, width, bottomLineY);

}
