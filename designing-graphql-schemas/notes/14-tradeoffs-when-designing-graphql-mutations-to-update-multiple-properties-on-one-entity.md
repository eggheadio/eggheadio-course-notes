# Tradeoffs when designing GraphQL Mutations to update multiple Properties on one Entity

- 📹 [Video Link](https://egghead.io/lessons/graphql-tradeoffs-when-designing-graphql-mutations-to-update-multiple-properties-on-one-entity)
- 💻 [Code Link](https://github.com/nikgraf/designing-graphql-schemas-course/tree/master/lesson14)

### Tradeoffs

- In the course we have learned that it's better to have two mutations when updating one item or product. However, the amount of individual mutations grows as the requirements to edit fields grows.

- 👇 Add an input that includes description

```graphql
mutation UpdateProductMutation($input: UpdateProductInput!) {
  updateProduct(input: $input) {
    product {
      name
      description
    }
  }
})
```

- 👆 Should include `productIds` and the fields that can be updated.

```js
input UpdateProductInput {
  productId: String!
  name: String!
  description: String 👈 // By omitting the exclamation mark
}                       // the field becomes optional

type UpdateProductPayload {
  product: Product
}

type Mutation { 👇 // Only two mutations :)
  createProduct(input: CreateProductInput!): CreateProductPayload
  updateProduct(input: UpdateProductInput!): UpdateProductPayload
}  👆 // Update mutation with input
```

[RFC Null Value](https://github.com/graphql/graphql-spec/pull/83): _This proposal adds a null literal to the GraphQL language and allows it to be provided to nullable typed arguments and input object fields._

#### Null Value Definition:

```
GraphQL has two semantically different ways to represent the lack of a value:

  * Explicitly providing the literal value: {null}.
  * Implicitly not providing a value at all.

For example, these two field calls are similar, but are not identical:

{
  field(arg: null)
  field
}

The first has explictly provided {null} to the argument "arg", while the second
has implicitly not provided a value to the argument "arg". These two forms may
be interpreted differently. For example, a mutation representing deleting a
field vs not altering a field, respectively. Niether form may be used for an
input expecting a Non-Null type.
```
