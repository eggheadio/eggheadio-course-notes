import React from "react";
import { Link, graphql } from "gatsby";

// Add a page query to this file which will pass the results
// to the data prop:
export const query = graphql`
  {
    allPokemonsJson {
      nodes {
        slug
        name
      }
    }
  }
`;

const IndexPage = ({ data }) => {
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
        {data.allPokemonsJson.nodes.map((pokemon) => (
          <li>
            <Link to={pokemon.slug}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;
