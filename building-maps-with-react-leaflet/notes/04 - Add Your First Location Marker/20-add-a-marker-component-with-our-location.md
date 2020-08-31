# Add a Marker Component with our Location

**[📹 Video](https://egghead.io/lessons/egghead-add-a-marker-component-with-our-location)**

💻 If you are ever lost, go to [starter template](https://github.com/colbyfayock/launchtime-workshop), open `lessons/04 - Adding a Marker to a Map to Point to a Location with React Leaflet`

First, import the two components to our `App.js`.

Our react-leaflet imports should like this:

`import { Map, TileLayer, Marker, Popup } from "react-leaflet";`

After the TileLayer component, but still inside the Map component, add the Marker with the **position** prop and the coordinates that you copied in the previous lesson.
`<Marker position={[38.888369, -77.019900]} />`
