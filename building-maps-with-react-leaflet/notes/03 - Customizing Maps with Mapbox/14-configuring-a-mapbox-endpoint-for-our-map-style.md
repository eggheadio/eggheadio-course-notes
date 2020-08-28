# Customize Our Map with Our Map Style Endpoint

**[📹 Video](https://egghead.io/lessons/egghead-customize-our-map-with-our-map-style-endpoint)**

The Mapbox `GET` request requires a couple of variables:

`https://api.mapbox.com/styles/v1/{username}/{style_id}/tiles/{tilesize}/{z}/{x}/{y}{@2x}`

Let's swap those placeholders with our information:

- Replace `{username}` with your Mapbox account name (make sure to remove the curly braces too!)
- Replace `{style_id}` with your custom map id (from Mapbox Studio)
- Replace `{tilesize}` with 256.
- Remove the curly brackets around `{@2x}`
- Finally, append your access_token which you'll source from you .env file:
  `?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`
