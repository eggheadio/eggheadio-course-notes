# Create Static Pages Programmatically

[📹 Video link](https://www.egghead.io/lessons/gatsby-create-static-pages-programmatically)

# Notes

## Create a Pokemon Template

Inside of `/src`, create a `templates/` subdirectory.

Inside of `templates/`, create a file `pokemon.js`. Import React and export a simple component as we did in earlier lessons.

```js
import React from 'react'

export default () => <h1>Pokemon Template</h1>
```

## Introducing `gatsby-node.js`

Back in the root directory of the project, create a file called `gatsby-node.js`.

At the top of `gatsby-node.js` we will import `path` from Node. This file will have a export a function called `createPages` that will destructure the `actions` argument.

From the `actions` argument, we'll destructure `createPages`.

Declare a new variable `pokemonTemplate` which we will point at our `pokemonTemplate.js` file by using `path.resolve`.

Next, we'll call `createPage()` and pass in an object with a `path` of `/pokemon`, and a key for `component` with a value of `pokemonTemplate`.

```js
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const pokemonTemplate = path.resolve('./src/templates/pokemon.js')

  // use the createPage function to create a page.
  // the createPage function accepts an object as a config
  createPage({
    path: '/pokemon',
    component: pokemonTemplate,
  })
}
```

Now when we run our server, we can navigate to `http://localhost:8000/pokemon` and see our page.

## Passing data to the pages we build

We can also pass arguments to be rendered in the page by passing `createPage` a `context` key:

```js
createPage({
  path: '/pokemon',
  component: pokemonTemplate,
  context: {
    name: 'pikachu',
  },
})
```

Now back in `src/templates/pokemon.js` we will update our component to destructure `pageContext` from `props` and display the `name`.

```js
import React from 'react'

export default ({ pageContext }) => <h1>Pokemon {pageContext.name}</h1>
```

When our development page reloads, we can see "Pokemon pikachu" has appeared.
