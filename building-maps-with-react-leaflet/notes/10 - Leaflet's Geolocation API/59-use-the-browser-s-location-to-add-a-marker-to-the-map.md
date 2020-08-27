# Use the Browser's Location to Add a Marker to the Map

**[📹 Video](https://egghead.io/lessons/egghead-use-the-browser's-location-to-add-a-marker-to-the-map)**

We've located the user's location, but how do we automatically add a marker to it?

We can listen for when the `locate` function was fired (using the `useEffect` hook)
`map.on('locationfound', handleOnLocationFound);`

Now let's define `handleOnLocationFound`:

```js
function handleOnFindLocation() {
  const { current = {} } = mapRef;
  const { leafletElement: map } = current;

  map.locate({
    setView: true,
  });
}
```

A new marker will automatically be added when clicking the **Find My Location** button.

🤓 You can find other [Map events here](https://leafletjs.com/reference-1.6.0.html#map-event).
