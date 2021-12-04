# 3 - Generate Dynamic Routes in Gatsby with Reach Router

[Video link](https://egghead.io/lessons/gatsby-create-a-react-form-in-gatsby)

The heart of our app is going to be the actual rooms. The way the rooms are going to work is that someone's going to visit a URL, it's going to be /room/friends or /room/myroom.

It's not possible (or desirable) to create a page for every possible room combination. We are going to use dynamic routing and a single page, `room.js` to handle all the rooms that our app will need, regardless of their name.

To start with, we'll create a very simple page made up of a single component and using the <Layout> we've already created.

We'll just return a <h1> to make sure it works initially.

### pages/room.js

```jsx
import React from "react";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <h1>Room</h1>
  </Layout>
);
```

To be able to use dynamic routing, we are going to use the `onCreatePage` API called and instantiated in `gatsby-node.js`. If that file doesn't exist in the root of your project, create it and add `exports.onCreatePage`.

The two relevant parts of the gatsby data we want to destructure are the `page` that has been created and the `actions` object which allows us to perform different actions on the page itself.

### gatsby-node.js

```jsx
exports.onCreatePage = { page, actions };
```

We are going to use a regular expression to check if a given URL begins with `/room`.

### gatsby-node.js

```jsx
    exports.onCreatePage = ({ page, actions}) => {
    if (page.path.match(/^\/room/))
}
```

If that condition is met, we are going to get all other parts of the URL and upate the room page, making sure it takes the `matchPath` directive.

### gatsby-node.js

```jsx
exports.onCreatePage = ({ page, actions }) => {
  if (page.path.match(/^\/room/)) {
    page.matchPath = "/room/*";
    actions.createPage(page);
  }
};
```

Run `yarn dev` or `yarn develop` and make sure that when you go to `localhost:8000/room/anything` you are landing on your room page.
![room page](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1576277267/transcript-images/gatsby-generate-dynamic-routes-in-gatsby-with-reach-router-room-page.jpg)
That's not very useful. We need two things for client-side routing. We'll need the component to display and to adapt to the parameters and we'll need the router to tell Gatsby when and how to display it.
First, the component. We'll create `video-display.js` which will be a simple component that will take the whole props object and return it in a `<pre>` tag. We'll tidy up the JSON a bit by using stringify with some optional parameters.

### components/video-display.js

```jsx
import React from "react";

const VideoDisplay = props => {
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
};

export default VideoDisplay;
```

The second thing we needed was the router. `@reach/router` is bundled with Gatsby, so back in our `room.js` file we can import both the router and the video-display component.

### pages/room.js

```jsx
import React from "react";

import { Router } from "@reach/router";
import Layout from "../components/layout";
import VideoDisplay from "../components/video-display";
```

In the component itself, we no longer need the `<h1>`, so let's dump that and wrap everything in the `<Router>`.
We want the `room` to receive the room name from the url. Helpfully, our`Router` provides a `path` parameter that can be passed to any component. We can then name the parameter, in this case `roomID` but that is totally arbitrary, and pass it onto the VideoDisplay component.

### pages/room.js

```jsx
import React from "react";

import { Router } from "@reach/router";
import Layout from "../components/layout";
import VideoDisplay from "../components/video-display";

export default () => (
  <Layout>
    <Router>
      <VideoDisplay path="room/:roomID" />
    </Router>
  </Layout>
);
```

After you've saved, Gatsby will recompile and you can visit `localhost:8000/room/something` to see a page like this one:
![Room json with roomID](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1576277267/transcript-images/gatsby-generate-dynamic-routes-in-gatsby-with-reach-router-room-json-with-roomID.jpg)
There is a slight problem. If you visit `localhost:8000/room` you will get a blank page. To fix this we need a fallback component.
We're going to need a few things for this. First, we'll need to import the navigate method provided by Gatsby. Then, we'll create a small component called `BounceToHome` which will, you guessed, bounce us back to the home page. Finally, we'll need to set that as the `default` router path. So that if nothing matches, our bounce component will be called.
Our `BounceToHome` component will use `useEffect`, so make sure you import that from `react`.
The function will navigate to the root of the site and will delete that entry from the history. Without the replace, the users back button will not work.

### pages/room.js

```jsx
import React, { useEffect } from 'react';
import { Router } from '@reach/router'
import { navigate } from 'gatsby';
import Layout from '../components/layout';
import VideoDisplay from '../components/video-display';

const BounceToHome = () => {
useEffect() => {
navigate('/', {replace: true} )
}
return null;
}

export default () => (
<Layout>
<Router>
<VideoDisplay path="room/:roomID" />
</Router>
</Layout>
);

````
So, we have the component and everything necessary for it imported. The last thing we need to do is to make it the `default` for our Router. We do that by putting it at the end of the component list and, instead of the path parameter, we pass default.

### pages/room.js

```jsx
const BounceToHome = () => {
  useEffect(() => {
     navigate('/', { replace: true });
  }, []);
  return null
}

export default () => (
  <Layout>
    <Router>
      <VideoDisplay path="room/:roomID" />
      <BounceToHome default />
    </Router>
  </Layout>
);
````

We can test this work by going to something like `/room/test` and confirming we see our JSON object. Then, go to `/room` and we'll be redirected to the `index.js` page. Because we've used replace, pressing the back button will bring us to `/room/test` and not `/room` causing an annoying redirect loop.

### Personal take

Using Reach Router and navigate to parse URL parameters, pass data to components and deal with fall back cases. Another helpful recap on some key Gatsby concepts.
