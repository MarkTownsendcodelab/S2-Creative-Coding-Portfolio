function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawCreature(200, 200, 1.0); 
  drawCreature(100, 100, 0.5); 
  
  
}

function drawCreature(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  fill(100, 200, 100);
  ellipse(0, 0, 100, 100);
  fill(255);
  ellipse(-20, -10, 20, 20); 
  ellipse(20, -10, 20, 20);  
  
  let mouthHeight = 15 + sin(frameCount * 0.1) * 10;
  
  fill(0); 
  ellipse(-20, -10, 8, 8); 
  ellipse(20, -10, 8, 8); 
  fill(250, 100, 100);
  ellipse(0, 20, 40, mouthHeight);
  
  
  pop();
}