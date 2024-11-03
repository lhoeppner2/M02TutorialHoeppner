mapboxgl.accessToken = 'pk.eyJ1IjoibGhvZXBwbmVyIiwiYSI6ImNtMzFwOG1oeTExMWQycnEyaHoxb3FyZHEifQ.gSinKyVXj6hrWQHJix_8_w';
const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/streets-v12', // style URL
	center: [-71.060982, 42.35725], // starting position [lng, lat]
	zoom: 18, // starting zoom
});