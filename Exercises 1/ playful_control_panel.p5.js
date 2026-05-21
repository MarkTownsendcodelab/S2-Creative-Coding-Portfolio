
let cols = 20;
let rows = 20;
let cellWidth, cellHeight;
let grid = [];

function setup() {
  createCanvas(600, 600);
  cellWidth = width / cols;
  cellHeight = height / rows;
  
  for (let i = 0; i < cols * rows; i++) {
    grid.push(false);
  }
}

function draw() {
  background(240);
  
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let index = x + y * cols;
      let xPos = x * cellWidth;
      let yPos = y * cellHeight;
      
      if (grid[index]) {
        fill(255, 100, 100); 
      } else {
        fill(255);
      }
      stroke(0);
      rect(xPos, yPos, cellWidth, cellHeight);
    }
  }
}

function mousePressed() {
 
  let cellX = floor(mouseX / cellWidth);
  let cellY = floor(mouseY / cellHeight);
  
  
  if (cellX >= 0 && cellX < cols && cellY >= 0 && cellY < rows) {
    let index = cellX + cellY * cols;
    grid[index] = !grid[index]; 
  }
}