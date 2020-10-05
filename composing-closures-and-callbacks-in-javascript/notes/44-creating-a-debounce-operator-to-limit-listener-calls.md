# Creating a Debounce Operator to Limit Listener Calls

[📹 Video](https://egghead.io/lessons/egghead-creating-a-debounce-operator-to-limit-listener-calls)

- beautiful explanation of how using the cancellation pattern we've been seen on previous lessons, we can create a very useful operator that _waits_ until we stop typing in the input for a fixed amount of miliseconds.

```javascript
export let waitFor = (time) => (broadcaster) => (listener) => {
  let cancelTimeout // track the current timeout. important to prevent multiple timeounts to be running at the same time
  let cancel = broadcaster((value) => {
    // assing it to cancel it when necessary
    if (cancelTimeout) cancelTimeout()
    cancelTimeout = createTimeout(time)(() => {
      // assigning a value to cancelTimeout to the current timeout created
      listener(value)
    })
  })

  // cancel function returned from operator
  return () => {
    cancelTimeout()
    cancel()
  }
}
```

## Resources and References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/debounce/src/operators.js#L257)
