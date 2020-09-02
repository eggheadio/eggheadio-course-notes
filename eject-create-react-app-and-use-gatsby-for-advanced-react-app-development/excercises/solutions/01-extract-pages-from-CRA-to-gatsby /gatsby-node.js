const path = require(`path`)

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // Only update the `/app` page.
  if (page.path.match(/^\/app/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = '/app/*'
    // Update the page.
    createPage(page)
  }
}
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const userTemplate = path.resolve(
    './src/templates/user-page.js'
  )
  const pokemonTemplate = path.resolve(
    './src/templates/pokemon-page.js'
  )
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

  pokemons.forEach(pokemon => {
    createPage({
      path: `/${pokemon.slug}`,
      component: pokemonTemplate,
      context: {
        name: pokemon.name
      }
    })
  })
}
