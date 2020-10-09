# Merge Multiple useListener Hooks in React

[📹 Video](https://egghead.io/lessons/egghead-merge-multiple-uselistener-hooks-in-react)

The current implementation of the live search box works good but there is a better way to write the required logic, a way that responds to the patterns that we were using through the course.

We can use our [`merge`](https://github.com/johnlindquist/crafting-functions/blob/use-listener-multiple-listeners-and-merge/src/broadcasters.js#L38) broadcasters to execute two broadcasters, one that handle the search when the data is present and one to disable the search when there is no data (or the number of characters is less than 4)

```javascript
// Perform the search
let inputToBookSearch = pipe(
  waitFor(500),
  filter((name) => name.length > 3),
  map((name) => `https://openlibrary.org/search.json?q=${name}`),
  mapBroadcaster(getURL),
  map((result) => result.docs),
)(inputValue)

// Clear the search when content length is less than 2
let inputToClearSearch = pipe(
  filter((name) => name.length < 2),
  map((name) => []),
)(inputValue)
```

By using the `merge` broadcasters we can run this two broadcasters

```javascript
let books = useBroadcaster(merge(inputToBookSearch, inputToClearSearch), [])
```

The last piece of refactor that we need is to check the [`useListener`](https://github.com/johnlindquist/crafting-functions/blob/use-listener-multiple-listeners-and-merge/src/broadcasters.js#L122) code

```javascript
export let useListener = (deps = []) => {
  let listeners = []
  let callbackListener = (value) => {
    if (typeof value === 'function') {
      listeners = value
      return
    }
    listeners(value)
  }
  return useCallback(callbackListener, deps)
}
```

This implementation assign a value to the listener **one time only** but with the `merge` broadcaster we have more than one listener. So this implementation only accept the first listener, in this case the one passed by `inputToClearSearch`. We refactor this to accept multiple broadcaster by using an array of `listeners`

```javascript
export let useListener = (deps = []) => {
  let listeners = []
  let callbackListener = (value) => {
    if (typeof value === 'function') {
      listeners.push(value)
      return
    }
    listeners.forEach((listener) => listener(value))
  }
  return useCallback(callbackListener, deps)
}
```

## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/use-listener-multiple-listeners-and-merge/src/index.js)
