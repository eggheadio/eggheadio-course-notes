# 10. Powering BlogPost with WordPress and MDX

[Code Link](https://github.com/christopherbiscardi/advanced-gatsby-themes-workshop-code/tree/06-mdx-blog-posts)

[Video Link](https://egghead.io/lessons/gatsby-powering-blogpost-with-wordpress-and-mdx)

## Summary

We can back the BlogPost interface with WordPress nodes or Mdx nodes, or both!

## Notes

[00:13](https://egghead.io/lessons/gatsby-powering-blogpost-with-wordpress-and-mdx#t=13) **Themes, plugins, and gatsby sites are all the same thing**. They all can use the `gatsby-*.js` files to take advantage of Gatsby' build system. They all can take advantage of component shadowing.

[00:31](https://egghead.io/lessons/gatsby-powering-blogpost-with-wordpress-and-mdx#t=31) **This insight lets us say that when we implement the parent theme in our site**, it's the same as implementing it in our product blog theme, **the difference being that our site is not currently NPM installable, whereas the product blog theme is**.

[01:00](https://egghead.io/lessons/gatsby-powering-blogpost-with-wordpress-and-mdx#t=60) Now we are going to implement `BlogPostMdxDev` to create concrete nodes for `BlogPost` with our mdx files. This schema customization lifecycle looks a lot like our blog post WordPress. We've named it `blogPostMdxDev` for our dev blog. It implements node in blogPost, just like before, as the child of the types MDX instead of being a child of the types wordpressPost.

```js
// www/gatsby-node.js
createTypes(`
    type BlogPostMdxDev implements Node & BlogPost @childOf(types: ["Mdx"]) {
      id: ID!
      title: String!
      slug: String!
      excerpt: String
      content: String!
    }
  `)
```

[01:25](https://egghead.io/lessons/gatsby-powering-blogpost-with-wordpress-and-mdx#t=85)

```js
exports.onCreateNode = ({node, actions, createNodeId}) => {
  const {createNode} = actions

  if (node.internal.type !== 'Mdx') {
    return
  }

  // This is the main difference between the wordpress post
  // We get the title and slug from the front matter
  const fieldData = {
    title: node.frontmatter.title,
    slug: node.frontmatter.slug,
  }

  createNode({
    id: createNodeId(`${node.id} >>> BlogPostMdxDev`),
    ...fieldData,
    parent: node.id,
    children: [],
    internal: {
      type: `BlogPostMdxDev`,
      contentDigest: crypto
        .createHash(`md5`)
        .update(JSON.stringify(fieldData))
        .digest(`hex`),
      content: JSON.stringify(fieldData), // optional
      description: `BlogPostMdxDev: "implements the BlogPost interface for Mdx"`, // optional
    },
  })
}
```

[01:43](https://egghead.io/lessons/gatsby-powering-blogpost-with-wordpress-and-mdx#t=103) `excerpt` and `content` are not on the node right now. **This is because they're implemented through GraphQL resolvers.** (Don't forget to require crypto at the top of the file.)

[01:54](https://egghead.io/lessons/gatsby-powering-blogpost-with-wordpress-and-mdx#t=114) When we run the site, we get an error `Cannot return null for non-nullable field BlogPostMdxDev.content`. This confirms what we already knew: This field is implemented through a GraphQL resolver.

⚠️ Chris dive's deep into gatsby internals to explain how to create a field extension to resolve the field `BlogPostMdxDev.content`. This is a hefty explanation so I left Chris' words verbatim ⚠️

[02:07](https://egghead.io/lessons/gatsby-powering-blogpost-with-wordpress-and-mdx#t=127) To remedy this, we're going to take advantage of an advanced feature of schema customization called field extensions. A field extension is a custom directive defined by us that in this case taps deep into the [node model](https://www.gatsbyjs.org/docs/node-model/) and calls some very obscure APIs to be able to resolve the MDX parent as well as the body or the excerpt.

[02:31](https://egghead.io/lessons/gatsby-powering-blogpost-with-wordpress-and-mdx#t=151) If you're interested in this further, I suggest looking at [runQuery](https://www.gatsbyjs.org/docs/node-model/#runQuery) first, which allows us to run queries on specific types in the Gatsby Node system with specific filters and as list or returning the first query only.

[02:45](https://egghead.io/lessons/gatsby-powering-blogpost-with-wordpress-and-mdx#t=165) After understanding the runQuery nodeModel, you might want to look into the other nodeModel functions. `prepareNodes` is one the big behemoths in driving the resolution of fields in the Gatsby Node system.

[02:58](https://egghead.io/lessons/gatsby-powering-blogpost-with-wordpress-and-mdx#t=178) It typically won't need to touch this function so we won't cover it in this course, but know that we're using it here to enable us to resolve multiple fields in a row. Finally note that we've named our field extension proxy resolve.

_In my own words:_

We need to us `createFieldExtension` so that we can tell gatsby' GraphQL system where to resolve `content` and `excerpt` for our Mdx posts. We have to take advantage of the `nodeModel` functions `prepareNodes` and `runQuery` to create the a new source for our fields. This will end up mapping `options.from` to `newSource.__gatsby_resolved`.

```js
// ./www/gatsby-node.js
actions.createFieldExtension({
  name: 'proxyResolve',
  args: {
    from: {type: 'String!'},
  },
  extend: (options, previousFieldConfig) => {
    return {
      resolve: async (source, args, context, info) => {
        await context.nodeModel.prepareNodes(
          info.parentType, // BlogPostMdxDev
          splitProxyString(options.from), // querying for resolvable field
          splitProxyString(options.from), // resolve this field
          [info.parentType.name], // The types to use are these
        )

        const newSource = await context.nodeModel.runQuery({
          type: info.parentType,
          query: {filter: {id: {eq: source.id}}},
          firstOnly: true,
        })

        return _.get(newSource.__gatsby_resolved, options.from)
      },
    }
  },
})
```

[03:28](https://egghead.io/lessons/gatsby-powering-blogpost-with-wordpress-and-mdx#t=208) Now we need to add this new `@proxyResolve` field extension to our schema. We need to `proxyResolve` the `parent.excerpt` and the `parent.body` fields.

```js
// ./www/gatsby-node.js
//...
createTypes(
  `
    type BlogPostMdxDev implements Node & BlogPost @childOf(types: ["Mdx"]) {
      id: ID!
      title: String!
      slug: String!
      excerpt: String @proxyResolve(from: "parent.excerpt")
      content: String! @proxyResolve(from: "parent.body")
    }
  `,
)
//...
```

[04:13](https://egghead.io/lessons/gatsby-powering-blogpost-with-wordpress-and-mdx#t=253) Now that we have the Mdx posts added to `allBlogPost`, when you clear the cache and run the site, you will see that the mdx and wordpress posts are showing up in the blog and devblog sections.

[04:30](https://egghead.io/lessons/gatsby-powering-blogpost-with-wordpress-and-mdx#t=270) To fix this, we'll create `collection`s of content by adding a field to our blogpost. We want to add a `collection: String` field to our `BlogPost` interface. Note that it is not required so we don't break anyone that is using this theme.

```js
// ./packages/gatsby-theme-blog-data/gatsby-node.js
exports.createSchemaCustomization = ({actions}) => {
  const {createTypes} = actions
  createTypes(
    `
      interface BlogPost @nodeInterface {
        id: ID!
        title: String!
        slug: String!
        excerpt: String
        content: String!
        collection: String
      }
    `,
  )
}
```

[04:49](https://egghead.io/lessons/gatsby-powering-blogpost-with-wordpress-and-mdx#t=289) **Adding a field as an optional field means that we won't break them when we ship it**.

[05:01](https://egghead.io/lessons/gatsby-powering-blogpost-with-wordpress-and-mdx#t=301) In `gatsby-theme-product-blog` in our field data, we can hard code the collection as a product.

```js
// ./packages/gatsby-theme-product-blog/gatsby-node.js
// ...
const fieldData = {
  title: node.title,
  slug: node.slug,
  content: node.content,
  excerpt: node.excerpt,
  collection: 'product',
}
//...
```

In `www/gatsby-node.js`, we'll do the same for MDX. We'll declare it to be in a developer collection.

```js
// ./www/gatsby-node.js
//...
const fieldData = {
  title: node.frontmatter.title,
  slug: node.frontmatter.slug,
  collection: 'developer',
}
//...
```

[05:16](https://egghead.io/lessons/gatsby-powering-blogpost-with-wordpress-and-mdx#t=316) The collection field will be the only feature that tells us whether to put a blog in the dev blog or to put a blog in the product's blog. This means that we'll be able to use WordPress posts on the dev blog if we want to and MDX posts on the product's blog, if we want to.

[05:33](https://egghead.io/lessons/gatsby-powering-blogpost-with-wordpress-and-mdx#t=333) Now we have to update the query for product blogs.

```js
// ./packages/gatsby-theme-product-blog/gatsby-node.js
// and ./packages/gatsby-theme-product-blog/pages/blog.js
// ...
return graphql(`
  query loadProductBlogsQuery {
    allBlogPost(filter: {collection: {eq: "product"}}) {
      ...
    }
  }
`)
// ...
```

[05:55](https://egghead.io/lessons/gatsby-powering-blogpost-with-wordpress-and-mdx#t=355) Next we will query `allBlogPost` for mdx files in our app.

```js
// ./www/gatsby-node.js
// ...
const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
// Query for Mdx nodes to use in creating pages.
return graphql(
  `
    query loadPagesQuery {
      allBlogPost(filter: {collection: {eq: "developer"}}) {
        nodes {
          id
          slug
        }
      }
    }
  `,
)
// ...
```

[06:15](https://egghead.io/lessons/gatsby-powering-blogpost-with-wordpress-and-mdx#t=375) We need to make sure that we update how we get the slug and id of our fields.

```js
// ./www/gatsby-node.js
// ...
result.data.allBlogPost.nodes.forEach(node => {
  createPage({
    path: `/dev-blog/${node.slug}`,
    component: blogPostTemplate,
    context: {
      id: node.id,
    },
  })
})
//...
```

[06:27](https://egghead.io/lessons/gatsby-powering-blogpost-with-wordpress-and-mdx#t=387) We need to change `www/src/templates/blog-post.js` to use our new `BlogPostQuery`.

```js
// ./www/src/templates/blog-post.js
export default ({data}) => (
  <div>
    <Header />
    <H.h1>{data.blogPost.title}</H.h1>
    <MDXRenderer>{data.blogPost.content}</MDXRenderer>
  </div>
)

export const query = graphql`
  query BlogPostQuery($id: String!) {
    blogPost(id: {eq: $id}) {
      title
      content
    }
  }
`
```

Finally, in dev-blog.js, which lists all of our posts, we'll replace the all file query with an allBlogPost query that looks for the collection.

```js
// ./www/src/pages/dev-blog.js
// ...
export const query = graphql`
  query AllDevBlogsPage {
    allBlogPost(filter: {collection: {eq: "developer"}}) {
      nodes {
        title
        slug
        excerpt
      }
    }
  }
`
```

The Query is much smaller now because we don't have to filter by a bunch of fields.

[06:46](https://egghead.io/lessons/gatsby-powering-blogpost-with-wordpress-and-mdx#t=406) Again, we need to update how we access the fields in the component.

```js
// ./www/src/pages/dev-blog.js

export default props => (
  <div>
    <Header />
    {props.data.allBlogPost.nodes.map(node => (
      <div key={node.id}>
        <Text.Link to={`/dev-blog/${node.slug}`}>
          <strong>{node.title}</strong>
        </Text.Link>
        <Text.p>{node.excerpt}</Text.p>
      </div>
    ))}
  </div>
)
// ...
```

[07:29](https://egghead.io/lessons/gatsby-powering-blogpost-with-wordpress-and-mdx#t=449) **It doesn't matter what node types we back each collection with, as long as we have the logic to render them**. One feature that can let us know which one to render is \_\_typename, which allows us to access the underlying type name of the node that we're returning.

[07:44](https://egghead.io/lessons/gatsby-powering-blogpost-with-wordpress-and-mdx#t=449) One other option is inline fragments. We can insert inline fragments, or types that we know we can get back, and return the type name of the parent.
