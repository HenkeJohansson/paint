

var saveBtn = document.getElementById('save-btn');

saveBtn.addEventListener('click',saveImage);

function saveImage() {
	var data = canvas.toDataURL();

	var request = new XMLHttpRequest();

	request.onreadystatechange = function() {
		if ( request.readyState === 4 && request.status === 200 ) {
			var response = request.responseText;
			console.log(response);
			alert('Bild Sparad!');
		}
	};

	request.open('POST', 'save.php', true);
	request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	request.send('img=' + data);


}