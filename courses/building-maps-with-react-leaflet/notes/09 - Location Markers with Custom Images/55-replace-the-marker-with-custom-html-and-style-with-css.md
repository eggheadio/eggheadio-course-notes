# Replace the Marker with Custom HTML and Style with CSS

**[📹 Video](https://egghead.io/lessons/egghead-replace-the-marker-with-custom-html-and-style-with-css)**

Time to replace our custom icon with a Leaflet's `L.divIcon`

```js
return L.marker(latlng, {
  icon: L.divIcon(),
});
```

We can add the preferred HTML structure straight to the icon's options object:

```js
return L.marker(latlng, {
  icon: L.divIcon({
    html: "<div class="my-class">HIHIHI</div>",
  }),
});
```

And styling as well! (Apply styling to the `.my-class` CSS class)

👍 Check out [Leaflet's map examples for inspiration](https://react-leaflet.js.org/docs/en/examples)
