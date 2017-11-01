function Ball(x, y, radius, img) {
	this.x = x;
	this.y = y;
	
	this.dx = 5;
	this.dy = 5;
	
	this.dxRange = this.dx * 2;
	
	this.radius = radius;
	
	//this.color = color;

	this.draw = function(context) {
		context.save();
		var pattern=context.createPattern(img,'repeat');
		
		context.translate(this.x, this.y);
	  
		context.fillStyle = pattern;
		
		context.beginPath();
		context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
		context.closePath();
		
		context.fill();
		
		context.restore();
	}
	
	// prevents the ball from leaving the stage
	// (except via the bottom of the screen)
	this.bound = function(canvas) {
		if(this.x -(this.radius / 2) <= 0 ||
		   this.x + (this.radius / 2) >= canvas.width-160) {
			this.dx = - this.dx;
		}
		if(this.y - (this.radius / 2) <= 0) {
			this.dy = - this.dy;
		}
	}
}