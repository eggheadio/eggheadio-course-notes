import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
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
      </ul>
      <h2>My Pokemons</h2>
      <ul>
        <li>
          <Link to="/bulbasaur">Bulbasaur</Link>
        </li>
        <li>
          <Link to="/ivysaur">Ivysaur</Link>
        </li>
        <li>
          <Link to="/charmander">Charmander</Link>
        </li>
        <li>
          <Link to="/squirtle">Squirtle</Link>
        </li>
      </ul>
    </div>
  )
}

export default IndexPage
