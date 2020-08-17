<h1 align="center">05 Use plugins in Gatsby</h1>

> How to install and configure plugins in Gatsby

## Exercise

your job is to add the following plugins to your gatsby project:

`gatsby-source-filesystem` with the options:

```js
options: {
  name: `images`,
  path: `${__dirname}/src/images`,
},
```

`gatsby-transformer-sharp` and `gatsby-plugin-sharp` without any options.

After that you should be able to run your project without any issues and you can see an image rendered in your home page.

You can use this starter to configure the plugins:
[![Edit inspiring-stonebraker-p9iq1](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/inspiring-stonebraker-p9iq1?fontsize=14&hidenavigation=1&theme=dark)

***Note:** you will see errors when it initially loads because Gatsby is trying to use the plugins above which aren't available!

## What is a Gatsby Plugin

A Gatsby plugin is a Node package that uses the Gatsby APIs under the hood.

You can use a plugin to source data into your site, transform content or enhance the output of your site like adding google analytics etc...

Gatsby plugins can be categorized into 3 types:

- A Gatsby Source plugin (e.g: gatsby-source-contentful pulls data from Contentful)
- A Gatsby Transformer Plugin (e.g: gatsby-transformer-remark convert markdown text to html)
- A Gatsby Plugin (e.g: gatsby-plugin-google-analytics adds Google analytics in your site)

## How to install and configure a plugin

1. Install a plugin you can run the command `npm install plugin-name` e.g `npm install gatsby-source-contentful`.

2. Add the plugin to your `gatsby-config.js` file

```js
module.exports = {
  plugins: [
    `plugin-name`,
    {
      resolve: `plugin-that-needs-config`,
      options: {
        param1: `value`
      }
    }
  ]
}
```

e.g

```js
module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`, // no options needed
    {
      // options needed
      resolve: `gatsby-source-contentful`,
      options: {
        space: `<space-id>`,
        accessToken: `<access-token>`
      }
    }
  ]
}
```

