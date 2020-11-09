# 19. Reduce A GraphQL Subscription Stream into a Collection

**[📹 Video](https://egghead.io/lessons/react-reduce-a-graphql-subscription-stream-into-a-collection)**

**[💻 Course repo](https://github.com/theianjones/egghead-graphql-subscriptions)**

## Summary

The `result.data` property will be updated with the new event, each time it is triggered. This is great if we only want to display the most recent event, but in most applications we want to display some kind of list of these events. `urql`'s `useSubscription` function takes a second argument - a reducer function - that can help us keep a track of previous events.

## Event data

Each time an event you are subscribed to triggers, the `data` property of the `useSubscription` result will be updated to contain the new event.

```js
const [result] = useSubscription({...}) // simplified

console.log(result.data)
```

The first time a comment is added something similar to this will be printed to the console.

```js
{
  github: {
    issueCommentEvent: {
      action: 'CREATED',
      comment: {
        author: { login: 'theianjones' },
        body: 'This was a cool movie',
        ...
      }
    }
  }
}
```

The next time this is triggered `result.data` will contain the new information.

```js
{
  github: {
    issueCommentEvent: {
      action: 'CREATED',
      comment: {
        author: { login: 'dijonmusters' },
        body: 'The movie was just okay',
        ...
      }
    }
  }
}
```

So since this `result.data` value is being updated with the new value each time, we can't simply render it out and see a log of our comments.

```js
// ❌ This will not work!

function Comments() {
  const [result] = useSubscription({...}) // simplified

  return result.data.map(comment => <p>{comment}</p>)
}
```

We could wire up our own custom way of remembering each of these values with some magical combination of `useState` to declare and array, and `useEffect` to subscribe to those changes, but that sounds like a lot of work!

Thankfully, `urql` saves the day again! The second parameter we can pass to `useSubscription` is a callback that conveniently helps us retain that previous state.

```js
// ✅ This will work!

function Comments() {
  const handleSubscription = (comments = [], commentEvent) => {
    return [...comments, commentEvent.github.issueCommentEvent.comment]
  }

  const [result] = useSubscription({...}, handleSubscription) // simplified

  // now `result.data` is an array so we can iterate over it to render!

  return result.data.map(comment => <p>{comment.body}</p>)
}
```

This style of handler function is often called a `reducer`. Reducers take two parameters - an `accumulator` and the current `value`. `urql` will now stitch together an array of each comment event we receive and use this to update the `result.data` property.

## Helpful Links 🤔

[urql docs - useSubscription with handleSubscription reducer](https://formidable.com/open-source/urql/docs/advanced/subscriptions/#react--preact)
