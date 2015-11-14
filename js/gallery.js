

function getImages() {

	var request = new XMLHttpRequest();
}

function saveImage() {
	var data = canvas.toDataURL();

	var request = new XMLHttpRequest();

	request.onreadystatechange = function() {
		if ( request.readyState === 4 && request.status === 200 ) {
			var response = request.responseText;
		}
	};

	request.open('POST', 'save.php', true);
	request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	request.send('img=' + data);


}