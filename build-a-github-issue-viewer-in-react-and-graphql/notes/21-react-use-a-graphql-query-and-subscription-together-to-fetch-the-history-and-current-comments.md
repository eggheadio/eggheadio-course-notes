# 21. Use a GraphQL Query and Subscription Together to Fetch the History and Current Comments

**[📹 Video](https://egghead.io/lessons/react-use-a-graphql-query-and-subscription-together-to-fetch-the-history-and-current-comments)**

**[💻 Course repo](https://github.com/theianjones/egghead-graphql-subscriptions)**

## Summary

`useSubscription` allows us to subscribe to new events, but we can't subscribe to a history of events. We can use `useQuery` to fetch a log of historical comments, and merge in new comments from our subscription.

The `useQuery` hook configuration object has a `pause` property which can be set to `false` in order to disable refetching.

## Event History

When we subscribe to new events, we will only get new events that occur after we load the application, and previous events will disappear if we refresh. In order to display the full comment history, we will need to combine our `useQuery` and `useSubscription` logic.

We will use our `useQuery` logic to fetch historical comments, and stitch this together with any new comments that come through our subscription. Conceptually, something like this:

```js
const [queryResult] = useQuery(COMMENTS_QUERY_STRING)
const [subscriptionResult] = useSubscription(COMMENTS_SUBSCRIPTION_STRING)

const comments = [...queryResult.data, ...subscriptionResult.data || []]

return (
  // render the comments
)
```

One issue we will hit with this logic is that `useQuery` is refetching our data. This is causing a double up of new comments. The `useQuery` configuration parameter has a `pause` property. This allows us to explicitly tell useQuery to pause fetching.

```js
// src/components/hooks/useCommentsHistory.js

const [result] = useQuery({
  query: QUERY_STRING,
  variables: {...},
  pause: true
})
```

We can dynamically set the `pause` value based off props.

```js
// src/components/hooks/useCommentsHistory.js
const { pause = false } = props

const [result] = useQuery({
  query: QUERY_STRING,
  variables: {...},
  pause
})
```

In our `CommentsSubscription` component we can use a combination of `useState` and `useEffect` to pause the fetching after the first render.

```js
// src/components/CommentsSubscription.js
const [pauseFetching, setPauseFetching] = React.useState(false)

const commentsHistory = useCommentsHistory({pause: pauseFetching})
const commentsHistoryLength = commentsHistory.length

React.useEffect(() => {
  if (commentsHistoryLength !== 0) {
    setPauseFetching(true)
  }
}, [commentsHistoryLength])
```

This will ensure that we only fetch the comments history once, and then append to it with new comments from our subscription.

## Helpful Links 🤔

[React docs - useState hook](https://reactjs.org/docs/hooks-state.html)

[React docs - useEffect hook](https://reactjs.org/docs/hooks-effect.html)

[React docs - custom hooks](https://reactjs.org/docs/hooks-custom.html)

[urql docs - pause useQuery](https://formidable.com/open-source/urql/docs/basics/queries/#pausing-usequery)
