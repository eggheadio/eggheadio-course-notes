# Naming Conventions for Fields with GraphQL Aliases in Mind

- 📹 [Video Link](https://egghead.io/lessons/graphql-extending-graphql-connections-with-additional-fields-and-arguments)
- 💻 [Code Link](https://github.com/nikgraf/designing-graphql-schemas-course/tree/master/lesson08)

### Extending fields

- While in the connection spec, arguments, how they should be implemented, as well as the field structure, is well-defined. It does not prevent us from extending it with fields useful to our use cases.
  - We can also extend page info in our use case.

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
        boughtTogetherPercentage
      }
      pageInfo {
        hasNextPage // 👈  next page
        hasPreviousPage //👈 previous page, these 2 examples work well for
        endCursor       // infinte scroll but not pagination
        startCursor
      }
    }
  }
}
```

- Works well with endless scroll because with the current code we only care about next page or previous page. However, for pagination this would not work as well because it is important to see how many other pages there will be.

We can fix this by adding a `pageInfo` field that contains another field called `hasNextPages` and query for the cursor. We can also take it further by telling it the amount of pages we need

```js
...
pageInfo {
  hasNextPages(amount: 5) {
    cursor
}
...
```

- 🔮 It is easy to believe that the connection specification is very static and inflexible. However, the [specification](https://relay.dev/graphql/connections.htm#sec-Edge-Types.Fields) states multiple times that it _"May Contain other fields."_

```js
"hasNextPages": [
  { "cursor": "ert" }, // 👈 the next page cursor ID is referenced
  { "cursor": "tyu" },
  { "cursor": "ewq" },
],
```
