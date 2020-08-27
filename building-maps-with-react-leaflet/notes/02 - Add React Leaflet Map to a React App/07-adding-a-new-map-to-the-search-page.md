# Adding a New Map to the Search Page

**[📹 Video](https://egghead.io/lessons/egghead-adding-a-new-map-to-the-search-page)**

Time to write some code!

Inside `App.js` we'll be importing the two components we mentioned earlier!

`import {Map, TileLayer} from 'react-leaflet'`

Replace the `h1` with the `<Map>` component. We'll add some props next (the coordinates and the zoom level).

Remember, the map won't display until we add a `<TileLayer>` component, which is responsible for all the map imagery.

Your code should look similar to this:

```js
// coordinates for Washington city, but you can add your own
<Map center={[38.907132, -77.036546]} zoom={12}>
  <TileLayer
    // we'll be using OpenStreetMap (we'll change this in the later lessons)
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    // don't forget to attribute them!
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />
</Map>
```

🤓 You can read more about [Zoom levels here](https://leafletjs.com/examples/zoom-levels/)

👍 Note that the `<Map>` component creates its own `<div>` container for the map, it does not get attached to an existing node.

At this point the map loads - but it looks broken 😢. Let's fix that!

Start by importing the Leaflet CSS:

`import "leaflet/dist/leaflet.css";`

Last thing is giving the map wrapepr `div` a height and a width (like with `img` elements.)

```js
.leaflet-container {
  width: 100%;
  height: 100%;
}
```
