# Share common markup between pages in Gatsby using Layouts

[📹 Video link](https://www.egghead.io/lessons/gatsby-share-common-markup-between-pages-in-gatsby-using-layouts)

## Notes

In the [Create-React-App version](https://codesandbox.io/s/optimistic-jepsen-1zqmb?from-embed=&file=/src/index.js) of our app, the Navigation is present in every page. However, it's missing when we navigate around our Gatsby version.

We can fix this by using a Layout component.

## Creating the Layout Component in Gatsby

Create a `components` directory at `/src/components` and a new file `layout.js`.

Inside of the new file, we'll import React, and define a `Layout` component.

Copy and paste the Navigation out of the `index.js` page into our new Layout component. We'll also bring over our Link and auth-related imports.

We'll render the `children` below the navigation.

```js
import React from 'react'
import { Link } from 'gatsby'
import { logout, isLoggedIn } from '../services/auth'

const Layout = ({ children }) => {
  return (
    <div>
      <h1>Gatsby Pokedex!</h1>
      ...content from index.js
      {children}
    </div>
  )
}
```

## Updating `pages/index.js`

With the Navigation information added to our new `<Layout>` component, we can remove everything except for our `<h2>Main App</h2>`.

We'll import our new `Layout` component and wrap it around the h2.

```js
// pages/index.js

import React from 'react'
import Layout from '../components/layout'

const Main = () => {
  ;<Layout>
    <h2>Main App</h2>
  </Layout>
}

export default Main
```

Follow the same process for the `About` page and the Main Pokemon page.

## Progressive Enhancement in Gatsby

Gatsby uses server-side rendering and a React feature known as hydration to create progressively-enhanced sites. During the build process, Gatsby creates both an HTML document and a JavaScript component for each URL of your site.

![Progressive Enhancement Animation](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1597423576/transcript-images/03-sketch-note-progressive-enhancement-animation.gif)

When a site visitor requests their first URL from your site, the initial response will be server-rendered HTML, along with linked JavaScript, CSS, and images. If their browser is capable, React will hydrate the DOM, adding event listeners and state. Subsequent URL requests become DOM updates managed by React. If hydration fails, however, your site still works. Subsequent URL requests will instead trigger a network request and a full-page load.
