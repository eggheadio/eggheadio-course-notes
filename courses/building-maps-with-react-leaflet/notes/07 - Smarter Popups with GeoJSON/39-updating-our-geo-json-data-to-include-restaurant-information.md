# Updating our GeoJSON Data to Include Restaurant Information

**[📹 Video](https://egghead.io/lessons/egghead-updating-our-geojson-data-to-include-restaurant-information)**

💻 If you are ever lost, go to [starter template](https://github.com/colbyfayock/launchtime-workshop), open `lessons/07 - Add Restaurant Info to Your GeoJSON Document and Display It in a Tooltip on the Map`

Let's add some custom properties to our GeoJSON object.

Add a new `properties` property and store the custom values in an object, like so:

```js
"properties": {
  "name": "DC Pizza",
  "delivery": true,
  "phone": "(202) 331-1800",
  "website": "http://www.dcpizzaonline.com/",
  "tags": [
    "Pizza",
    "Wings",
    "Sandwiches",
    "Salads"
  ]
}
```

👍 Make sure to add the same properties object (with different values. of course) to all the locations.
