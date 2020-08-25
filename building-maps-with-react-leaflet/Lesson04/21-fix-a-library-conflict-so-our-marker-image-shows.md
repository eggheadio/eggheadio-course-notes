# Fix a Library Conflict so our Marker Image Shows

**[📹 Video](https://egghead.io/lessons/egghead-fix-a-library-conflict-so-our-marker-image-shows)**

Let's fix the `data:image/p` console error from the last video, with a workaround.

Import `useEffect` React hook:

`import React, {useEffect } from "react";`

Add the following (before the `return` statement):

```js
useEffect(() => {
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });
}, []);
```

This is a code snippet copied from a GitHub issue - you're not supposed to just come up with the solution yourself.

Since we are using Leaflet here directly (the **L** from above), we'll have to import it to our file as well:

`import L from 'leaflet';`

The marker should now be there!
