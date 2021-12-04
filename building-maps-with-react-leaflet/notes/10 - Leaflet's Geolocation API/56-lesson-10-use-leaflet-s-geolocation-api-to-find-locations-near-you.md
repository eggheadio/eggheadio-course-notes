# Lesson 10 - Use Leaflet's Geolocation API to Find Locations Near You

**[📹 Video](https://egghead.io/lessons/egghead-lesson-10---use-leaflet's-geolocation-api-to-find-locations-near-you)**

Time to improve the user experience! 🦄

From now on, we want users to add new markers to the map with a click of a button.

To make things smoother, we want to be able to check the user's location - so we can display results relevant to their geographic area.

We also want a new marker when the location is found.

The browsers won't be able to pinpoint the _exact_ location, so we'll adjust our calculation to accept a margin of error.

Lastly, to avoid any performance issues down the line, we want to clean up all event handlers that have already been used.
