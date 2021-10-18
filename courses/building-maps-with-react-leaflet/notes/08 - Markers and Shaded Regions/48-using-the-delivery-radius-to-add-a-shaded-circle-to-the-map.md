# Using the Delivery Radius to add a Shaded Circle to the Map

**[📹 Video](https://egghead.io/lessons/egghead-using-the-delivery-radius-to-add-a-shaded-circle-to-the-map)**

Let's add a circle to signify our delivery radius (but only for locations that support delivery).

First, we'll need to destructure `geometry` from feature as well as `coordinates` from geometry.

Like so:

```js
const { properties = {}, geometry = {} } = feature;
const { coordinates } = geometry;
```

Add the circle to the map with the following code:

```js
let deliveryZoneCircle;

if (deliveryRadius) {
  // 👍 make sure to add reverse since the coordinates in GeoJSOn are stored backwards to what Leaflet expects
  deliveryZoneCircle = L.circle(coordinates.reverse(), {
    radius: deliveryRadius,
  });
  //  Don't forget to add the circle to the map.
  deliveryZoneCircle.addTo(map);
}
```
