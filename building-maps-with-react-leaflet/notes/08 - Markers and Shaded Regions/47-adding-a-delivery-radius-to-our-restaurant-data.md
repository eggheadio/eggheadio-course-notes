# Adding a Delivery Radius to our Restaurant Data

**[📹 Video](https://egghead.io/lessons/egghead-adding-a-delivery-radius-to-our-restaurant-data)**

💻 If you are ever lost, go to [starter template](https://github.com/colbyfayock/launchtime-workshop), open `lessons/08 - Add Restaurant Delivery Zones to Map with Shaded Regions`

Add a `deliveryRadius` property to the GeoJSON object.

👍 It makes sense to add `deliveryRadius` to every object that offers `delivery`.

Destructure it the `properties` attribute.

Test that everything works with a trusty `console.log`:

```js
if (deliveryRadius) {
  console.log(deliveryRadius);
}
```
