# Adding Popups to all of our Markers

**[📹 Video](https://egghead.io/lessons/egghead-adding-popups-to-all-of-our-markers)**

Time to add popups to our locations.

We'll be looping through the features (locations) in our object with a `onEachFeature` function.

As a first step, let's try to `console.log` the name of each restaurant:

```js
const geoJson = new L.GeoJSON(locations, {
  onEachFeature: (feature = {}, layer) => {
    const { properties = {} } = feature;
    const { name } = properties;
    console.log("name: ", name);
  },
});
```

Once that's working, we can add it the to the popup, by adding the following three lines to the geoJSON function:

```js
const popup = L.popup();
popup.setContent(name);
layer.bindPopup(popup);
```
