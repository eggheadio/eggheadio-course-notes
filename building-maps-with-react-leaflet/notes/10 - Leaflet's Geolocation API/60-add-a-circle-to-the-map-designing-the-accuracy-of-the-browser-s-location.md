# Add a Circle to the Map Designing the Accuracy of the Browser's Location

**[📹 Video](https://egghead.io/lessons/egghead-add-a-circle-to-the-map-designing-the-accuracy-of-the-browser's-location)**

If we `console.log` the `event` inside `handleOnLocationFound`, you'll notice the `accuracy` property (the radius in meters).

Let's demonstrate this accuracy radius with a circle:

Inside `handleOnLocationFound` add:

```js
const radius = event.accuracy;

const circle = L.circle(latlng, {
  radius,
  // use any color, but best if it's different from the color of delivery zones
  color: "#26c6da",
});
// don't forget to add any new shapes to the map!
circle.addTo(map);
```
