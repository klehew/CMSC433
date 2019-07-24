// Kathy LeHew
// 7-1-2019
// CMSC433

var num = Math.floor((Math.random() * 10) + 1);

window.addEventListener("keypress", event => {
	if (event.key === "c") {
		var num = Math.floor((Math.random() * 10) + 1);
		location.reload();
		}
});

document.body.style.zoom = "100%";

window.addEventListener("keydown", event => {
	if (event.key === "ArrowDown") {
		var body = document.getElementById("body");
		var zoom = parseInt(body.style.zoom) + 10 + "%";
		body.style.zoom = zoom;
		}
	if (event.key === "ArrowUp") {
		var body = document.getElementById("body");
		var bodyZoom = parseInt(body.style.zoom);
		console.log(bodyZoom);
		if(bodyZoom < 20){
			alert("Cannot zoom in any farther!");
			return;}
		var zoom = bodyZoom - 10 + "%";
		body.style.zoom = zoom;
		}
});

(function() {
	var myCanvas = document.createElement("canvas");
	myCanvas.width = 500;
	myCanvas.height = 500;
	document.body.appendChild(myCanvas);
	var ctx = myCanvas.getContext("2d");
	
	function checkIfBelongsToMandelbrotSet(x,y){
	var realComponentOfResult = x;
	var imaginaryComponentOfResult = y;
	var maxIterations = 50;
	
	for(var i = 0; i < maxIterations; i++){
		var tempRealComponent = realComponentOfResult * realComponentOfResult
								- imaginaryComponentOfResult * imaginaryComponentOfResult
								+ x;
								
		var tempImaginaryComponent = 2 * realComponentOfResult * imaginaryComponentOfResult
									+ y;
									
		realComponentOfResult = tempRealComponent;
		imaginaryComponentOfResult = tempImaginaryComponent;
}

if (realComponentOfResult * imaginaryComponentOfResult < 5)
	return (i/maxIterations * 50);

return 0;
}

var magnificationFactor = 200;
var panX = 2;
var panY = 1.5;
for(var x=0; x < myCanvas.width; x++){
	for(var y=0; y < myCanvas.height; y++){
		var belongsToSet = checkIfBelongsToMandelbrotSet(x/magnificationFactor - panX,
														 y/magnificationFactor - panY);
		if(belongsToSet != 0){
			if (num == 1){
				ctx.fillStyle = 'blue';}
			if (num == 2){
				ctx.fillStyle = 'red';}
			if (num == 3){
				ctx.fillStyle = 'yellow';}
			if (num == 4){
				ctx.fillStyle = 'purple';}
			if (num == 5){
				ctx.fillStyle = 'green';}
			if (num == 6){
				ctx.fillStyle = 'orange';}
			if (num == 7){
				ctx.fillStyle = 'aqua';}
			if (num == 8){
				ctx.fillStyle = 'gray';}
			if (num == 9){
				ctx.fillStyle = 'magenta';}
			if (num == 10){
				ctx.fillStyle = 'pink';}
			ctx.fillRect(x,y,1,1);}
		else{
			ctx.fillStyle = 'black';
			ctx.fillRect(x,y,1,1);}
	}
}
	
})();