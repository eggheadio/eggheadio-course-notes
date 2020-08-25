# Use our Leaflet Map Instance to re-add our Marker to the Map

**[📹 Video](https://egghead.io/lessons/egghead-use-our-leaflet-map-instance-to-re-add-our-marker-to-the-map)**

Let's do some destructuring and take what we need from our `ref`.

```js
const { current = {} } = mapRef;
const { leafletElement: map } = current;
```

We also want to exit (`return`) if a map doesn't exist.

`if ( !map ) return;`

Now for the tricky bit!

Create a new marker instance and copy the existing coordinates (the one from the existing Marker component).
For example: `const marker = L.marker([38.888369, -77.019900])`

Add this marker to the map:

`marker.addTo(map);`

And let's not forget the popup:

`marker.bindPopup("Smithsonian National Air and Space Museum");`

Now let's comment out the `<Marker />` component and instead initialize it inside the `useEffect` hook.

The final `useEffect` hook should look like this:

```js
useEffect(() => {
  const { current = {} } = mapRef;
  const { leafletElement: map } = current;

  if (!map) return;

  map.eachLayer((layer = {}) => {
    const { options } = layer;
    const { name } = options;

    if (name !== "Mapbox") {
      map.removeLayer(layer);
    }
  });

  const marker = L.marker([38.888369, -77.0199]);

  marker.bindPopup("Smithsonian National Air and Space Museum");
  marker.addTo(map);
}, [mapRef]);
```

👍 We can now also remove the Marker and Popup Leaflet imports since we won't be using them.
