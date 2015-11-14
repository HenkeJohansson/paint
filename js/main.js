
var w = window,
	d = document,
	e = d.documentElement,
	g = d.getElementsByTagName('body')[0],
	x = w.innerWidth || e.clientWidth || g.clientWidth,
	y = w.innerHeight|| e.clientHeight|| g.clientHeight;


function windowResize() {
	//
	setColorsHeight();
}
window.addEventListener('resize', windowResize);



function setColorsHeight() {
	var upperCont = document.getElementById('upper-content').clientHeight,
		colors = document.getElementById('colors'),
		wh = w.innerHeight;

	var remainingHeight = wh - (upperCont + 20);

	colors.setAttribute('style', 'height:' + remainingHeight + 'px;' );
}
setColorsHeight();