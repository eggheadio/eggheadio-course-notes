<h1 align="center">06 Query Data</h1>

> How to query data in Gatsby

## Exercise

Your job is to change the hardcoded pokemon list navigation in `src/pages/index.js` use GraphQL as well as dynamically generate the pages in gatsby-node

You can modify this Gatsby application on Codesandbox:

[![Edit mystifying-wind-smlbc](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/mystifying-wind-smlbc?fontsize=14&hidenavigation=1&theme=dark)

Try querying for the data in the GraphiQL pane on codesandbox yourself!

![graphiql in codesandbox](./graphiql.png)

inside the page you define a new query:

```js
export const query = graphql`
  {
    allPokemonsJson {
      nodes {
        slug
        name
      }
    }
  }
`
```

This will result in the following data being returned: 

```json
{
  "data": {
    "allPokemonsJson": {
      "nodes": [
        {
          "name": "Bulbasaur",
          "slug": "bulbasaur"
        },
        {
          "name": "Ivysaur",
          "slug": "ivysaur"
        },
        {
          "name": "Charmander",
          "slug": "charmander"
        },
        {
          "name": "Squirtle",
          "slug": "squirtle"
        }
      ]
    }
  }
}
```

use the result data inside the data prop to populate the navigation.

## Loading Data in Gatsby

Data is an important part of a website. Gatsby gives many options for loading data. One of the most popular one is feed data to your site using a source plugin. Also, since Gatsby is using React you can load data at runtime.

## Quering Data in Gatsby

One of the most popular and powerful options to load data in a React Component is using GraphQL.
Gatsby uses GraphQL to enable components to declare the data they need.

example usage:

```js
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
  </Layout>
)
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
```

Any component inside `src/pages` can export a query and Gatsby will execute it automatically
and make the data available in a `data` `prop`.
In none page component you need to use `useStaticQuery` hook.


