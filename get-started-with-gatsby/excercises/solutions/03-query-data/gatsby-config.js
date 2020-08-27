const path = require('path')
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `data`)
      }
    },
    `gatsby-transformer-json`
  ]
}
