# Optimizing GraphQL Mutations for Static Usage

- 📹 [Video Link](https://egghead.io/lessons/graphql-optimising-graphql-mutations-for-static-usage)
- 💻 [Code Link](https://github.com/nikgraf/designing-graphql-schemas-course/tree/master/lesson12)

### Plural vs Singular arguments

```js
addProductToCart((input: { productId: "abc" })); // 👈 This is great when we need to add one product,
// but what if we need to add multiple products?
```

⚠️ If the array of selected products has many entries and we loop over it, it will fire a query per entry!

- A better solution is to change the `mutation` from singular to plural and allow the input to take an array of `producIds`

```graphql
addProductsToCart(input: { productIds: ["abc", "bcd"] })
```
