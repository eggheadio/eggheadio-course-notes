module.exports = {
  siteMetadata: {
    title: `Using plugins with Gatsby`,
    description: `How to add and configure a gatsby plugin`,
    author: `@khaled_garbaya`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
