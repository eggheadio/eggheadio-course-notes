# Passing Values Through Callback Hell

[📹 Video](https://egghead.io/lessons/egghead-passing-values-through-callback-hell)

In the [previous lesson](7-solve-callback-hell-with-composition.md) we avoid the situation of passing values through the callbacks, to do this we need to define a _mapping_ function that will accept the value and create the callback based on a configuration step that includes this value. To do that, each of the functions defined will now be wrapped by another function that accepts a `config` parameter like:

```javascript
let click = (config) => (listener) => {
  document.addEventListener(config, listener)
}
```

With this in place we need to change our mental model and think about the `mappInner` function as a function that creates or generates callbacks with the correct values.

```javascript
let nest = (mapInner) => (outer) => (listener) => {
  outer((config) => {
    let innerr = mapInner(config)
    inner(listener)
  })
}
```

🔑 So now, instead of thinking about nested callback, we can think of what value is the function receiving and how we want to configure the inner callback.

## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/callback-hell-with-values/src/index.js)
