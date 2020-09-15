# Setup an Apollo GraphQL Server with Automatic Mocking

- 📹 [Video Link](https://egghead.io/lessons/graphql-setup-an-apollo-graphql-server-with-automatic-mocking)
- 💻 [Code Link](https://github.com/nikgraf/designing-graphql-schemas-course/tree/master/lesson01)

🔑 We are using Apollo GraphQL because it is the most common library

- Requires you to define the `typeDefs` and the `resolvers`
- 👆 This are the two minimum requirements to start an `apollo server`

### Mocking

📄 _"The strongly-typed nature of a GraphQL API lends itself extremely well to mocking. This is an important part of a GraphQL-First development process, because it enables frontend developers to build out UI components and features without having to wait for a backend implementation."_ - [APOLLO DOCS, Mocking](https://www.apollographql.com/docs/apollo-server/testing/mocking/)

- We can start mocking with Apollo by adding an option to our server object.
  - By default the Apollo server will mock any type but it also gives us the opportunity to [customize](https://www.apollographql.com/docs/apollo-server/testing/mocking/#customizing-mocks) the mocks per type. This allows the developer to describe the custom mocking logic.
    - 🔮 By default, the functions in mocks will overwrite the resolvers in `resolvers`

```js
const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const server = new ApolloServer({
  typeDefs,
  mocks: true,👈 // set mock to true, returns default mock
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```

```js
...

const mocks = {
  String: () => "Hello"  👈 // create a mocks resolver
} ⚠️👆 // GraphQL schema type String starts with an uppercase S

const server = new ApolloServer({
  typeDefs,
  mocks,👈 // remove boolean and set to newly created mocks object
});
...
```
