// Kathy LeHew
// 7-1-2019
// CMSC433

var maxLevels = 5;

function drawBranch(x, y, length, angle, level, context){
	if (level < maxLevels){
		var angle1 = (angle/180)*Math.PI;
		var newx = (length*(Math.cos(angle1))) + x;
		var newy = (length*(Math.sin(angle1))) + y;
		context.beginPath();
		context.moveTo(x,y);
		context.lineTo(newx,newy);
		context.stroke();
		level++;
		length /= 2;
		drawBranch(newx,newy,length,angle,level,context);
		drawBranch(newx,newy,length,angle-45,level,context);
		drawBranch(newx,newy,length,angle+45,level,context);
		drawBranch(newx,newy,length,angle-180,level,context);
		drawBranch(newx,newy,length,angle+180,level,context);
		drawBranch(newx,newy,length,angle-135,level,context);
		drawBranch(newx,newy,length,angle+135,level,context);
	}
}

$(document).ready(function() {
	var c = document.getElementById("myCanvas");
	var context = c.getContext("2d");
	var x = (c.width)/2;
	var y = (c.height)/2;
	c.lineWidth = "default";
	var length = 100;
	var level = 0;
	var angle = 0;
	drawBranch(x,y,length,angle,level,context);
	drawBranch(x,y,length,angle+45,level,context);
	drawBranch(x,y,length,angle-45,level,context);
	drawBranch(x,y,length,angle+90,level,context);
	drawBranch(x,y,length,angle-90,level,context);
	drawBranch(x,y,length,angle+180,level,context);
	drawBranch(x,y,length,angle-180,level,context);
	drawBranch(x,y,length,angle+135,level,context);
	drawBranch(x,y,length,angle-135,level,context);
})

