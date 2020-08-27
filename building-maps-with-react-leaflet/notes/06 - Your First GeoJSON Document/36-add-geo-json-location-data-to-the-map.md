# Add GeoJSON Location Data to the Map

**[📹 Video](https://egghead.io/lessons/egghead-add-geojson-location-data-to-the-map)**

Clean up time! 🧹

Remove the three lines defining and adding the marker data (in `App.js`).

Replace them with GeoJson locations data - which the Leaflet library (`L`) will intuitively know how to handle.

`const geoJson = new L.GeoJSON(locations);`

But we still need to add it to our map:

`geoJson.addTo(map);`

👍 Note: we'll be adding the popup data in one of the following videos.
