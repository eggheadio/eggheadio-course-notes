# GraphQL Mutations to update Connections

- 📹 [Video Link](https://egghead.io/lessons/graphql-graphql-mutations-to-update-connections)
- 💻 [Code Link](https://github.com/nikgraf/designing-graphql-schemas-course/tree/master/lesson13)

### Updating Connections

_A common requirement for connections is to add and remove items. We could go with two separate mutations: add & remove versus a single update mutation._

```js
# Tab A
updateProductsInCart(input: { productIds: ["abc"] })
# Tab B
updateProductsInCart(input: { productIds: ["bcd"] })
# Server: ["bcd"]
```

- 👆 This can be problematic for a couple of reasons. But this is a very likely scenario in which the user has 2 tabs open.
  - A better solution would be to have individual `addProductsToCart` and `removeProductsFromCart`
