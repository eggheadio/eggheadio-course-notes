# Repeat When Done with a Repeat Operator

[📹 Video](https://egghead.io/lessons/egghead-repeat-when-done-with-a-repeat-operator)

```javascript
let repeat = (broadcaster) => (listener) => {
  let cancel
  let repeatListener = (value) => {
    if (value === done) {
      cancel()
      cancel = broadcaster(repeatListener)
      return
    }

    listener(value)
  }
  cancel = broadcaster(repeatListener)

  return cancel
}

let repeatWhen = (whenBroadcaster) => (broadcaster) => (listener) => {
  let cancel
  let cancelWhen
  let repeatListener = (value) => {
    if (value === done) {
      cancel()
      if (cancelWhen) cancelWhen()
      cancelWhen = whenBroadcaster(() => {
        cancel = broadcaster(repeatListener)
      })
      return
    }

    listener(value)
  }
  cancel = broadcaster(repeatListener)

  return () => {
    cancel()
    if (cancelWhen) cancelWhen()
  }
}
```

- if you compare both operators `repeat` and `cancelWhen`, you see that the pattern of handling with broadcasters, is that you need to assign the value to a scoped parameter (cancel and cancelWhen) to make sure you have a way to cancel them.
- you can implement the logic you one inside the \*\*local function you need to create in order to manipulate the data
- see also how cancelWhen is called just when the value is assigned to a value (the if statement). that is because the only way `cancelWhen` is assigned, is when the value passed to the original listener is the `done` value.

## Resources and References

- [forOf function](https://egghead.io/lessons/egghead-pass-an-array-to-a-callback-with-a-forof-function)
- [source code](https://github.com/johnlindquist/crafting-functions/blob/repeat-when/src/index.js)
