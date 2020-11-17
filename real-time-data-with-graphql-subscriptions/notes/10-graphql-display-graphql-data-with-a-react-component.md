# 11. Display GraphQL Data with A React Component

**[📹 Video](https://egghead.io/lessons/graphql-display-graphql-data-with-a-react-component?pl=build-a-github-issue-viewer-in-react-and-graphql-be5a)**

**[💻 Course repo](https://github.com/theianjones/egghead-graphql-subscriptions)**

## Summary

When we call useQuery a request is fired off to `OneGraph`, which in turn requests data from GitHub, this means we do not have the `data` immediately. We need to describe how our components look while the data is still loading, and what we display if there is an error in that process.

Conveniently, the `result` variable returned by `useQuery` contains `fetching` and `error` properties that we can use to display our component in those different states.

## Displaying comments

Time to build out the markup to display the comments from GitHub.

```js
// src/components/Comments.js

function Comments() {
  const [result] = useQuery(...) // collapsed for simplicity

  return (
    <ul>
      {result.data.gitHub.repository.issue.comments.nodes.map((commentNode) => {
        return <li key={commentNode.id}>{commentNode.body}</li>
      })}
    </ul>
  )
}
```

This will throw an error as `result.data` does not contain the data until we get it back from `OneGraph`, so we need a way to know whether we are still fetching data.

We can add a check before returning the markup for `data` to confirm we actually have the data, if not we can just render `null`.

```js
// src/components/Comments.js

function Comments() {
  const [result] = useQuery(...) // collapsed for simplicity

  if (!result.data) return <p>Loading...</p>

  // if we reach this line then we must have data
  return (
    <ul>
      {result.data.gitHub.repository.issue.comments.nodes.map((commentNode) => {
        return <li key={commentNode.id}>{commentNode.body}</li>
      })}
    </ul>
  )
}
```

🤔 Conveniently, the `result` variable also contains `fetching` and `error` properties that can be used to determine the state of the query. We can destructure these values off `result`, along with our `data` once it has been returned and refactor our code above to give the user some feedback throughout the request lifecycle.

```js
// src/components/Comments.js

function Comments() {
  const [result] = useQuery(...) // collapsed for simplicity
  const { fetching, error, data } = result

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  // if we have not returned a value yet, then we are not loading
  // and haven't got an error, so we must have the data
  return (
    <ul>
      {data.gitHub.repository.issue.comments.nodes.map((commentNode) => {
        return <li key={commentNode.id}>{commentNode.body}</li>
      })}
    </ul>
  )
}
```

## Helpful Links 🤔

[useQuery's fetching and error states](https://formidable.com/open-source/urql/docs/#querying-data)
