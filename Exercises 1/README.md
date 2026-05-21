
For my first experiment, I wanted to make something that felt like an old-school pixel art program or a grid of mechanical switches. I started with a basic nested loop grid that we looked at in class, since I already knew how to layout squares on a canvas using columns and rows.


To turn the static grid into something you can actually play with, I created an array called grid to hold a true/false state for every single square. When you click anywhere on the canvas, the sketch uses floor(mouseX / cellWidth) to figure out exactly which row and column your mouse is over. It then flips that specific square's state. If a square is "true," it highlights in red. If you click it again, it turns back to white. This makes it super easy to draw basic shapes or just toggle things on and off like a real button panel.


One annoying issue I ran into at first was that if I clicked right on the very edge of the canvas, the math would break and the code would crash because it was looking for a square that didn't exist in the array. I fixed this by adding a quick if statement to make sure the click is only registered if it's actually inside the boundaries of the grid. After adding that check, the whole thing worked perfectly and felt really responsive.
