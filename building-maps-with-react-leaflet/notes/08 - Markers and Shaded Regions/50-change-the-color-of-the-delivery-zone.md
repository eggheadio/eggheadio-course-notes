# Change the Color of the Delivery Zone

**[📹 Video](https://egghead.io/lessons/egghead-change-the-color-of-the-delivery-zone)**

We can change the color of the delivery radius circle by adding the `color` option to the radius:

```js
deliveryZoneCircle = L.circle(coordinates.reverse(), {
  radius: deliveryRadius,
  color: "red",
});
```
