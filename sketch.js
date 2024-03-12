function setup() {
  createCanvas(500, 500);
  background(220);
  for (x = 0; x < 30; x += 2){
    lollipop(random(100,width - 20), random(230,height - 30), random(3, 150), color(255, 120, 100))
  }
}

function lollipop(x, y, size, flavour){
  fill(30, 255, 200);
  noStroke();
  arc(x, y - size, 60, 30, 150, PI + QUARTER_PI, CHORD)
  fill(flavour);
  ellipseMode(CORNER);
  ellipse(x - 60, y - size - 70, 30, 50);
}