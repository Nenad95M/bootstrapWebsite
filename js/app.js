let year=new Date().getFullYear();
document.getElementById('year').innerHTML= year;

mapboxgl.accessToken = 'pk.eyJ1IjoibmVuYWRtYXJrb3ZpYyIsImEiOiJjbDFqZTBvdzAxdnQzM2JsbmxydDd5bTl3In0.fXVXUiU4r8FPfhVSk-b8pQ';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [20.91965, 43.99257],
zoom:18
});