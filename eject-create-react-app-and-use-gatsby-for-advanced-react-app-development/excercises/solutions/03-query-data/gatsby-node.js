const path = require(`path`);

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  // Only update the `/app` page.
  if (page.path.match(/^\/app/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/app/*";
    // Update the page.
    createPage(page);
  }
};

// createPages now needs to be an async function
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const userTemplate = path.resolve("./src/templates/user-page.js");
  const pokemonTemplate = path.resolve("./src/templates/pokemon-page.js");

  const result = await graphql(`
    {
      allPokemonsJson {
        nodes {
          slug
          name
        }
      }
    }
  `);
  const pokemons = result.data.allPokemonsJson.nodes;

  // Query right here!
  // replace the pokemons hardcoded data above with the result of the query
  pokemons.forEach((pokemon) => {
    createPage({
      path: `/${pokemon.slug}`,
      component: pokemonTemplate,
      context: {
        name: pokemon.name
      }
    });
  });
};
