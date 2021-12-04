# Build a Page Layout in Gatsby

[Video link](https://egghead.io/lessons/gatsby-build-a-page-layout-in-gatsby)

This is a very basic setup for getting up and running with Gatsby. I used `now init gatsby video-chat` which will help with deployment later.

The css file can be found [here](https://github.com/jlengstorf/twilio-gatsby-video-chat/blob/master/src/components/layout.css).

The import of Link is for internal routing within Gatsby. The prop `children` is so we can pass through whatever we want.

We finally export that component as the default allowing it to be imported by other components.

### layout.js

```jsx
const Layout = ({ children }) => (
  <>
    <header>
      <Link to="/">Video Chat App</Link>
    </header>
    <main>{children}</main>
  </>
);

export default Layout;
```

Next, we need to create page. In the `now` scaffold the index.js file exists already and you can strip that out and replace it with the contents of below.

### pages/index.js

```jsx
import React from "react";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <h1>TODO: create app</h1>
  </Layout>
);
```

To see if all has gone to plan, we need to start our app. So, run `yarn install` and then `yarn dev` in the console. Visit the url in the console and away we go.
![localhost:8000 link in shell](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1576277267/transcript-images/gatsby-learn-build-a-page-layout-in-gatsby-localhost.jpg)
If all goes well, it should look like this:
![app homepage with header of "TODO: create app"](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1576277267/transcript-images/gatsby-learn-build-a-page-layout-in-gatsby-homepage.jpg)

## Personal Take

A basic Layout setup for a base Gatsby app. If this lesson doesn't feel straight-forward, it would be worth digging into more basic Gatsby courses as there is a good bit of assumed knowledge throughout. I really appreciate using a tool like Zeit's now to initialize this project. It gives a minimum of scaffolding and makes deploying really easy.
