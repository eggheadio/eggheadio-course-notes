# Only Showing the Delivery Radius on Marker Hover

**[📹 Video](https://egghead.io/lessons/egghead-only-showing-the-delivery-radius-on-marker-hover)**

The overlapping delivery circles are a bit confusing - imagine if we added more locations to the map!

Let's only display the border radius (not to be confused with CSS `border-radius` 😅) when hovering over the marker (on `mouseover`).

Similarly, let's Remove the radius when we're done hovering (on `mouseout`)

```js
layer.on("mouseover", () => {
  if (deliveryZoneCircle) {
    deliveryZoneCircle.addTo(map);
  }
});

layer.on("mouseout", () => {
  if (deliveryZoneCircle) {
    deliveryZoneCircle.removeFrom(map);
  }
});
```
