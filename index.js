//Canvas1
function drawGreenBox(id) {
    let doc = document.getElementById(id);
    let width = doc.offsetWidth;
    let height = doc.offsetHeight;
    let sketch = function (p) {
        p.setup = function () {
            p.createCanvas(width, height);
            p.background(0);
        }
        var x = 0;
        p.draw = function () {
            p.background(0);
            p.frameRate(2);
            let r = p.random(255); // r is a random number between 0 - 255
            let g = p.random(255); // g is a random number betwen 100 - 200
            let b = p.random(255); // b is a random number between 0 - 100
            //a = p.random(200,255); // a is a random number between 200 - 255

            p.noStroke();
            p.fill(r, g, b);
            p.rect(width/4, height/4, width/2, height/2);
        }
    };
    new p5(sketch, id);
}

//Canvas2
function boundBall(id) {
    let rad = 20; // Width of the shape
    let xpos, ypos; // Starting position of shape
    let xspeed = 2.8; // Speed of the shape
    let yspeed = 2.2; // Speed of the shape
    let xdirection = 1; // Left to Right
    let ydirection = 1; // Top to Bottom

    let doc = document.getElementById(id);
    let width = doc.offsetWidth;
    let height = doc.offsetHeight;
    let sketch = function (p) {
        p.setup = function () {
            p.createCanvas(width, height);
            p.noStroke();
            //p.frameRate(30);
            p.ellipseMode(p.RADIUS);
            // Set the starting position of the shape
            xpos = width / 2;
            ypos = height / 2;
        }
        p.draw = function () {
            p.background(102);
            xpos = xpos + xspeed * xdirection;
            ypos = ypos + yspeed * ydirection;
            if (xpos > width - rad || xpos < rad) {
                xdirection *= -1;
            }
            if (ypos > height - rad || ypos < rad) {
                ydirection *= -1;
            }
            p.ellipse(xpos, ypos, rad, rad);
        }
    };
    new p5(sketch, id);
}

