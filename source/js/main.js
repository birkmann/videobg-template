function makeItGrey() {
	bgContext.drawImage(video, 0, 0, w, h);
	var pixelData = bgContext.getImageData(0, 0, w, h);
	for (var i = 0; i < pixelData.data.length; i += 4 ) {
		var r = pixelData.data[i];
		var g = pixelData.data[i+1];
		var b = pixelData.data[i+2];
		var averageColour = (r + g + b) / 3;
		pixelData.data[i] = averageColour;
		pixelData.data[i+1] = averageColour;
		pixelData.data[i+2] = averageColour;
	}
	context.putImageData(pixelData, 0, 0);
}

document.addEventListener("DOMContentLoaded", function() {

	var bgCanvas = document.querySelector('.canvas-bg');

	var bgContext = bgCanvas.getContext(‘2d’);

	video.addEventListener(‘loadedmetadata’, function() {
		ratio = video.videoWidth / video.videoHeight;
		w = video.videoWidth - 100;
		h = parseInt(w / ratio, 10);
		canvas.width = w;
		canvas.height = h;
		bgCanvas.width = w;
		bgCanvas.height = h;
	}, false);

});