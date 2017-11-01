/* var row = localStorage.getItem("r");
var column = localStorage.getItem("c"); */
function Brick(x, y, width, height, color,i,j,row,column,count1) {
	this.x = x;
	this.y = y;
    this.i = i;
    this.j = j;
	this.height = height;
	this.width = width;
	this.row = row;
	this.column = column;
	this.color = color;
    this.count1 = count1;
	this.state = true;

	this.draw = function(context) {
		context.save();
		
		context.translate(this.x, this.y);
		//console.log("Bricks i and j values "+i+" and "+j);
		
		context.fillStyle = this.color;
		
		context.fillRect (0,0,this.width,this.height);
		
		context.restore();
	}
	
	// detects collision between the brick and ball
	this.collide = function(ball) {
		//var brk=new Audio("break.mp3");
		if((this.state == true) &&
		   (ball.x - ball.radius <= this.x + this.width &&
		   ball.x + ball.radius >= this.x &&
		   ball.y - ball.radius <= this.y + this.height &&
		   ball.y + ball.radius >= this.y)&&(row==i && column==j)) 
		{
			 this.state = false;
			console.log("entered the value of i and j is " + i + " and " + i);
			console.log("entered the value of i and j is " + row + " and " + column);	
			ball.dy = - ball.dy;
			
			
			try{
				if( bricks[row-1][column].state!=false)
				{
				  bricks[row-1][column].state = false;
				  obj.count2++;
				  console.log("entered rowup");
				}
			}
			catch(e)
			{
				console.log("the value of i and j is " + row + " and " + column);
				
			}
			/* try{
				if(bricks[i+1][j])
				{
				  bricks[i+1][j].state = false; 
				 obj.count2++;
				 console.log("entered rowdown");
				}
			}
			catch(e)
			{
				console.log("the value of i and j is " + row + " and " + column);
				
			} */
			try{
				if( bricks[row][column-1].state!=false)
				{
				  bricks[row][column-1].state = false;
				 obj.count2++;
				 console.log("entered column");
				}
			}
			catch(e)
			{
				console.log("the value of i and j is " + row + " and " + column);
				
			}
			try{
				if(bricks[row][column+1].state!=false)
				{
				  bricks[row][column	+1].state = false;
				  obj.count2++;
				  console.log("entered column");
				}
			}
			catch(e)
			{
				console.log("the value of i and j is " + row + " and " + column);
				
			}
			try{
				if(bricks[row+1][column].state!=false)
				{
				  bricks[row+1][column].state = false; 
				 obj.count2++;
				 console.log("entered rowdown");
				}
			}
			 catch(e)
			{
				console.log("the value of i and j is " + row + " and " + column);
				
			} 
			console.log("the value of obj.count2 is " + obj.count2);
			console.log("the i and j values are " +i+" and "+j);
			return true;
			
		}
		else if ((this.state == true) &&
		   (ball.x - ball.radius <= this.x + this.width &&
		   ball.x + ball.radius >= this.x &&
		   ball.y - ball.radius <= this.y + this.height &&
		   ball.y + ball.radius >= this.y))
		{
			 this.state = false;
			console.log("the value of i and j is " + row + " and " + column);
			//count1++;
			ball.dy = - ball.dy;
			//brk.play();
			
			return true;
			//return count1;
		}
		else {
			return false;
		}
	}
}