# Fixing Bugs in Our Live Search Box

[📹 Video](https://egghead.io/lessons/egghead-fixing-bugs-in-our-live-search-box)

The current implementation of the live search box have a bug. The application is triggering two requests every time.

🚨Recall that the broadcaster pattern includes the use of a `done` status that is sent through the listener when the requested action was finished.

This bug happens because the implementation doesn't handle the `done` scenario.

Inside the [`waitFor` ](https://github.com/johnlindquist/crafting-functions/blob/react-live-search-bugs/src/operators.js#L257) operator we use the [`createTimeout`](https://github.com/johnlindquist/crafting-functions/blob/react-live-search-bugs/src/broadcasters.js#L5) broadcaster that pass a `done` stats, but our `waitFor` operator doesn't have any logic to handle that, so the `listener` is call twice.

```javascript
// broadcasters.js
export let createTimeout = curry((time, listener) => {
  let id = setTimeout(() => {
    listener(null)
    listener(done)
  }, time)

  return () => {
    clearTimeout(id)
  }
})

// operators.js
export let waitFor = (time) => (broadcaster) => (listener) => {
  let cancelTimeout
  let cancel = broadcaster((value) => {
    if (cancelTimeout) cancelTimeout()
    cancelTimeout = createTimeout(time)(() => {
      listener(value)
    })
  })

  return () => {
    cancelTimeout()
    cancel()
  }
}
```

This can be fixed by adding the corresponding logic to handle the done scenario. This is done by just adding a conditional block that check the `innerValue` of the `createTimeout` broadcaster.

```javascript
export let waitFor = (time) => (broadcaster) => (listener) => {
  let cancelTimeout
  let cancel = broadcaster((value) => {
    if (cancelTimeout) cancelTimeout()
    cancelTimeout = createTimeout(time)((innerValue) => {
      if (innerValue === done) return
      listener(value)
    })
  })

  return () => {
    cancelTimeout()
    cancel()
  }
}
```

There is a second bug. The search is triggered when the input goes empty after a previous search, we can use this bug to add a new feature, add a minimun number of chars that need to be written in order to trigger the actual search, this will clean the bug of the empty input search and also will avoid searching with ambiguos text that fetch too many results.

The required logic here is to filter the entered text that doesn't accomplish certain rule, this is, filter out the input value that have less than 3 characters. We have a `filter` operator that we can add to our `pipe`.

This [`filter` ](https://github.com/johnlindquist/crafting-functions/blob/react-live-search-bugs/src/operators.js#L26) operator need to be added before the mapping of the url that will be used to fetch de data.

```javascript
let inputToBookSearch = pipe(
  waitFor(500),
  filter((name) => name.length > 3),
  map((name) => `https://openlibrary.org/search.json?q=${name}`),
  mapBroadcaster(getURL),
  map((result) => result.docs),
)(inputValue)
```

## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/react-live-search-bugs/src/index.js)
