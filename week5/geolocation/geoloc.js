// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
const x = document.getElementById("demo");
// Create a map
async function getLocation() {
	try {
		navigator.geolocation.getCurrentPosition(showPosition);
	} catch {
		x.innerHTML = err;
	}
}

function showPosition(position) {
	x.innerHTML =
		"Latitude: " +
		position.coords.latitude +
		"<br>Longitude: " +
		position.coords.longitude;
}

function myMap() {
	var mapProp = {
		center: new google.maps.LatLng(37.623352, -109.485417),
		zoom: 6,
	};
	var map = new google.maps.Map(
		document.getElementById("googleMap"),
		mapProp
	);
}
