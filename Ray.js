class Ray {
	constructor(position, angle) {
		this.position = position;
		this.direction = p5.Vector.fromAngle(angle);
	}
	getIntersection(walls) {
		let minDist = Infinity;
		let minDistIntersection;
		for (let wall of walls) {
			let x1 = wall.a.x;
			let y1 = wall.a.y;
			let x2 = wall.b.x;
			let y2 = wall.b.y;

			let x3 = this.position.x;
			let y3 = this.position.y;
			let x4 = this.position.x + this.direction.x;
			let y4 = this.position.y + this.direction.y;

			let div = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
			let t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / div;
			let u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / div;
			if (t >= 0 && u >= 0 && t <= 1) {
				let newX = x1 + t * (x2 - x1);
				let newY = y1 + t * (y2 - y1);
				if (dist(x3, y3, newX, newY) < minDist) {
					minDist = dist(x3, y3, newX, newY);
					minDistIntersection = createVector(newX, newY);
				}
			}
		}
		this.intersection = minDistIntersection;
	}
	draw() {
		if (this.intersection) {
			stroke(255, 50);
			line(
				this.position.x,
				this.position.y,
				this.intersection.x,
				this.intersection.y
			);
		}
	}
}
