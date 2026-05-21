
let brushType = 1;

function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
 
  fill(220);
  noStroke();
  rect(0, 0, width, 40);
  fill(0);
  textSize(14);
  text("Keys 1-4 change brush. Current Brush: " + brushType, 10, 25);


  if (mouseIsPressed && mouseY > 40) {
    handlePainting();
  }
}

function handlePainting() {
  if (brushType === 1) {
    
    stroke(0);
    strokeWeight(5);
    line(pmouseX, pmouseY, mouseX, mouseY);
  } 
  else if (brushType === 2) {
    
    stroke(0, 150, 255);
    strokeWeight(2);
    for (let i = 0; i < 10; i++) {
      let offsetX = random(-15, 15);
      let offsetY = random(-15, 15);
      point(mouseX + offsetX, mouseY + offsetY);
    }
  } 
  else if (brushType === 3) {
    
    let mouseSpeed = dist(pmouseX, pmouseY, mouseX, mouseY);
    stroke(255, 100, 100);
    strokeWeight(mouseSpeed); 
    line(pmouseX, pmouseY, mouseX, mouseY);
  } 
  else if (brushType === 4) {
    
    noStroke();
    fill(150, 50, 250, 30); 
    ellipse(mouseX, mouseY, 40, 40);
    ellipse(width - mouseX, mouseY, 40, 40); 
  }
}


function keyPressed() {
  if (key === '1') brushType = 1;
  if (key === '2') brushType = 2;
  if (key === '3') brushType = 3;
  if (key === '4') brushType = 4;
}