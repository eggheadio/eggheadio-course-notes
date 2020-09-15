# Kicking off a GraphQL Schema Design Process

- 📹 [Video Link](https://egghead.io/lessons/graphql-kicking-off-a-graphql-schema-design-process)
- 💻 [Code Link](https://github.com/nikgraf/designing-graphql-schemas-course/tree/master/lesson02)

* We will design the schema of a web-shop selling laptops and related accessories

🔑 Always start with one use case, for example the page for one product

1. Start with one laptop. Let's query the name and the description. Both will be strings in our use case

```graphql
{
  product(id: "abc") {
    name
    description
  }
}
```

2. Next, the expected response would be a `json` that looks like the below

```json
{
  "product": {
    "name": "Blackbook",
    "description": "Great ..."
  }
}
```

3. Update the schema by updating corresponding `typeDefs` and `resolvers`

```js
...
const typeDefs = gql`
  type Product { 👈 // add Product typeDef
    name: String
    description: String
  }

  type Query {
    product(id: ID!): Product
  }  // 👆 Define the query itself, which returns object of type Product
`;   // and takes as argument a scalar type of ID which is required
...
```

⚠️ Always check in [Playground](https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/) or browser-based IDE if query works fine
