# Naming Conventions for Fields with GraphQL Aliases in Mind

- 📹 [Video Link](https://egghead.io/lessons/graphql-paginate-entries-using-the-connection-specification)
- 💻 [Code Link](https://github.com/nikgraf/designing-graphql-schemas-course/tree/master/lesson07)

### Pagination Best Practices

- 🔑 The [relay cursor connections specification](https://relay.dev/graphql/connections.htm) _aims to provide an option for GraphQL clients to consistently handle pagination best practices with support for related metadata via a GraphQL server._
  - While it originated in relay, it doesn't require us to use relay, but turned out to be a really good idea, and so became a best practice

In the example below, the first argument would be used to specify the limit of results coming back and provide a `cursor` (the ID of the last item in the previous page to the argument)

```js
{
  product(id: "abc") {
    name
    recommendedProducts(last: 5, before: "cde") {
      edges {
        node {
          name
          image {
            url
          }
        }
      }
    }
  }
}
```
