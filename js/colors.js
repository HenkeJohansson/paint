

function byteToHex(n) {
	var nybHexString = "0123456789ABCDEF";
	return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}

function RGBToColor(r,g,b) {
	return '#' + byteToHex(r) + byteToHex(g) + byteToHex(b);
}

var frequency = 0.10,
	amplitude = 127,
	center = 128,
	width = 127,
	colors = ['#000000', '#5F4135', '#363636', '#DADADA','#ffffff'];

function makeColorGradient(frequency1, frequency2, frequency3,
						   phase1, phase2, phase3,
						   center, width, len) {
	
	if (center === undefined) {
		center = 128;
	}
	if (width === undefined) {
		width = 127;
	}
	if (len === undefined) {
		len = 50;
	}

	for (var i = 0; i < len; ++i) {
		var red = Math.sin(frequency1 * i + phase1) * width + center;
		var grn = Math.sin(frequency2 * i + phase2) * width + center;
		var blu = Math.sin(frequency3 * i + phase3) * width + center;
		colors.push( RGBToColor(red, grn, blu) );
	}
}

// makeColorGradient(0.3,0.3,0.3,0,2,4);
// makeColorGradient(0.10,0.10,0.10,0,2,4, 128, 127);
makeColorGradient(frequency,frequency,frequency,0,2,4, center, width, 70);


var swatches = document.getElementsByClassName('swatch');

for ( var i = 0, n = colors.length; i < n; i++ ) {
	var swatch = document.createElement('div');
	swatch.className = 'swatch';
	swatch.style.backgroundColor = colors[i];
	swatch.addEventListener('click', setSwatch);
	document.getElementById('colors').appendChild(swatch);
}

function setColor(color) {
	context.fillStyle = color;
	context.strokeStyle = color;
	var active = document.getElementsByClassName('active')[0];
	if (active) {
		active.className = 'swatch';
	}
	document.getElementById('activeColor').style.backgroundColor = color;
}

function setSwatch(e) {
	var swatch = e.target;
	setColor(swatch.style.backgroundColor);
	swatch.className += ' active';
}

setSwatch( { target: document.getElementsByClassName('swatch')[0] } );























var colorsPredef = [
	'#000000','grey','#ffffff',
	'#EB110E','#B81506','#911100','#6F0806','#4A0000','#4A0000',
	'#F9C112','#FF6D1F','#FF6517','#FA5B0F','#EF5411','#BD420D',
	'#54BE68','#2CB060','#1AA261','#0C8D64','#037868','#024C42',
	'#00BAB5','#00918F','#006269','#003D4E','#00293E','#00123E',
	'#007ACC','#005AB7','#0047AB','#003AA3','#002B92','#193763',
	'#9768D1','#7B52AB','#553285','#36175E','#25064C','#3A063E'
];


var reds = ['#EB110E','#B81506','#911100','#6F0806','#4A0000'],
	greens = ['#54BE68','#2CB060','#1AA261','#0C8D64','#037868'],
	blues = ['#007ACC','#005AB7','#0047AB','#003AA3','#002B92'];