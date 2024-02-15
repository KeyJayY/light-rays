let walls = [];
let ray;
let source;

function setup() {
	createCanvas(500, 500);
	walls.push(new Wall(-10, -10, width + 10, -10));
	walls.push(new Wall(width + 10, -10, width + 10, height + 10));
	walls.push(new Wall(width + 10, height + 10, -10, height + 10));
	walls.push(new Wall(-10, height + 10, -10, -10));
	for (let i = 0; i < 10; i++) {
		walls.push(
			new Wall(random(width), random(height), random(width), random(height))
		);
	}
	source = new Source();
}

function draw() {
	background(0);
	for (let wall of walls) {
		wall.draw();
	}
	source.changePosition(mouseX, mouseY);
	source.checkIntersections(walls);
	source.draw();
}
