# Add the Default Shadows back to our Markers

**[📹 Video](https://egghead.io/lessons/egghead-add-the-default-shadows-back-to-our-markers)**

Let's add that fancy marker shadow!

Import the Leaflet shadow from:

`import markerShadow from 'leaflet/dist/images/marker-shadow.png';`

Then add the two shadow configurations to the icon options object:

```js
shadowUrl: markerShadow,
// if you're using a different icon, you'll probably have to play around with the values a bit to get it right
shadowAnchor: [13, 28],
```
