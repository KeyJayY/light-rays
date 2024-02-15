class Source {
	constructor(x, y) {
		this.position = createVector(x, y);
		this.rays = [];
		for (let i = 0; i < 6.27; i += 0.01) {
			this.rays.push(new Ray(this.position, i));
		}
	}
	checkIntersections(walls) {
		for (let ray of this.rays) {
			ray.getIntersection(walls);
		}
	}
	draw() {
		for (let ray of this.rays) {
			ray.draw();
		}
	}
	changePosition(x, y) {
		this.position.set(x, y);
	}
}
