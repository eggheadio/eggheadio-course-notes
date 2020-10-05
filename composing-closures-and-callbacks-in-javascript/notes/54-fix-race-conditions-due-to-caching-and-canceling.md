# Fix Race Conditions Due to Caching and Canceling

[📹 Video](https://egghead.io/lessons/egghead-fix-race-conditions-due-to-caching-and-canceling)

In this lesson we see the problems that we can get when cancelling a fetch request - this happens because of two racing conditions:

- caching
- cancelling

## Why we should deal with racing conditions?

We can see from the lesson that if we search for _STAR_, that this request will be shown and cached.

But if we try to type _STARS_ and delete the \*_S_, we won't get the cache back from the term _STAR_.

## Fixing the racing condition

To fix this racing condition we can add a cancel to the code built on the [previous lesson](https://egghead.io/lessons/egghead-save-network-requests-by-using-a-cache):

```javascript
export let mapBroadcasterCache = createBroadcaster => broadcaster => listener => {
  let cache = new Map()
  let cancel
  return broadcaster(value => {
    // We need to cancel before getting the value of the cache
    if (cancel) {
      cancel()
    }

    if (cache.has(value)) {
      listener(cache.get(value))
      return
    }
}
```

> _Note: Because we are returning after getting the value of the cache, if the cancel if comes after the cache if, the cancel will never run due to the `return`._

We also need to handle the error when cancelling a fetch request, otherwise, that exception will be passed to the cache.

```javascript
let newBroadcaster = createBroadcaster(value)
    cancel = newBroadcaster(newValue => {
        // Add to cache only if newValue isn't an error
        if (!(newValue instanceof Error)) {
        cache.set(value, newValue)
        }
        listener(newValue)
    })
})

```

**Remember:** This `newValue` is the result of our fetch request.
