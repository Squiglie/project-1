let columns = 4;
let rows = 2;
let colSize;
let rowSize;
let moonPhases = [];
let moonImages = [];
let globalFrameCount = 0;

function setup() {
  createCanvas(800, 400);
  colSize = width / columns;
  rowSize = height / rows;

  // Initialize moon phases at correct grid positions
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      let index = j * columns + i;
      moonPhases.push(new Moonphase(colSize / 2 + i * colSize, rowSize / 2 + j * rowSize, 100, index));
    }
  }
}

function preload() {
  for (let i = 0; i < 8; i++) {  // Load only 8 phase images
    let imageName = "moonphases/1x/phase" + i + ".png";
    let img = loadImage(imageName);
    moonImages.push(img);
  }
}

function draw() {
  background(0);

  for (let i = 0; i < moonPhases.length; i++) {
    let phase = moonPhases[i];

    // Stagger the phase updates using the index
    if (globalFrameCount % (30 + i * 5) === 0) {
      phase.incrementPhase();
    }

    phase.display();
  }

  globalFrameCount++;
}

class Moonphase {
  constructor(x, y, size, index) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.currentPhase = index % 8; // Start at different phases
  }

  display() {
    let img = moonImages[this.currentPhase];
    imageMode(CENTER);
    image(img, this.x, this.y, this.size, this.size);
  }

  incrementPhase() {
    this.currentPhase = (this.currentPhase + 1) % 8;
  }
}
