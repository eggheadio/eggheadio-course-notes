# Query Multiple Services with urqls GraphQL Client

**[📹 Video](https://egghead.io/lessons/graphql-query-multiple-services-with-urqls-graphql-client)**

**[💻 Course repo](https://github.com/theianjones/egghead-graphql-subscriptions)**

## Summary

`urql` is a light-weight data fetching library that we can use to send queries and mutations to our `OneGraph` endpoint. It provides us with some convenient variables to determine whether our application is in a loading, or error state, or whether we have the data required to display our component.

## Create React App

In this video we will create a new React application using the `create-react-app` package.

```bash
npx create-react-app name-of-our-app
```

The `create-react-app` package allows us to quickly create a React application without needing to write a bunch of boilerplate code, or configure webpack, babel etc. Feel free to swap this out with your own custom react application, or another framework built on React - such as Next or Gatsby - if you prefer, but this may take a little bit of extra configuration.

## Urql

`urql` is a data fetching library that we can use to send queries and mutations to our GraphQL API (OneGraph). In order to specify queries, `urql` also requires the `graphql` package.

`yarn add urql graphql`

Now we need to create an `urql` client and wrap our application in their provider.

```js
// src/index.js

// other imports
import { createClient, Provider } from 'urql'

const client = createClient({ url: 'replace-with-graphql-endpoint-from-onegraph' })

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
```

Now from within any of our React components we can declare a GraphQL query that describes the data our component wants.

```js
const TODOS_QUERY = `
  query {
    todos {
      id
      title
    }
  }
`
```

Then we can pass this query to the useQuery hook from `urql`. This hook returns the result of the query, as well as a function to trigger this query again.

```
const [result, reexecuteQuery] = useQuery({ query: TODOS_QUERY })
```

> Note: the query gets executed as soon as the component is mounted, if we want to re-run this query after some user action - such as clicking a button to add a todo - we would call the `reExecuteQuery` function.

Since the query is making an asynchronous call to our GraphQL endpoint, we need to tell our component what to display while we are waiting for the response, as well as what to display if there is an error. Conveniently, `urql` gives us a `fetching` and `error` state that we can use to check.

```js
  if (result.fetching) return <p>Loading...</p>
  if (result.error) return <p>Oh no... {result.error.message}</p>

  // we are not loading and haven't got an error, so we must have the data
  return result.data.todos.map(todo => <p>{todo.title}</p>)
```

## Helpful Links

[create-react-app docs](https://create-react-app.dev/docs/getting-started)

[urql docs](https://formidable.com/open-source/urql/docs/)

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/graphql-query-multiple-services-with-onegraph-graphiql-editor)
📹 [Go to Next Lesson](https://egghead.io/lessons/graphql-write-an-authenticated-query-in-onegraph)
