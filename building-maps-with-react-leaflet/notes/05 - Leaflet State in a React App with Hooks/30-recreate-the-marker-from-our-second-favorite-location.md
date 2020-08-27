# Recreate the Marker from our Second Favorite Location

**[📹 Video](https://egghead.io/lessons/egghead-recreate-the-marker-from-our-second-favorite-location)**

Let's reinforce the process of creating a marker + popup programmatically.

👍 You can have as many markers on a map, but make sure you save them under different variable names.

You'll need to do three things:

1. Initiate a new `L.marker`
2. bind a new popup
3. add both to the map

Like so:

```js
const markerExample2 = L.marker([38.123123, -77.123123]);

marker.bindPopup("This is my super cool marker");
marker.addTo(map);
```
