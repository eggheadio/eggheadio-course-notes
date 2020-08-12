# Convert React routes with a dynamic param to programmatic static pages

[📹 Video link]((https://www.egghead.io/lessons/gatsby-convert-react-routes-with-a-dynamic-param-to-programmatic-static-pages)

In the [Create-React-App version](https://codesandbox.io/s/optimistic-jepsen-1zqmb?from-embed=&file=/src/index.js) of our app, we are able to click on Pokemon and get to an information page for them.

For our Gatsby app, we want to be prepared to create pages dynamically since we can't always guarantee that we know how many Pokemon we will have.

## Create a Pokemon Page

In the Gatsby project, create a new file at `src/pages/pokemon.js`.
At the top of the file, import React, and we will create a `<Pokemons/>` component.

We can copy and paste the body of the `<Pokemons>` component from the `index.js` file of the CRA version of the app, along with the example data array from the top of the file. Replace the fragment with a `div` and remove `children`, and import `Link` from Gatsby at the top of the file.

```js
import React from 'react'
import {Link} from 'gatsby'

const pokemons = [...]

const Pokemons = () => (
  <div>
    <h2>My Pokemons</h2>
    <ul role="navigation">
      {pokemons.map(pokemon => (
        <li>
          <Link to={pokemon.slug}>{pokemon.slug}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export default Pokemons
```

We are already linking to our Pokemon page from the `index.js` file of our Gatsby project.

However, when we click a link to view information about a Pokemon, we get a 404 page because we need to dynamically build pages.

## Update `gatsby-node.js`

Inside of the `gatsby-node` file in the root of our project, we will export a `createPages` function where we will use the `createPage` action to create pages.

Import `path`, and then we'll create a `PokemonTemplate` at `src/templates/pokemon.js`.

```js
// gatsby-node.js
const path = require('path')

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const PokemonTemplate = path.resolve('./src/templates/pokemon.js')
}
```

Update the Pokemon template we copied over to bring in the name from `pageContext`:

```js
// src/templates/pokemon.js
import React from 'React'

const Pokemon = ({ pageContext }) => {
  return <h1>this pokemon is {pageContext.name}</h1>
}

export default Pokemon
```

Back inside of `gatsby-node.js`, paste in the array of Pokemon, and we will iterate over them to create pages:

```js
exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const PokemonTemplate = path.resolve('./src/templates/pokemon.js')

  pokemons.forEach((pokemon) => {
    createPage({
      path: pokemon.slug,
      component: PokemonTemplate,
      context: {
        name: pokemon.name,
      },
    })
  })
}
```

Now when save the file and start our server, we can navigate to our Pokemon.
