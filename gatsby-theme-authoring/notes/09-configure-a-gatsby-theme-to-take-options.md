# Configure a Gatsby Theme to Take Options

**[📹 Video](https://egghead.io/lessons/gatsby-configure-a-gatsby-theme-to-take-options)**

## ⚡ Passing options to gatsby-config
In a Gatsby theme, **one can pass options into the gatsby-config and gatsby-node**.

We'll start by turning the gatsby-config into a function, and *passing in options as arguments to that function*.

### gatsby-theme-events/gatsby-config.js
```javascript
module.exports = ({ contentPath = "data", basePath = "/" }) => ({
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: contentPath,
      },
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: "Event",
      },
    },
  ],
})
```
The options that were added as arguments to the function above *are now provided as a second argument to Gatsby's API hooks*.

## ⚡ Passing options to gatsby-node

In the `gatsby-node` file, options are passed as the second argument to the API hooks.

Here we can set `contentPath` to `options.contentPath`, and set the fallback to 'data'.
### gatsby-theme-events/gatsby-node.js
```javascript
exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || "data"
  // ...
}
```
We can do the same thing for `createResolvers` and `createPages`.
```javascript
exports.createResolvers = ({ createResolvers }, options) => {
  const basePath = options.basePath || "/"
  // ...
}
```
```javascript
exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || "/"
  // ...
}
```
## ⚡ Setting up our site
Because we've converted gatsby-theme-events to use a function export in gatsby-config, we can no longer run the theme on its own.

**The function export in gatsby-config.js is only supported for themes.**

We need to now setup site to consume gatsby-theme-events and run.

Within site, create a gatsby-config.js file, and within that:
### site/gatsby-config.js
```javascript
module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-events",
      options: {
        contentPath: "events",
        basePath: "/events",
      },
    },
  ],
}
```
When we run this theme through site, we should see an events folder get created, and we should have a page called events containing our event listings.

## ⚡ Testing everything out
To test, run the following in the terminal:
```
yarn workspace site develop
```
We should be able to navigate to an events page, but **we don't have any events displayed yet**.

Within the events directory that has just been created, copy over the events.yml file from the other events directory.

After restarting Gatsby development with
```bash
yarn workspace site develop
```
We should see our events displayed on localhost:8000/events.

The URL shows that our config options are being taken into account.

## Resoures
- [Lesson 9 Code](https://github.com/ParkerGits/authoring-gatsby-themes/tree/09-configure-a-gatsby-theme-to-take-options)
- [Gatsby - Configure a theme to take options](https://www.gatsbyjs.org/tutorial/building-a-theme/#configure-a-theme-to-take-options)
