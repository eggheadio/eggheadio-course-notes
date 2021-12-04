# Create a New GeoJSON File and Import it into the App

**[📹 Video](https://egghead.io/lessons/egghead-create-a-new-geojson-file-and-import-it-into-the-app)**

💻 If you are ever lost, go to [starter template](https://github.com/colbyfayock/launchtime-workshop), open `lessons/06 - Create Your First GeoJSON Document and Add Your Favorite Restaurant Locations to the Map`

Our Launch app is still rather _dumb_, let's fix that by loading GeoJSON data, instead of inputting the coordinates manually.

In the `src` directory, create a new **data** folder. Inside create a `locations.json` file.

Copy the data from geojson.io to the `locations` file and then import the `locations` file to `App.js`.

Like so:

`import locations from './data/locations.json';`
