# 09. Use Schema Customization to Support MDX and WordPress

[Code Link](https://github.com/christopherbiscardi/advanced-gatsby-themes-workshop-code/tree/05-a-blog-interface)

[Video Link](https://egghead.io/lessons/gatsby-use-schema-customization-to-support-mdx-and-wordpress)

## Summary

To power both of our blogs using the same data structures, we need to turn the WordPress posts into concrete implementations of a BlogPost interface.

## Notes

[00:00](https://egghead.io/lessons/gatsby-use-schema-customization-to-support-mdx-and-wordpress#t=0)How to abstract this theme into a data structure that can support our product blog sourced from WordPress and our deaf blog sourced from MDX files.

00:17 We're going to start a new theme to abstract the WordPress blog we already created. This theme will be `gatsby-theme-blog-data` and we will yarn init.

```bash
# ./packackes
mkdir gatsby-theme-blog-data
cd gatsby-theme-blog-data
yarn init
touch index.js
```

[00:30](https://egghead.io/lessons/gatsby-use-schema-customization-to-support-mdx-and-wordpress#t=30) We need to look at these files to see what fields our themes are using:

- `packages/gatsby-theme-product-blog/src/templates/wordpress-blog-post.js`
- `www/src/templates/blog-post.js`
- `www/src/pages/dev-blog.js`
- `packages/gatsby-theme-product-blog/src/pages/blog.js`

We end up with this list of fields that create our abstract Blog interface.

- id
- title
- slug
- excerpt
- content

[01:05](https://egghead.io/lessons/gatsby-use-schema-customization-to-support-mdx-and-wordpress#t=65) We create a `gatsby-theme-blog-data/gatsby-node.js` file. We are going to create a [`graphql` interface](https://graphql.org/learn/schema/#interfaces). We need to us [Gatsby's `@nodeInterface`](https://www.gatsbyjs.org/docs/node-interface/) as well.

```js
// packages/gatsby-theme-blog-data/gatsby-node.js
exports.createSchemaCustomization = ({actions, schema}) => {
  const {createTypes} = actions
  createTypes(
    `interface BlogPost @nodeInterface 
    {
      id: ID!
      title: String!
      slug: String!
      excerpt: String
      content: String! }`,
  )
}
```

Notice that `id`, `title`, `slug`, and `content` are required (indicated by the `!`) while `excerpt` is not.

[01:22](https://egghead.io/lessons/gatsby-use-schema-customization-to-support-mdx-and-wordpress#t=82) We are going to use `gatsby-theme-blog-data` in our `gatsby-theme-product-blog`. This creates a parent-child relationship between the two themes. The `blog-data` theme is the parent while the `product-blog` theme is the child that uses and extends it.

[01:44](https://egghead.io/lessons/gatsby-use-schema-customization-to-support-mdx-and-wordpress#t=104) We will add `gatsby-theme-blog-data` to `packages/gatsby-theme-product-blog/gatsby-config.js` and `packages/gatsby-theme-product-blog/package.json`

```js
// packages/gatsby-theme-product-blog/gatsby-config.js
module.exports = {
  plugins: [
    `gatsby-theme-blog-data`,
    // ...
  ],
}
```

```json
// packages/gatsby-theme-product-blog/package.json
{
  //...
  "dependencies": {
    //...
    "gatsby-theme-blog-data": "^1.0.0"
  }
}
```

Like usual, we need to go back to the root of our project and run yarn to link the two.

[02:19](https://egghead.io/lessons/gatsby-use-schema-customization-to-support-mdx-and-wordpress#t=139) We just added an `allBlogPost` type to our graphQL layer. You can view the schema under `localhost:8000/__graphql`. **Note that we don't have any data that is considered a BlogPost, or satisfies this interface, so we don't get any results, but we also don't get any errors if we query it.**

[02:37](https://egghead.io/lessons/gatsby-use-schema-customization-to-support-mdx-and-wordpress#t=157) By declaring allBlogPosts as an interface, our templates can now rely on the fact that allBlogPosts exist. This means we can source our data from anywhere, and as long as it fits the blogpost interface, our templates can handle it.

[02:59](https://egghead.io/lessons/gatsby-use-schema-customization-to-support-mdx-and-wordpress#t=179) To be able to query WordPress posts, we need to create a set of concrete nodes that implement a blogpost interface. Concrete nodes are literal graphql nodes that satisfy an abstract interface. So our WordPress posts can implement the blog interface becoming concrete nodes of that interface.

[03:20](https://egghead.io/lessons/gatsby-use-schema-customization-to-support-mdx-and-wordpress#t=200) Before we create the concrete nodes, we need to create the schema type for these concrete nodes. This tells graphql that the WordPress posts implement the BlogPost interface. We use `createSchemaCustomization` lifecycle method for this.

```js
// packages/gatsby-theme-product-blog/gatsby-node.js
exports.createSchemaCustomization = ({actions, schema}) => {
  const {createTypes} = actions
  createTypes(
    `interface BlogPostWordPress implements Node & BlogPost
      @childOf(types: ["wordpress__POST]) {
        id: ID!
        title: String!
        slug: String!
        excerpt: String
        content: String!
      }`,
  )
}
//...
```

Chris goes over the `onCreate` method and explains it well, so I left the explanation verbatum:

[03:40](https://egghead.io/lessons/gatsby-use-schema-customization-to-support-mdx-and-wordpress#t=240) We also declared to be a `@childOf` a specific type. In this case, we've declared it to be a `@childOf` `"wordpress__Post"`. Though if we ever need to, **we can actually access a blogpost WordPress as a `@childOf` any WordPress post, allowing us to make more intricate queries if we ever need to break outside the blogpost interface.**

[04:12](https://egghead.io/lessons/gatsby-use-schema-customization-to-support-mdx-and-wordpress#t=252) Now we can create concrete nodes from the `blogpostWordPressType`. To create concrete nodes, we'll `require crypto` at the top of the file. Then we'll introduce an onCreate node lifecycle call.

[04:28](https://egghead.io/lessons/gatsby-use-schema-customization-to-support-mdx-and-wordpress#t=268) The onCreate node lifecycle call takes a node, gives us some actions, and allows us to use the createNodeID. **createNode is the main API we'll use to create the concrete nodes to fill in the blogpost WordPress type.**

[04:42](https://egghead.io/lessons/gatsby-use-schema-customization-to-support-mdx-and-wordpress#t=282) If the type we're operating on in onCreate node isn't a `wordpress\_\_POST`, we don't want to do anything, so we just return.

[04:59](https://egghead.io/lessons/gatsby-use-schema-customization-to-support-mdx-and-wordpress#t=299) In this case, **all the fields exist on the node and none of them need to be resolved**.

[05:13](https://egghead.io/lessons/gatsby-use-schema-customization-to-support-mdx-and-wordpress#t=313) **createNode inserts a concrete node of type blogpost WordPress into the Gatsby Node system.** It takes the field data, redeclare the parent ID, and a couple of internal types. This is why we imported crypto before to create a content digest.

```js
// packages/gatsby-theme-product-blog/gatsby-node.js
exports.onCreateNode = ({node, actions, createNodeId}) => {
  const {createNode} = actions

  if (node.internal.type !== 'wordpress__POST') {
    return
  }

  const fieldData = {
    title: node.title,
    slug: node.slug,
    content: node.content,
    excerpt: node.excerpt,
  }

  createNode({
    id: createNodeId(`${node.id} >>> BlogPostWordPress`),
    ...fieldData,
    parent: node.id,
    children: [],
    internal: {
      type: `BlogPostWordPress`,
      contentDigest: crypto
        .createHash(`md5`)
        .update(JSON.stringify(fieldData))
        .digest(`hex`),
      content: JSON.stringify(fieldData), // optional
      description: `BlogPostWordPress: "implements the BlogPost interface for WordPress posts"`, // optional
    },
  })
}
```

[05:29](https://egghead.io/lessons/gatsby-use-schema-customization-to-support-mdx-and-wordpress#t=329) If you try to query `allBlogPost`, the query will still return nothing. This is because of Gatsby' cache system. You will need to `rm -rf www/.cache` or `gatsby clean` whenever you update the `onCreateNode` lifecycle method.

[06:19](https://egghead.io/lessons/gatsby-use-schema-customization-to-support-mdx-and-wordpress#t=379) We now want to query `allBlogPost` instead of `allWordPressPost` in our project.

Inside of `packages/gatsby-theme-product-blog/gatsby-node.js` we will need to change the logic to get to the data.

```js
// packages/gatsby-theme-product-blog/gatsby-node.js
exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  const wordPressPostTemplate = require.resolve(
    `./src/templates/wordpress-blog-post.js`,
  )
  // Query for Mdx nodes to use in creating pages.
  return graphql(
    `
      query loadProductBlogsQuery {
        allBlogPost {
          nodes {
            id
            slug
          }
        }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allBlogPost.nodes.forEach(node => {
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

[06:33](https://egghead.io/lessons/gatsby-use-schema-customization-to-support-mdx-and-wordpress#t=399) Now we need to change the query inside of our `wordpress-blog-post.js` template.

```js
// ./packages/gatsby-theme-product-blog/src/templates/wordpress-blog-post.js
//...
export const query = graphql`
  query WordPressBlogPostQuery($id: String!) {
    blogPost(id: {eq: $id}) {
      title
      content
    }
  }
`
```

We have to make sure to change how we access our data in the template component as well.

```js
export default ({ data }) => (

  <div>
    <Header />
    <h1
      sx={{ variant: "textStyles.display", color: "primary" }}
      dangerouslySetInnerHTML={{
        __html: data.blogPost.title
      }}
    />
    <div
      sx={...}
      dangerouslySetInnerHTML={{
        __html: data.blogPost.content
      }}
    />
  </div>
);
```

[06:54](https://egghead.io/lessons/gatsby-use-schema-customization-to-support-mdx-and-wordpress#t=414) We need to make theses same changes in `packages/gatsby-theme-product-blog/src/pages/blog.js`.

```js
// ./packages/gatsby-theme-product-blog/src/pages/blog.js
export default props => {
  const {theme} = useContext(MyThemeContext)

  return (
    <div>
      <Global styles={{body: {backgroundColor: theme.colors.background}}} />

      <Header />
      {props.data.allBlogPost.nodes.map(node => (
        <div key={node.id}>
          {
            //...
          }
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query AllProductBlogsPage {
    allBlogPost {
      nodes {
        id
        title
        slug
        excerpt
      }
    }
  }
`
```

[07:11](https://egghead.io/lessons/gatsby-use-schema-customization-to-support-mdx-and-wordpress#t=431) **Any concrete node you can think of that you can get to implement this interface can be returned here.**
