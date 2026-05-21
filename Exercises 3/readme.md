
For the final experiment, I wanted to build a complex particle system where a swarm of objects moves around the screen and reacts organically whenever you click on them. Because the vector physics code is pretty heavy, I used AI to help me build the initial code structure and object-oriented classes.


The system uses a JavaScript Particle class, where every single dot on the screen has its own position, speed, and acceleration. The cool part happens when you click the mouse: it triggers a custom repelFrom() method. The code calculates the distance between your click and every particle. If a particle is close to your mouse, it gets blasted away in the opposite direction like an invisible shockwave, before eventually settling down and floating across the screen again.


Working with AI for this assignment was a huge help because it did the heavy lifting for the complex physics math and vector logic. My job was taking that framework and customizing it to look right. I added a low alpha transparency to the background (background(20, 20, 35, 50)) which creates really smooth neon trailing effects as the particles fly away. I also hooked up the mouse press interactions. It showed me that AI is great for setting up the scaffolding, but you still need a human eye to tweak the parameters and make it fun to play with.
