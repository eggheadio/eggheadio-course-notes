# Create Gatsby Static Pages Manually

[📹 Video link](https://www.egghead.io/lessons/gatsby-create-gatsby-static-pages-manually)

## Notes

Gatsby will create a page for any `.js` file we put in the `src/pages` directory.

Inside of our `src/pages` directory, we will create a new `about.js` file.

At the top of `about.js` we will import React, and at the bottom we will export a simple "About Page" component similar to our "Hello World" example.

```js
import React from 'react'

export default () => <h1>About Page</h1>
```

When we run our server, we can navigate our dev to `/about` and see our component.
