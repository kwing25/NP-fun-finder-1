//get the api keys from the websites I want to use
//api key= AIzaSyDFJN8KsV0vonVDnuMQg39pedzZxhh7rVs
//above is for geolocation api https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY

let map;

function initMap(){
  map = new google.maps.Map(document.getElementById('map'),{
    center: { lat: -34.397, lng: 150.644},
    zoom:8,
  });
}