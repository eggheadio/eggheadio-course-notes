# Query Github Comments with One Graph through Urql's Client

**[📹 Video](https://egghead.io/lessons/graphql-query-github-comments-with-one-graph-through-urql-s-client)**

**[💻 Course repo](https://github.com/theianjones/egghead-graphql-subscriptions)**

## Summary

This video steps through building a new query to fetch all the comments for a particular issue in GitHub. We start by building the query in `OneGraphiQL` and then move this across to our application. Since we stepped through all the authentication logic in the previous video, we should just be able to trigger the query with its variables and get back the data 👍

This demonstrates how simple `Onegraph` makes authenticating requests to our different services!

## Comments

Now that we have authentication and variables sorted in `OneGraphiQL` and our React application, we can use the explorer to select any other fields we need from the GitHub service. In order to get comments we can extend our query to look like this.

```gql
query CommentsListQuery(
  $repoOwner: String!
  $repoName: String!
  $issueNumber: Int!
) {
  gitHub {
    repository(name: $repoName, owner: $repoOwner) {
      issue(number: $issueNumber) {
        id
        title
        bodyText
        comments(last: 100) {
          nodes {
            author {
              login
            }
            body
            id
            url
            viewerDidAuthor
          }
        }
      }
    }
  }
}
```

Again, we can copy and paste that into a string variable in our application. For the video example we will create a new component for `Comments`.

```js
const COMMENTS_QUERY = `query CommentsListQuery(
  $repoOwner: String!
  $repoName: String!
  $issueNumber: Int!
) {
  gitHub {
    repository(name: $repoName, owner: $repoOwner) {
      issue(number: $issueNumber) {
        id
        title
        bodyText
        comments(last: 100) {
          nodes {
            author {
              login
            }
            body
            id
            url
            viewerDidAuthor
          }
        }
      }
    }
  }
}`
```

Then we need to pass the dynamic variable values for `$repoOwner`, `$repoName` and `$issueNumber`, when we call `useQuery`.

```js
function Comments() {
  // we are just destructuring `result`
  // as we do not need to retrigger this
  // query later
  const [result] = useQuery({
    query: COMMENTS_QUERY,
    variables: {
      repoOwner: 'theianjones',
      repoName: 'egghead-graphql-subscriptions',
      issueNumber: 1,
    },
  })

  // actually render some stuff
  // this will come in the next video
}
```

Now extend our `App.js` file to render the `Comments` component.

```js
// src/App.js

function() {
  // auth logic from previous video

  return (
    <div className="App">
      <header className="App-header">
        <Comments />
      </header>
    </div>
  )
}
```

You can check out the `Network` tab in the developer tools, or `console.log` the result of the `COMMENTS_QUERY` to see the data coming back from `Onegraph`.

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/graphql-write-an-authenticated-graphql-query-in-a-react-app-with-urql)
📹 [Go to Next Lesson](https://egghead.io/lessons/graphql-display-graphql-data-with-a-react-component)
