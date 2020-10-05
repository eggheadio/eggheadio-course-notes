# Pass an Array to a Callback with a forOf Function

[📹 Video](https://egghead.io/lessons/egghead-pass-an-array-to-a-callback-with-a-forof-function)

- Iterables are another type of entry that can be anything from a simple array, a string or even events
- using `for of`, you can pass each item of your iterable to the passed listener and get the result of each item at a time.
- You can also see in the code how you can still apply the same patterns we've been using even if we change the input of our operators

```javascript
let forOf = curry((iterable, listener) => {
  let id = setTimeout(() => {
    for (let i of iterable) {
      listener(i)
    }
  }, 0)

  return () => {
    clearTimeout(id)
  }
})
```

## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/for-of/src/index.js)
- [Iterable protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
