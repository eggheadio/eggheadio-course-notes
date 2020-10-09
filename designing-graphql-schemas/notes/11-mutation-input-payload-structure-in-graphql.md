# Mutation Input and Payload Structure in GraphQL

- 📹 [Video Link](https://egghead.io/lessons/graphql-mutation-input-and-payload-structure-in-graphql)
- 💻 [Code Link](https://github.com/nikgraf/designing-graphql-schemas-course/tree/master/lesson10)

### Mutation arguments

- When creating a mutation we can have the simple and quick solution to add independent arguments as such:

```js
mutation CreateProductMutation($name: String!, $description: String) {
  createProduct(name: $name, description: $description) {
    id           // 👆            👆
    name
  }
}
```

❌ However, this can get problematic real quick for the client as our mutation grows and needs to extend more arguments.

🔑 But, there is a solution: _One of the things this specification specifies is that a mutation should accept only a single [input](https://relay.dev/docs/en/graphql-server-specification.html#mutations) argument._

- Relay uses a common pattern for [mutations](https://relay.dev/docs/en/graphql-server-specification.html#mutations), where there are root fields on the mutation type with a single argument, `input`, and where the `input` and output both contain a client mutation identifier used to reconcile requests and responses.
  - This way arguments can be nested inside the input

💡 We can next our previous mutation arguments as such:

```graphql
mutation CreateProductMutation($input: CreateProductInput!) {
  createProduct(input: $input) {
    id               // 👆 in this scenario we nest `id` and `name`
    name             // inside input
  }                  // { input: id: Int, name: String }
}
```
