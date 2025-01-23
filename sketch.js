function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  bird(40, 40);
}

function bird(){
  push();
  translate(x, y);
  scale(0.2);
  stroke(10);
  beginShape();
  vertex(0, height);
  vertex(width/3, 0);
  vertex(width/2, height);
  vertex((width/2)*2,0);
  vertex(width, height);
  endShape();
  pop();
}
  
