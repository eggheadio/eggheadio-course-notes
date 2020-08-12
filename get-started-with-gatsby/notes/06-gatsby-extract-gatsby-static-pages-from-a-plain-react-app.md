# Extract Gatsby Static Pages from a Plain React app

[📹 Video link](https://www.egghead.io/lessons/gatsby-extract-gatsby-static-pages-from-a-plain-react-app)

[💻 Course Repository - 06 Migrate Static Pages](https://github.com/Khaledgarbaya/moving-from-cra-to-gatsby-course/releases/tag/06-migrate-static-pages)

## Create-React-App Migration

We'll start by looking at `src/index.js` of our [Create-React-App project on CodeSandbox](https://codesandbox.io/s/optimistic-jepsen-1zqmb?from-embed).

Notice the `Root` of the App, and how it uses the `Main` component that contains navigation information.

### Inside of an Empty Gatsby Project

Create an `index.js` file at `src/pages/index.js`.

Import React, and then copy and paste the `Main` component from CodeSandbox into the `index.js` file.
Get rid of the `children` for now.

At the bottom of the file, we will make `Main` the default export.

In the Create-React-App version, `Link` is imported from Reach Router, but we will import Link from Gatsby.

The `Link` component in Gatsby works similarly to the one in React Router.

We have an `isLoggedIn()` call in the CRA version of the app located at `services/auth.js` that we can copy and paste to a new `src/services/auth.js` file in our Gatsby project. Then we can import it at the top of our file.

```js
import React from 'react'
import { Link } from 'gatsby'
import { logout, isLoggedIn } from '../services/auth'

const Main = () => (
  <div>
    <h1>Gatsby Pokedex!</h1>
    <h2>Main App</h2>
    {isLoggedIn() && <button onClick={() => logout(() => {})}> Logout </button>}
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/app/profile">Profile</Link>
      </li>
      <li>
        <Link to="/app/stats">Stats</Link>
      </li>
      <li>
        <Link to="pokemons">Pokemons</Link>
      </li>
    </ul>
  </div>
)

export default Main
```

Running the server, we should be able to see our page.

## Migrating the About Page

Clicking on the "About" link in our Gatsby app brings up a 404.

We can copy the `About` component from the Create-React-App `index.js` file into a new `src/pages/about.js` file in Gatsby:

```js
import React from 'react'

const About = () => <h1>About Page</h1>

export default About
```

Our About page link now works.
