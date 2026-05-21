
let particles = [];

function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(20, 20, 35, 50); 
  
  for (let p of particles) {
    p.update();
    p.display();
  }
}

function mousePressed() {
  
  for (let p of particles) {
    p.repelFrom(mouseX, mouseY);
  }
}


class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector(0, 0);
    this.maxSpeed = 3;
    this.size = random(4, 8);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0); 
    
    
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.y < 0) this.pos.y = height;
    if (this.pos.y > height) this.pos.y = 0;
  }

  display() {
    noStroke();
    fill(100, 255, 200);
    ellipse(this.pos.x, this.pos.y, this.size);
  }

  repelFrom(targetX, targetY) {
    let target = createVector(targetX, targetY);
    
    let force = p5.Vector.sub(this.pos, target);
    let distance = force.mag();
    
    if (distance < 150) { 
      force.normalize();
      let strength = map(distance, 0, 150, 20, 0); 
      force.mult(strength);
      this.acc.add(force);
    }
  }
}