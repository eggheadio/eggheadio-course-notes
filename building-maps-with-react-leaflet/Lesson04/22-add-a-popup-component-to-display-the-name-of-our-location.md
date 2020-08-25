# Add a Popup Component to Display the Name of our Location

**[📹 Video](https://egghead.io/lessons/egghead-add-a-popup-component-to-display-the-name-of-our-location)**

Ok, so the marker now neatly shows on the map, but what does the marker stand for?

We've already imported the Popup component in one of the previous videos. Nest the Popup component inside the Marker, add some descriptive text and voila!

```js
<Marker position={[38.888369, -77.0199]}>
  <Popup>Smithsonian National Air and Space Museum</Popup>
</Marker>
```

👍 Click on the marker to test that the popup works.
