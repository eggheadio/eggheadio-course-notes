# Create Dynamic Pages in Gatsby

[📹 Video link](https://www.egghead.io/lessons/gatsby-create-dynamic-pages-in-gatsby)

## Notes

Let's look at the Profile and Stats pages in the [CodeSandbox Create-React-App](https://www.egghead.io/lessons/gatsby-convert-react-routes-with-a-dynamic-param-to-programmatic-static-pages).

The Profile page has a login that's a protected route, with a fake login.

In the Gatsby version, we will have to create client only routes for dynamic pages.

## Gatsby `app.js` Page

Create a new file `app.js` inside of `src/pages`.

Here is where we will add new routes in the "React way".

At the top of the file, import React and React Router.

Create and export a component called `<App>`.

Copy and paste the simple `<Profile>` and `<Stats>` components from the CRA version.

As children to the <Router> component, we will add the Profile and Stats components and give them appropriate paths.

```js
import React from 'react'
import {Router} from '@reach/router'

const Profile = () => <h2>Profile: Welcome John</h2>
const Stats = () => <h2>Stats: John Stats</h2>

const App = () => {
  <Router>
    <Profile path='/app/profile' />
    <Stats path='/app/stats'>
  </Router>
}
export default App
```

## Update gatsby-node.js

Inside of our `gatsby-node.js` file, we will create our dynamic pages.

We'll export an async `onCreatePage` callback function that destructures `page` and `actions` from the function arguments.

Inside of the function, we'll destructure `createPage` from `actions`.

We'll tell Gatsby that if the page path starts with `/app`, it should change the match path to `/app/*` before creating the page.

```js
// at the bottom of gatsby-node

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/app/)) {
    page.matchPath = '/app/*'

    createPage(page)
  }
}
```

Restarting the Gatsby server, we can see that our routing is working.
