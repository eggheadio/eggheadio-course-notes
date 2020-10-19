# Write an Authenticated Query in OneGraph

**[📹 Video](https://egghead.io/lessons/graphql-write-an-authenticated-query-in-onegraph)**

**[💻 Course repo](https://github.com/theianjones/egghead-graphql-subscriptions)**

## Summary

`OneGraphiQL` is a playground to build up queries and mutations across multiple services. It also consolidates authentication logic across multiple services, so we can authenticate and authorize `OneGraph` once, and then make as many queries as we want. This allows us to focus on building the queries and mutations that make our app awesome!

## OneGraphiQL

`OneGraphiQL` is a data explorer that allows us to build up our GraphQL queries and mutations. It is the `OneGraph` implementation of [GraphiQL](https://github.com/graphql/graphiql), which can be used with any GraphQL endpoint. `GraphiQL` is the perfect way to discover what is available, as it is generated from the GraphQL schema, and provides helpful documentation for the queries, mutations and types. Additionally, it uses this data to intelligently suggest options for your queries and mutations.

⌨️ Pressing `Ctrl + Space` will display suggestions, and pressing `Tab` will autocomplete. This massively improves the speed at which you can build up GraphQL queries and mutations.

## Building queries

`OneGraphiQL` has a helpful `Explorer` on the left, that can be used to discover what our application can query. This demonstrates the awesome convenience of `OneGraph` as we can really easily query a number of services from one consistent GraphQL endpoint. This list of available services is already impressive and will continue to grow over time.

While browsing through the available services, we can click to reveal the fields we can query, and slowly build up our complex request, without even writing code!

## Variables

Sometimes we need to provide a dynamic value to our query or mutation. This is where GraphQL variables can help. We can declare variables that we are expecting to be passed along with the GraphQL request, using the `$` syntax.

```gql
query Todo($id: String!) {
  todo(id: $id) {
    id
    title
  }
}
```

When declaring variables for queries, we need to also declare the type (in this case `String`) and whether the variable is mandatory or optional. The `!` is used to mark a variable as `mandatory` or `required`. Declaring a variable as `required` means that the request will return an error if it is not provided.

We can then use that variable in the place of a value - `todo(id: $id)` - and GraphQL will handle the substitution.

In order to test our query we will need to provide values for any of the `required` variables. This can be done in the `Query Variables` section of `OneGraphiQL`, which accepts a JSON object of key value pairs.

```json
{
  "id": "3"
}
```

Since we declared the `id` variable's type as `String`, we cannot pass the number version of `3`, it must be the string representation `"3"`. Again, the GraphQL request will return an error if we pass it variables of the wrong type.

## Authenticated request

⌨️ To send the GraphQL request, click the `play` button or `Cmd + Enter`.

This will cause an error in the case of the video example, as Github requires us to authenticate and provide an access token. Thankfully, `OneGraph` takes care of this for us and provides a super convenient button to log in to a particular service. In the case of the video example, this button is `Log in to GitHub`. This will require you to authenticate with `GitHub` and grant permissions for `OneGraph` to make requests on your behalf.

Now that we have authenticated with the `GitHub` service, we can re-send our GraphQL request and get back some data 🎉

`OneGraph` keeps that authentication logic in one place, so we can authenticate a collection of services once and then forget about it all together. Now we have authenticated queries, so we can just focus on the data our application needs 🥳

## Helpful Links

[GraphiQL repo](https://github.com/graphql/graphiql)

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/graphql-query-multiple-services-with-urqls-graphql-client)
📹 [Go to Next Lesson](https://egghead.io/lessons/graphql-write-an-authenticated-graphql-query-in-a-react-app-with-urql)
