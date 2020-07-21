# 06. Build an Advanced Gatsby Theme Shopify

[Code Link](https://github.com/christopherbiscardi/advanced-gatsby-themes-workshop-code/tree/03-a-shopify-theme)

[Video Link](https://egghead.io/lessons/gatsby-build-an-advanced-gatsby-theme-shopify)

## Summary

The Shopify source and rendering logic is the next theme we break out. We'll cover theme options, environment variables, and more.

## Notes

[00:19](https://egghead.io/lessons/gatsby-build-an-advanced-gatsby-theme-shopify#t=19) Now we are going to build `gatsby-theme-shopify` and all the files that go along with setting up a new theme. We also want to move `swag.js` to our theme's `pages/` directory.

```bash
mkdir packages/gatsby-theme-shopify
cd packages/gatsby-theme-shopify
yarn init -y
mkdir -p src/pages
mv ../../www/src/pages/swag.js src/pages/
```

[00:52](https://egghead.io/lessons/gatsby-build-an-advanced-gatsby-theme-shopify#t=52) Now we need to add it to `www/package.json` and the `www/gatsby-config/js`.

```js
// www/package.json
{
  "name": "www",
  "version": "1.0.0",
  "main": "index.js",
  "author": "christopherbiscardi <chris@christopherbiscardi.com> (@chrisbiscardi)",
  "license": "MIT",
  "dependencies": {
  // ...

    "gatsby-source-wordpress": "^3.1.43",
    "gatsby-theme-marketing": "*",
    "gatsby-theme-shopify": "*",
    "gatsby-transformer-sharp": "^2.2.23",
    "react": "^16.10.2",
    "react-dom": "^16.10.2",
    "theme-ui": "^0.2.44"
  },
}
```

```js
// www/gatsby-config.js
module.exports = {
  plugins: [
    `gatsby-theme-marketing`,
    `gatsby-theme-shopify`,
    `gatsby-plugin-mdx`,
    // ...
  ],
}
```

Remember, **we also need to create the index.js file to avoid the not found error**.

```bash
touch index.js
```

[01:18](https://egghead.io/lessons/gatsby-build-an-advanced-gatsby-theme-shopify#t=78) We'll copy the these files into our newly created `packages/gatsby-theme-shopify` from the marketing theme:

- `components/` directory
- `gatsby-browser.js`
- `gatsby-ssr.js`
- `theme.js`
- `context.js`
- `wrap-root-element.js`

[01:42](https://egghead.io/lessons/gatsby-build-an-advanced-gatsby-theme-shopify#t=102) Now we will change the theme preset for our shopify theme to `funk`.

```js
// packages/gatsby-theme-shopify/src/theme.js
import {funk} from '@theme-ui/presets'

export default funk
```

Note that we'll copy over the dependencies that we introduced in gatsby-theme-marketing into our Shopify theme as well.

```js
// packages/gatsby-theme-shopify/package.json
{
  "name": "gatsby-theme-shopify",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "@emotion/core": "^10.0.21",
    "@theme-ui/presets": "^0.2.44",
    "theme-ui": "^0.2.44",
  }
}
```

[02:09](https://egghead.io/lessons/gatsby-build-an-advanced-gatsby-theme-shopify#t=129) Our swag.js page's still using the JSX Pragma from theme-ui. We'll change that to point to our context and import our MyThemeContext as well.

```js
// packages/gatsby-theme-shopify/src/pages/swag.js
/** @jsx jsx */
import {useContext} from 'react'
import {MyThemeContext, jsx} from '../context'
import {graphql} from 'gatsby'
import {Global} from '@emotion/core'
```

[02:28](https://egghead.io/lessons/gatsby-build-an-advanced-gatsby-theme-shopify#t=148) Like we did in the marketing theme, we want to set the `Global` styles for the pages we control. In this case, its `swag.js`

```js
// packages/gatsby-theme-shopify/src/pages/swag.js
export default ({data, ...props}) => {
  const {theme} = useContext(MyThemeContext)
  return (
    <div>
      <Global styles={{body: {backgroundColor: theme.colors.background}}} />
      <Header />
      {/* ... */}
    </div>
  )
}
```

[02:48](https://egghead.io/lessons/gatsby-build-an-advanced-gatsby-theme-shopify#t=168) Back in `www`, we have a number of dependencies from our package.json that we can now move over to our Shopify theme. This includes dependencies like:

- `gatsby-image`
- `gatsby-source-shopify`
- `shopify-buy`

[03:03](https://egghead.io/lessons/gatsby-build-an-advanced-gatsby-theme-shopify#t=183) Note that as you move the `gatsby-source-shopify` and shopify-buy dependencies over from www, we can remove them from the original package.json. Note that also, because we used `gatsby-image` in the rest of the site, we won't remove it from the original package.json.

```js
// packages/gatsby-theme-shopify/package.json
{
  "name": "gatsby-theme-shopify",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
  "@emotion/core": "^10.0.21",
  "@theme-ui/presets": "^0.2.44",
  "theme-ui": "^0.2.44",
  "isolated-theme-ui": "1.0.1",
  "gatsby-image": "^2.2.29",
  "gatsby-source-shopify": "^3.0.24",
  "shopify-buy": "^2.8.0",
  "gatsby-plugin-sharp": "^2.2.32",
  "gatsby-transformer-sharp": "^2.2.23"
},
```

[03:32](https://egghead.io/lessons/gatsby-build-an-advanced-gatsby-theme-shopify#t=212)
Now we are going to open up our `www/gatsby-config.js` and move the shopify specific plugins over to `gatsby-theme-shopify`. We will move these plugins:

- `gatsby-plugin-sharp`
- `gatsby-transformer-sharp`
- `gatsby-source-shopify`

```js
// packages/gatsby-theme-shopify/gatsby-config.js
module.exports = {
plugins: [
`gatsby-plugin-sharp`,
`gatsby-transformer-sharp`,
{
  resolve: "gatsby-source-shopify",
  options: {
  // The domain name of your Shopify shop. This is required.
  // Example: 'gatsby-source-shopify-test-shop' if your Shopify address is
  // 'gatsby-source-shopify-test-shop.myshopify.com'.
  shopName: "corgi-supply-inc",
        ...
      }
    }
  ]
};
```

Now we will be able to remove `gatsby-source-shopify` from `www/gatsby-config.js` plugin array 🥳

[04:06](https://egghead.io/lessons/gatsby-build-an-advanced-gatsby-theme-shopify#t=246) Right now, we can't pass any options to our theme. If you take a look at `gatsby-theme-shopify/gatsby-config.js` we can see that it expects an `accessToken` to be set. You can accept options from a theme by turning the gatsby config into a function that takes options.

```js
module.exports = options => ({
...
})
```

[04:25](https://egghead.io/lessons/gatsby-build-an-advanced-gatsby-theme-shopify#t=265) **Be sure to return an object from this function**, as if you don't use the parenthesis around this opening bracket, the function will be treated as a function body, instead of an object return. Using the options that come in, we'll spread any additional options for the sourceShopify into the option's object.

```js
// packages/gatsby-theme-shopify/gatsby-config.js
module.exports = options => ({
plugins: [
`gatsby-plugin-sharp`,
`gatsby-transformer-sharp`,
{
resolve: "gatsby-source-shopify",
options: {

...

          includeCollections: ["shop"],
          ...options.sourceShopify
      }
    }

]
});
```

[04:45](https://egghead.io/lessons/gatsby-build-an-advanced-gatsby-theme-shopify#t=285) Spreading `...options.sourceShopify` allows the user of our theme to override these default option. It's important to note that the options, if we were to use them in www, are passed in the same as any other plug-in's options.

[05:09](https://egghead.io/lessons/gatsby-build-an-advanced-gatsby-theme-shopify#t=309) Finally, in swag.js, we have a hardcoded domain. Go on and change this domain to an environment variable.

```js
// packages/gatsby-theme-shopify/src/pages/swag.js
const client = Client.buildClient({
  domain: process.env.GATSBY_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
})
```

While on gatsby Shopify domain, using the `GATSBY_` prefix on an environment variable, **means that the environment variable automatically gets injected into the client site bundle**. If we don't prefix it with Gatsby, we would either have to manually pass the environment variable in, or it wouldn't be included at all.

[05:44](https://egghead.io/lessons/gatsby-build-an-advanced-gatsby-theme-shopify#t=344) It's important to note at this point, that **if you pass secrets into the options of a theme and you have a gatsby-browser file, any option you pass in will be leaked to the client**. This is why it's important to use process.env to access any secrets in gatsby-node.

[06:05](https://egghead.io/lessons/gatsby-build-an-advanced-gatsby-theme-shopify#t=365) We can now go into www and add the environment variable. There are a couple other ways to access environment variables or config options in gatsby-config. For more info, checkout Chris' blog:

- [Applying theme options using React Context](https://www.christopherbiscardi.com/post/applying-theme-options-using-react-context/)
- [Applying theme options using custom configuration nodes](https://www.christopherbiscardi.com/post/applying-theme-options-using-custom-configuration-nodes/)
- [Applying theme options using webpack's defineplugin](https://www.christopherbiscardi.com/post/applying-theme-options-using-webpacks-defineplugin/)

[07:14](https://egghead.io/lessons/gatsby-build-an-advanced-gatsby-theme-shopify#t=434) Again, we are going to shadow the `gatsby-theme-shopify/theme.js` to use the `deep` preset again.

```js
// www/src/gatsby-theme-shopify/theme.js
import {deep} from '@theme-ui/presets'

export default deep
```
