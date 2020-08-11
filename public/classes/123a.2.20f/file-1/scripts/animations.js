const animations = [
    {
        container: "animation-1",
        sketch: p => {
            let x = 0;
            let y = 0;

            p.setup = () => {
                const container = document.getElementById("animation-1");
                p.createCanvas(container.offsetWidth, 400);
                p.noStroke();
            };

            p.draw = () => {
                p.background(51);

                // lerp() calculates a number between two numbers at a specific increment.
                // The amt parameter is the amount to interpolate between the two values
                // where 0.0 equal to the first point, 0.1 is very near the first point, 0.5
                // is half-way in between, etc.

                // Here we are moving 5% of the way to the mouse location each frame
                x = p.lerp(x, p.mouseX, 0.05);
                y = p.lerp(y, p.mouseY, 0.05);

                p.fill(255);
                p.stroke(255);
                p.ellipse(x, y, 66, 66);
            };
        },
    },
];

animations.forEach(({ container, sketch }) => new p5(sketch, container));
