 function setup() {
  createCanvas(500, 500); 
}
function draw() {
  background(220);
  
 
  
  let step = 25; 
  let numSteps = 20; 
  
 
  for (let j = 0; j < numSteps; j++) {
    
   
    for (let i = 0; i < numSteps; i++) {
      
    
      let xPos = i * step; 
      let yPos = j * step; 
      
      
      fill(100, 20, 1000);
      rect(xPos, yPos, step, step);
    }
    
  } 
}