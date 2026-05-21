function setup() {
  createCanvas(500, 500);
  
  
  noLoop(); 
}

function draw() {
  background(250); 
  
  
  let step = 10;    
  
  let numSteps = 59;  
  
  
  
  translate(20, 20);

  for (let j = 0; j < numSteps; j++) {
    for (let i = 0; i < numSteps; i++) {
      
      let xPos = i * step; 
      let yPos = j * step; 
      
      
      if (random(100) < 15) {
       
      }
      
     
      let jitterX = random(-5, 5); 
      let jitterY = random(-5, 5);
      
     
      noFill();
      stroke(20, 20, 20, 200); 
      strokeWeight(1.5);
      
     
      rect(xPos + jitterX, yPos + jitterY, step - 5, step - 5);
    }
  } 
}


function mousePressed() {
  redraw(); 
}