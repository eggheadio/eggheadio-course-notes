# Using Our Tile Endpoint for Our Map

**[📹 Video](https://egghead.io/lessons/egghead-using-our-tile-endpoint-for-our-map)**

Copy the URL endpoint and replace the `url` prop inside the <TileLayer> component(in `App.js`)

Add Mapbox to the attribution:

```js
attribution =
  'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
```

👍 Restart your server (with `yarn develop`) and marvel at your customized map!
