# Combine build time and client runtime data in a Gatsby app

[Video link](https://www.egghead.io/lessons/egghead-combine-build-time-and-client-runtime-data-in-a-gatsby-app)

As our app currently works, if we change an existing Pokemon's information in Contentful and then refresh our app, the changes aren't recognized.

This is because the data that we are loading is loaded at build time.

Stopping our server and restarting it will show the updated change.

Let's update our app to have a combination of build-time and run-time data.

In Contentful, there is a "Power" field in our Pokemon info. We will update our Gatsby app so that it will refresh the Power rating as it changes.

This example requires the Contentful SDK to be installed:
```
npm install contentful
```

## Get Data into the `pokemons.js` Template

Inside of `src/templates/pokemon.js` we will start by importing `useState` and `useEffect` from React, and `createClient` from Contentful.

We'll create a `power` state to track with `useState`.

We'll also use `useEffect` to make our client-side request. Be sure to use an empty dependency array so it only runs once!

Inside of useEffect, we'll call `createClient` and pass in the Contentful space and our access token. We'll then find the entry that matches the `slug` passed in via `pageContext` from `gatsby-node.js`.

```js
import React, {useState, useEffect} from 'react'
import {createClient} from 'contentful'

// imported components as before

const Pokemon = ({pageContext}) => {
  const [power, setPower] = useState('')

  useEffect(() => {
    const client = createClient({space: 'yourContentfulSpace', accessToken: process.env.TOKEN_HERE})

    client.getEntries({'fields.slug': pageContext.slug})
      .then(response => {
        setPower(response.items[0].fields.power)
      })
  }, [])

  // ...
```

## Update the Component

We have the `power` item in state, so let's update our component to display it:

```js
  <PokemonLayout>
    <h1>This pokemon is {pageContext.name}</h1>
    <p>power: {power}</p>
  </PokemonLayout>
```

Now when we refresh the page, the `power` value will be updated from the server.