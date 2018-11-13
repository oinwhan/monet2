function setup() {
  createCanvas(640,360);
  background(59,142,255,50);
}

function draw() {
  if (mouseIsPressed) {
    fill(232,35,162,50);
    ellipse(mouseX, mouseY, mouseX%20+10, mouseX%20+10);
  }
}
