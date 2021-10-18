# Add a Marker to a Location when Clicking a Button

**[📹 Video](https://egghead.io/lessons/egghead-add-a-marker-to-a-location-when-clicking-a-button)**

💻 If you are ever lost, go to [starter template](https://github.com/colbyfayock/launchtime-workshop), open `lessons/10 - Use Leaflet's Geolocation API to Find Locations Near you`

In the starter code for lesson 10 you'll find a new button for Setting the location to the National Geographic Museum. Let's copy it!

Then add the marker, using the code we're already familiar with:

```js
const marker = L.marker(locationNationalGeographic);

marker.addTo(map);
```

Once the marker has been added, we want to center it on the screen. Add the following code to achieve that:

`map.setView(locationNationalGeographic);`
