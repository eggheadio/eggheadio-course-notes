# Create a New Basemap Style

**[📹 Video](https://egghead.io/lessons/egghead-create-a-new-basemap-style)**

Move the `username` and `style_id` to `.env.shared` file as well.

The final url endpoint should like this:
{`https://api.mapbox.com/styles/v1/${process.env.REACT_APP_MAPBOX_USERID}/${process.env.REACT_APP_MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`}

👍 To make the endpoint a little bit easier to read, you can extract the variables like this:

```js
const MAPBOX_API_KEY = process.env.REACT_APP_MAPBOX_API_KEY;
const MAPBOX_USERID = process.env.REACT_APP_MAPBOX_USERID;
const MAPBOX_STYLEID = process.env.REACT_APP_MAPBOX_STYLEID;
```

Then your `url` endpoint shoud look like this:

```js
url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
```
