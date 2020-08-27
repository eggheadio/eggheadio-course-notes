<h1 align="center">Breaking down a plain React App</h1>

[📹 video instructions](https://egghead.io/lessons/gatsby-breaking-down-a-plain-react-app)

> Breakdown and migrate CRA routes into Gatsby pages

## The plain React app

View the React app in codesandbox:

[![View Pokedex-cra-app](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/heuristic-mountain-e77n0?fontsize=14&hidenavigation=1&theme=dark)

## Exercise

Your job is to use what you learned in the previous exercises to convert this React app below to a Gatsby app.

> 💡 for the pages `app/profile` and `app/stats` they are specific to a logged in user and we'll add authentication to them later.

You can start with this codesandbox templet:

[![Edit trusting-snowflake-0ciho](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/trusting-snowflake-0ciho?fontsize=14&hidenavigation=1&theme=dark)


```js
//index.js
import React from 'react'
import { Router, Link } from '@reach/router'
import { render } from 'react-dom'

const pokemons = [
  {
    slug: 'bulbasaur',
    name: 'Bulbasaur'
  },
  {
    slug: 'ivysaur',
    name: 'Ivysaur'
  },
  {
    slug: 'charmander',
    name: 'Charmander'
  },
  {
    slug: 'squirtle',
    name: 'Squirtle'
  }
]
const Root = () => (
  <Router>
    <Main path="/">
      <About path="about" />
      <Profile path="app/profile" />
      <Stats path="app/stats" />
      <Pokemons path="pokemons">
        <Pokemon path=":pokemonSlug" />
      </Pokemons>
    </Main>
  </Router>
)

const Pokemons = ({ children }) => (
  <>
    <h2>My Pokemons</h2>
    <ul role="navigation">
      {pokemons.map(pokemon => (
        <li>
          <Link to={pokemon.slug}>{pokemon.slug}</Link>
        </li>
      ))}
    </ul>
    {children}
  </>
)
const Pokemon = ({ pokemonSlug }) => {
  const pokemon = pokemons.find(p => p.slug === pokemonSlug)
  return <h1>this pokemon is {pokemon.name}</h1>
}
const About = () => <h1>About Page </h1>
const Profile = () => <h2>Profile</h2>
const Stats = () => <h2>Stats</h2>

const Main = ({ children }) => (
  <div>
    <h1>Pokedex!</h1>
    <h2> Main App</h2>
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
    {children}
  </div>
)
render(<Root />, document.getElementById('root'))
```

