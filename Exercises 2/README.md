
I wanted to make a digital drawing canvas, but instead of just making a standard MS Paint clone, I wanted to experiment with a few different brush styles that react uniquely to how the user moves their mouse.

I set up a variable called brushType and used a keyPressed() function so that pressing the numbers 1, 2, 3, or 4 on the keyboard instantly switches your tool.

Brush 1 is just your basic marker line that connects your previous mouse position to your current one.

Brush 2 is a spray can effect. I used a for loop and the random() function to scatter tiny dots all around the mouse cursor instead of drawing a solid line.

Brush 3 is a dynamic speed brush. It uses the dist() function to calculate how fast you're dragging your wrist. The faster you move, the thicker the stroke gets.

Brush 4 is the weirdest one—it subverts expectations by mirroring whatever you draw on the left side over onto the right side using a width - mouseX formula, creating cool symmetry trails.


A major headache I had was that when I first started drawing, the paint would go all over my top menu text and ruin the UI. To fix it, I wrapped the drawing logic in an if statement that says mouseY > 40. This means the brush only activates if the mouse is below the gray menu bar, keeping the controls clean and readable.
