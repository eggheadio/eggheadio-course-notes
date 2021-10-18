# Recreate Restaurant Markers with GeoJSON Configuration Option

**[📹 Video](https://egghead.io/lessons/egghead-recreate-restaurant-markers-with-geojson-configuration-option)**

💻 If you are ever lost, go to [starter template](https://github.com/colbyfayock/launchtime-workshop), open `lessons/09 - Customize Restaurant Location Markers with Custom Images`

We'll be replacing the default marker with `utensils-marker` found in the shared assets folder.

First, let's add a new property to our GeoJSON object (inside `App.js`) called `pointToLayer`.

Initialize the markers with:

```js
  pointToLayer: (feature, latlng) => {
    return L.marker(latlng);
  },
```
