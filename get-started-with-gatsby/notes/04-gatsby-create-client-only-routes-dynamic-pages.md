# Create Client Only Routes (Dynamic Pages)

[📹 Video link](https://www.egghead.io/lessons/gatsby-create-client-only-routes-dynamic-pages)

[💻 Course Repository - 04 Client only Routes](https://github.com/Khaledgarbaya/moving-from-cra-to-gatsby-course/releases/tag/04-client-only-routes)

## Create a New Page

Inside of `src/pages` create a file `app.js`.

At the top of the file, import React and Reach Router.

Then create a few simple components as we've done before.

```js
import React from 'react
import {Router} from '@reach/router'

const Profile = () => <h2>Profile</h2>
const Details = () => <h2>Details</h2>
const Default = () => <h2>Default</h2>
```

Now we'll create an `<App>` component that will return a `Router` with a `basepath` of `/app` and our components inside of it:

```js
const App = () => {
  ;<Router basepath="/app">
    <Profile path="/profile" />
    <Details path="/details" />
    <Default path="/" />
  </Router>
}
```

## Update `gatsby-node.js`

Inside of `gatsby-node.js` we will export an `onCreatePage` function. We'll destruction `page` and `actions`. With `createPage` from actions, we'll tell Gatsby to redirect all requests that start with `/app` to our `App` component using a regular expression:

```js
exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  // if the path starts with /app...
  if (page.path.match(/^\/app/)) {
    page.matchPath = '/app/*'

    // create the page with the new settings:
    createPage(page)
  }
}
```

Now when we save the `gatsby-node.js` file and restart our server, we can navigate to `/app` and see our `<Default/>` component and `/profile` will show our `<Profile/>` component.
