// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// We create the tile layer that will be the background of our map.
let streetmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/satellite-streets-v11',
  accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streetmap.addTo(map);

// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
let line = [
  [33.9425, -118.4081],
  [37.6213, -122.3790],
  [30.1944, -97.67],
  [43.6767, -79.6306],
  [40.6397, -73.7788]
];

// Create a polyline using the line coordinates and make the line black.
L.polyline(line, {
  color: "blue",
  weight: '4',
  opacity: '0.5',
  dashArray: '10, 10'
}).addTo(map);


