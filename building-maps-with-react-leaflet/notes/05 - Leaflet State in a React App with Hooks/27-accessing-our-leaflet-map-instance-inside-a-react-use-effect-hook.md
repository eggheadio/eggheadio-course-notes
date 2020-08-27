# Accessing our Leaflet Map Instance Inside a React useEffect Hook

**[📹 Video](https://egghead.io/lessons/egghead-accessing-our-leaflet-map-instance-inside-a-react-useeffect-hook)**

We want to access our Map component via the `ref` prop with `useEffect`.

```js
useEffect(() => {
  console.log(mapRef.current);
}, [mapRef]);
```

Test that it works!

👍 Note: this will be the second `useEffect` in our App.js.
