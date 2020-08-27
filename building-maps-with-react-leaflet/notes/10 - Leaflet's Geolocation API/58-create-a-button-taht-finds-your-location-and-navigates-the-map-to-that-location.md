# Create a Button taht Finds your Location and Navigates the Map to that Location

**[📹 Video](https://egghead.io/lessons/egghead-create-a-button-taht-finds-your-location-and-navigates-the-map-to-that-location)**

We'll add a new button for Finding the user's location with a new `onClick` function.

```js
<button onClick={handleOnFindLocation}>Find My Location</button>
```

Next, let's define the click handler:

```js
function handleOnFindLocation() {
  const { current = {} } = mapRef;
  const { leafletElement: map } = current;

  map.locate({
    setView: true,
  });
}
```

👍 You'll have to click "allow" when prompted by the browser.
