# Replace the Default Location Markers with a Custom Image

**[📹 Video](https://egghead.io/lessons/egghead-replace-the-default-location-markers-with-a-custom-image)**

We'll add a custom marker by adding an options object to `pointToLayer`.

First import the custom marker image at the top of the file:
`import utensilsIcon from './assets/shared/utensils-marker.png';`

Now let's add it to the options object:

```js
pointToLayer: (feature, latlng) => {
  return L.marker(latlng, {
    icon: new L.Icon({
      iconUrl: utensilsIcon,
      // size in pixels
      iconSize: [26, 26],
      // readjust the popup to be centered around the icon 🥼
      popupAnchor: [0, -15],
    })
  });
},
```

🤓 You can read more about [Leaflet's custom icons here](https://leafletjs.com/reference-1.6.0.html#icon)
