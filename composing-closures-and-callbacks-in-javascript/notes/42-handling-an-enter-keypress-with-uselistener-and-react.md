# Handling an Enter Keypress with useListener and React

**[📹 Video](https://egghead.io/lessons/egghead-handling-an-enter-keypress-with-uselistener-and-react)**

- let's change the `allowWhen` function parameters to make it easier to see what is exactly being called:

```js
let allowWhen = (allowBroadcaster) => (broadcaster) => (listener) => {
  // `allowBroadcaster` === enter -> `onKeyPress`
  // `broadcaster` === inputValue -> `onInput`
  // ⚠️ remember that `onKeyPress` & `onInput` are listeners!!

  let current
  broadcaster((value) => {
    current = value // here value is the value of the input! and this is passed to the `onInput` listener
  })

  allowBroadcaster(() => {
    // this is called _only_ when the user press the "Enter" key (thanks to the filter operator). This function does not declare any values because we want to ignore them and use the value we've been storing from the normal broadcaster (`current` which is the current input value). and pass that to the `onKeyPress` listener.
    listener(current)
  })
}
```

## Resources and References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/react-input-enter/src/index.js)

