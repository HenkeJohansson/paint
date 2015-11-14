

var canvas = document.getElementById('canvas'),
	context = canvas.getContext('2d'),
	headerHeight = document.getElementById('header').height,
	toolbarWidth = document.getElementById('toolbar').width,
	radius = 10,
	dragging = false;

canvas.width = window.innerWidth - 250;
canvas.height = window.innerHeight - 100;

context.lineWidth = radius*2;

var drawDot = function(e) {
	if ( dragging ) {
		context.lineTo( (e.clientX - 250), (e.clientY - 100) );
		context.stroke();
		context.beginPath();
		context.arc( (e.clientX - 250), (e.clientY - 100) , radius, 0, Math.PI*2);
		context.fill();
		context.beginPath();
		context.moveTo( (e.clientX - 250), (e.clientY - 100) );
	}
};

var engage = function(e) {
	dragging = true;
	drawDot(e);
};

var disengage = function() {
	dragging = false;
	context.beginPath();
	var history = context.getImageData(0,0, canvas.width, canvas.height);
};

function clearCanvas(canvas) {
	canvas.width = window.innerWidth - 250;
	canvas.height = window.innerHeight - 100;
}

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', drawDot);
canvas.addEventListener('mouseup', disengage);

var sizeCanvas = function() {
	var image = context.getImageData(0,0, canvas.width, canvas.height);
	canvas.width = window.innerWidth - 250;
	canvas.height = window.innerHeight - 100;
	context.putImageData(image, 0, 0);
};

if (window.attachEvenet) {
	window.attachEvent( 'onresize', sizeCanvas() );
} else if (window.addEventListener) {
	window.addEventListener( 'resize', sizeCanvas );
}