# Adding a ref to Our Map Component

**[📹 Video](https://egghead.io/lessons/egghead-adding-a-ref-to-our-map-component)**

💻 If you are ever lost, go to [starter template](https://github.com/colbyfayock/launchtime-workshop), open `lessons/05 - Managing Leaflet State in a React App with Hooks`

Import `useRef` along with your other React imports.

Define it as:

`const mapRef = useRef();`

And then apply the ref prop to the Map component:

`ref={mapRef}`

Sweet!
