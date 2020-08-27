# Lesson 6 - Create Your First GeoJSON Document and Add Restaurant Locations to the Map

**[📹 Video](https://egghead.io/lessons/egghead-lesson-6---create-your-first-geojson-document-and-add-restaurant-locations-to-the-map)**

Instead of adding coordinates manually, we want to load them using a GeoJSON file.

**What is GeoJSON?** It's a JSON document with a specific structure.

This is an example GeoJSON object:

```js
var geojsonFeature = {
  type: "Feature",
  properties: {
    name: "Coors Field",
    amenity: "Baseball Stadium",
    popupContent: "This is where the Rockies play!",
  },
  geometry: {
    type: "Point",
    coordinates: [-104.99404, 39.75621],
  },
};
```

We'll be using [GeoJSON.io](https://geojson.io/#map=2/20.0/0.0) to generate aGeoJSON document.

🤓 You can read more about [GeoJSON here](https://leafletjs.com/reference-1.6.0.html#geojson)
