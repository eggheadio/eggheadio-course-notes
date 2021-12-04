# Using geojson.io to Create Your First GeoJSON Document

**[📹 Video](https://egghead.io/lessons/egghead-using-geojson.io-to-create-your-first-geojson-document)**

You can generate a GeoJSON object on geojson.io by clicking on the marker icon and placing it on the map. This will create a new `FeatureCollection`, its features, including the coordinates and other data.

For example:

```js
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.2330274581909,
          32.69994010385839
        ]
      }
    }
  ]
}
```

👍 If we add another marker, we'll be ading another feature to the FeatureCollection.
