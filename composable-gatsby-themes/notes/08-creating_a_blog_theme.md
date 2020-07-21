# 08. Creating a Blog Theme

[Code Link](https://github.com/christopherbiscardi/advanced-gatsby-themes-workshop-code/tree/04-a-blog-theme)

[Video Link](https://egghead.io/lessons/gatsby-creating-a-blog-theme)

## Summary

The blog theme takes us into the schema customization APIs as this is the base on which we'll build both the product blog and the developer blog on our site.

## Notes

[0:00](https://egghead.io/lessons/gatsby-creating-a-blog-theme#t=00) We will use schema customization to create a code data abstraction that we can use across multiple themes.

[0:19](https://egghead.io/lessons/gatsby-creating-a-blog-theme#t=19) Let's start with `gatsby-theme-product-blog`.

```bash
mkdir packages/gatsby-theme-product-blog
cd packages/gatsby-theme-product-blog
yarn init -y
```

[0:33](https://egghead.io/lessons/gatsby-creating-a-blog-theme#t=33) Now we need to copy `www/src/pages/blog.js` and `www/src/templates/wordpress-blog-post.js` into `packages/gatsby-theme-product-blog`.

[0:44](https://egghead.io/lessons/gatsby-creating-a-blog-theme#t=44) Now that we've moved the files, we'll do the same thing we did in the marketing theme and the shopify theme, and move the `components`, `gatsby-ssr.js` and `gatsby-browser.js`, as well as the `wrap-root-element.js`. We'll also need the `context.js` file that we've created, as well as the `theme.js` file.

[0:59](https://egghead.io/lessons/gatsby-creating-a-blog-theme#t=59) Don't forget to copy over an empty `index.js` file to point to in our `packages/gatsby-theme-product-blog/package.json`.

Heres what our theme structure looks like right now:

```bash
> tree gatsby-theme-product-blog
packages/gatsby-theme-product-blog
├── gatsby-browser.js
├── gatsby-ssr.js
├── package.json
└── src
    ├── components
    │   ├── header.js
    │   ├── headings.js
    │   └── text.js
    ├── context.js
    ├── pages
    │   └── blog.js
    ├── templates
    │   └── wordpress-blog-post.js
    └── theme.js
```

[1:42](https://egghead.io/lessons/gatsby-creating-a-blog-theme#t=102) Now we have to add our new theme to our `www/package.json`

```js
// www/package.json
"gatsby-theme-shopify": "^1.0.0",
"gatsby-theme-product-blog": "^1.0.0",
```

We also need to go into www/gatsby-config.js and do the same thing.

```js
// www/gatsby-config.js
plugins: [
`gatsby-theme-product-blog`,
`gatsby-theme-marketing`,
`gatsby-theme-shopify`,
`gatsby-plugin-mdx`,
`gatsby-plugin-sharp`,
`gatsby-transformer-sharp`
...
]
```

[2:07](https://egghead.io/lessons/gatsby-creating-a-blog-theme#t=127) Back in the package.json for our product blog, we'll add the same dependencies we've been adding to our other themes.

```json
{
  "name": "gatsby-theme-product-blog",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "@theme-ui/presets": "^0.2.44",
    "theme-ui": "^0.2.44",
    "isolated-theme-ui": "^0.2.49"
  }
}
```

[2:27](https://egghead.io/lessons/gatsby-creating-a-blog-theme#t=147) Remember to run yarn to link your packages in. Running the project right now, everything breaks. This is because we need to pull the `www/gatsby-node.js` logic into our theme.

[2:38](https://egghead.io/lessons/gatsby-creating-a-blog-theme#t=158) We need to create a `gatsby-node.js` file for out theme.

[2:55](https://egghead.io/lessons/gatsby-creating-a-blog-theme#t=175) Now we will copy the contents of `www/gatsby-node.js`.

We can remove the processing for mdx pages, the `result.data.allMdx.nodes.forEach(node => {})` block.

[3:19](https://egghead.io/lessons/gatsby-creating-a-blog-theme#t=199) This leaves us with just the WordPress post creation logic.

_before_

```js
const path = require(`path`)

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const wordPressPostTemplate = path.resolve(
    `src/templates/wordpress-blog-post.js`,
  )
  // Query for Mdx nodes to use in creating pages.
  return graphql(
    `
      query loadPagesQuery {
        allWordpressPost {
          nodes {
            id
            date
            title
            slug
            content
            excerpt
          }
        }
        allMdx {
          nodes {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allMdx.nodes.forEach(node => {
      createPage({
        path: `/dev-blog/${node.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          id: node.id,
        },
      })
    })

    result.data.allWordpressPost.nodes.forEach(node => {
      createPage({
        path: `/blog/${node.slug}`,
        component: wordPressPostTemplate,
        context: {
          id: node.id,
        },
      })
    })
  })
}
```

_after_

```js
exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  const wordPressPostTemplate = require.resolve(
    `./src/templates/wordpress-blog-post.js`,
  )
  // Query for Mdx nodes to use in creating pages.
  return graphql(
    `
      query loadProductBlogsQuery {
        allWordpressPost {
          nodes {
            id
            date
            title
            slug
            content
            excerpt
          }
        }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allWordpressPost.nodes.forEach(node => {
      createPage({
        path: `/blog/${node.slug}`,
        component: wordPressPostTemplate,
        context: {
          id: node.id,
        },
      })
    })
  })
}
```

We'll also need to move the WordPress plugin from `www/gatsby-config.js` into our `gatsby-theme-product-blog/gatsby-config.js`. Create a gatsby-config.js.

[3:33](https://egghead.io/lessons/gatsby-creating-a-blog-theme#t=213) Now we will remove that `gatsby-source-wordpress-plugin` from `www/gatsby-config.js` to `packages/gatsby-theme-product-blog/gatsby-config.js`.

```js
// packages/gatsby-theme-product-blog/gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'advancedgatsbythemescourse.home.blog',
        protocol: 'https',
        hostingWPCOM: true,
        auth: {
          wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
          wpcom_app_clientId: process.env.WORDPRESS_CLIENT_ID,
          wpcom_user: process.env.WORDPRESS_EMAIL,
          wpcom_pass: process.env.WORDPRESS_PASSWORD,
        },
      },
    },
  ],
}
```

Notice `www/gatsby-config.js` is getting much smaller 😍.

[3:58](https://egghead.io/lessons/gatsby-creating-a-blog-theme#t=238) Note: need to take the `gatsby-source-wordpress` and move it from the `www/package.json` into our `gatsby-theme-product-blog/package.json`. Run yarn again, and we can build the site.

[4:09](https://egghead.io/lessons/gatsby-creating-a-blog-theme#t=249) Now we are getting an error saying "The Plugin "gatsby-theme-product-blog" created a page with a component that doesn't exist.

[4:24](https://egghead.io/lessons/gatsby-creating-a-blog-theme#t=264) This is because we are using `path.resolve` in `gatsby-theme-product-blog`. We can solve this issue by changing any `path.resolve` calls to `require.resolve`.

```js
// packages/gatsby-theme-product-blog/gatsby-node.js
const wordPressPostTemplate = require.resolve(
  `./src/templates/wordpress-blog-post.js`,
)
```

[4:43](https://egghead.io/lessons/gatsby-creating-a-blog-theme#t=283) `require.resolve` is the same algorithm as the require for any other node module, and it'll return the path if it finds the module, or error if it doesn't. This means we won't have to wait until the `createPage` call gets used to find out that `wordPressPostTemplate` isn't defined, or we couldn't find it. This makes our errors easier to understand and fix.

[5:04](https://egghead.io/lessons/gatsby-creating-a-blog-theme#t=304) Remember to remove all of the allWordpressPost logic from the `www/gatsby-node.js`.

_before_

```js
// www/gatsby-node.js
const path = require(`path`)

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const wordPressPostTemplate = path.resolve(
    `src/templates/wordpress-blog-post.js`,
  )
  // Query for Mdx nodes to use in creating pages.
  return graphql(
    `
      query loadPagesQuery {
        allWordpressPost {
          nodes {
            id
            date
            title
            slug
            content
            excerpt
          }
        }
        allMdx {
          nodes {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allMdx.nodes.forEach(node => {
      createPage({
        path: `/dev-blog/${node.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          id: node.id,
        },
      })
    })

    result.data.allWordpressPost.nodes.forEach(node => {
      createPage({
        path: `/blog/${node.slug}`,
        component: wordPressPostTemplate,
        context: {
          id: node.id,
        },
      })
    })
  })
}
```

_after_

```js
// www/gatsby-node.js
const path = require(`path`)

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  // Query for Mdx nodes to use in creating pages.
  return graphql(
    `
      query loadPagesQuery {
        allMdx {
          nodes {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allMdx.nodes.forEach(node => {
      createPage({
        path: `/dev-blog/${node.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          id: node.id,
        },
      })
    })
  })
```

[5:28](https://egghead.io/lessons/gatsby-creating-a-blog-theme#t=328) We need to us our own jsx pragma (rather than `theme-ui`'s). In the `templates/wordpress-blog-post.js` and `pages/blog.js` import our own `jsx` pragma from `../context.js`

```js
import {jsx} from '../context'
```

[5:41](https://egghead.io/lessons/gatsby-creating-a-blog-theme#t=) Now we will want to take advantage of `@emotion/core` `Global` component. We can import `MyThemeContext` and `Global` to apply our theme to `templates/wordpress-blog-post.js` and `pages/blog.js`.

```js
/** @jsx jsx */
import { MyThemeContext, jsx } from "../context";
import { Global } from "@emotion/core";
// ...

export default props => {
  const { theme } = useContext(MyThemeContext);

  return (
    <div>
      <Global styles={{ body: { backgroundColor: theme.colors.background } }} />
      // ..
```

[6:03](https://egghead.io/lessons/gatsby-creating-a-blog-theme#t=363) We are using `www` as an example site to consume all of our themes. Which is why we are overriding the theme file to show that the user has control of the themes that they import.
