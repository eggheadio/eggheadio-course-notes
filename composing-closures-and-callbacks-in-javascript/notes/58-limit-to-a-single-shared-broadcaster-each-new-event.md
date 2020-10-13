# Limit to a Single Shared Broadcaster Each New Event

**[📹 Video](https://egghead.io/lessons/egghead-limit-to-a-single-shared-broadcaster-each-new-event)**

- **Time** is a hidden variable in this scenario, because we rely on `share` to be called at the beginning, if we call it again, it we'll re-set the broadcasters/listeners and will get into weird behaviors.
- this is easy to say with a button click event as it shows in the lesson
- if we want `share` to not being called immediately, we can move it outside of where it was:

```js
// From THIS
let getWord = pipe(
  map(head),
  share() // <== inside `pipe`
)(getURL(`https://random-word-api.herokuapp.com/word`))

// to THIS
let getWord = pipe(
  mapBroadcaster((event) =>
    pipe(map(head))(getURL(`https://random-word-api.herokuapp.com/word`))
  ),
  share() // <== Now its Outside `pipe`
)
```

- Now that we manage to _control_ when the `share` function is being called, we need to make sure we can cancel it.
- the `cancel` value from the `onClick` listener is coming from `useListener`, and inside there is not returning anything, so cancel will be `undefined` all the time.

```js
export let useListener = (deps = []) => {
  let listeners = []
  let callbackListener = (value) => {
    if (typeof value === "function") {
      listeners.push(value)
      return // <== we are not returning anything from here
    }
    listeners.forEach((listener) => listener(value))
  }
  return useCallback(callbackListener, deps)
}
```

- the `callbackListener` function inside `useListener` is acting as a broadcaster. that's why is important we return a way to cancel it.


