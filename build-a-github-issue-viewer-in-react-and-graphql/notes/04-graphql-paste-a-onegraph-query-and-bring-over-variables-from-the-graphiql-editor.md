# 04. Paste a OneGraph query and bring over variables from the Graphiql editor

**[📹 Video](https://egghead.io/lessons/graphql-write-an-authenticated-graphql-query-in-a-react-app-with-urql?pl=build-a-github-issue-viewer-in-react-and-graphql-be5a)**

**[💻 Course repo](https://github.com/theianjones/egghead-graphql-subscriptions)**

## Summary

The format for queries and mutations in `urql` match `OneGraphiQL` so we can easily copy them across. The `useQuery` hook from `urql` also accepts a variables parameter, which we can use to pass across any dynamic values our query might need.

`onegraph-auth` provides us a simple way to authenticate with different `OneGraph` services within our application. By using `React Context` we can share this authentication logic across our components.

## Urql

Moving the queries and mutations that we built in `OneGraphiQL` to our application is easy! We simply copy and paste the entire query into our query string variable.

```js
// src/App.js

const TODO_QUERY = `
query Todo($id: String!) {
  todo(id: $id) {
    id
    title
  }
}
`
```

## Variables

We do need to handle passing our `id` variable through to the query though. This can be done when we call the `useQuery` hook.

```js
// src/App.js

const [result, reExecuteQuery] = useQuery({
  query: TODO_QUERY,
  variables: {
    id: '3',
  },
})
```
