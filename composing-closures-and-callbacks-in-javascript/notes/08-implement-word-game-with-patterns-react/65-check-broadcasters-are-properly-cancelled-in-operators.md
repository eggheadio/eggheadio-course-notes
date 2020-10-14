# Check Broadcasters Are Properly Cancelled in Operators

[📹 Video](https://egghead.io/lessons/egghead-check-broadcasters-are-properly-cancelled-in-operators)

Sometimes the only way to find new bugs, is by logging some values to the console. Let's create a log operator:

```js
let log = broadcaster => listener => broadcaster(value => {
    console.log(value)
    listener(value)
})
```

We can then just drop the log operator to log whatever happens before the next operator - in this case the `doneIf` operator

```js
let gameLogic = pipe(
  filter(every(isString)),
  log,
  doneIf(([word, guess]) =>
    Array.from(word).every(letter => guess.includes(letter))
  ),
  repeat
)
```
_**Note:** log will log the value inside the `filter` operator._

Using the log and testing guessing some words, we can see that something didn't get cancelled.

## Fixing the bug in `mapBroadcaster` operator

If we look at our `mapBroadcaster` we can see that we are setting a new broadcaster, but we have no way of cancelling it.

```js
export let mapBroadcaster = createBroadcaster => broadcaster => listener => {
  return broadcaster(value => {
    let newBroadcaster = createBroadcaster(value)
    newBroadcaster(listener)
  })
}
```

We can follow the same cancelling pattern that we have seen in the previous lessons and fix the issue

```js
export let mapBroadcaster = createBroadcaster => broadcaster => listener => {
  let newCancel // track a new cancel
  let cancel = broadcaster(value => {
    let newBroadcaster = createBroadcaster(value)
    newCancel = newBroadcaster(listener)
  })

  return () => {
    cancel()
    // if newCancel exists we will cancel that one too
    if (newCancel) newCancel()
  }
}
```

## Resources and References

- cancelling a function [lesson 10](https://egghead.io/lessons/javascript-return-a-function-to-cancel-an-async-behavior)([notes](10-return-a-function-to-cancel-an-async-behavior.md))