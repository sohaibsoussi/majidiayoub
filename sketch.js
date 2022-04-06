/* let angle =0;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(255);
  rectMode(CENTER);
  noFill()
  stroke(noise(0,255),noise(0,255),random(0,255))
  translate(mouseX-width/2,mouseY-height/2);
  rotateX(angle);
  rotateY(angle*0.3);
  rotateZ(angle*0.5);
  
  //box(50,50,200)
  sphere(400);

  angle+=0.07
} */
var cols, rows;
var scl = 30;
var w = 1400;
var h = 1000;

var flying = 0;

var terrain = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  cols = w / scl;
  rows = h / scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}

function draw() {
  flying -= 0.1;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2;
    }
    yoff += 0.2;
  }

  background(0);
  translate(0, 50);
  rotateX(PI / 3);
  fill(200, 200, 200, 50);
  noStroke();
  translate(-w / 2, -h / 2);
  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    endShape();
  }
}