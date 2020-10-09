# Naming top-level Query Fields in GraphQL

- 📹 [Video Link](https://egghead.io/lessons/graphql-naming-top-level-query-fields-in-graphql)
- 💻 [Code Link](https://github.com/nikgraf/designing-graphql-schemas-course/tree/master/lesson09)

- It is common to use the name of the returned value

```js
type Query {
  product(id: ID): Product
}
```

```js
{
  product(id: "abc") {
    name
  }
}
```

- ⚠️ BUT! There are some cases where there has to be multiple ways of retrieving a single product. ie. by `ID` or by `slug` that are located in a `URL`
  - This can be easily fixed by extending the `slug` and `ID` as arguments

```js
type Query {
  product(id: ID, slug: String): Product
}
```

- ❌ This creates another problem. What if there is a scenario where the `ID` and the `slug` belong to different products?

- 💡 A better solution is to split this query into specific queries as such:

```js
type Query {
  product(id: ID!): Product
  productBySlug(slug: String!): Product
}
```
