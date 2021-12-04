# Pass an Array to a Callback with a forOf Function

[📹 Video](https://egghead.io/lessons/egghead-pass-an-array-to-a-callback-with-a-forof-function)

In this lesson we will work with iterable. In javascript an [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#Built-in_iterables) is any object that implements the `@iterator` method, defining the behavior of the object when needs to be iterated, for example, by using a [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...ofv) loop. There are a few [built-in types that are iterables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#Built-in_iterables) like String, Array, Map and Set.

> Anything that fits into a `for...of` loop will work for the scope of this lesson

We will create a custom `forOf` function to implement an scenario where we can type out a letter every second, this is basically grouping the behavior of some of our broadcasters.

We will call our `forOf` function a broadcaster creator. This function will take two arguments, an `iterable` and a listener and, as our current pattern, we will use curry to handle the arguments. Our `forOf` will just iterate over the `iterable` argument and will call the `listener` in each iteration.

```javascript
let forOf = curry((iterable, listener) => {
  for (let i of iterable) {
    listener(i)
  }
})
```

Then we will group two behaviors, our `createInterval` broadcaster and our newly broadcaster creator `forOf`, to do the grouping, we will use our `zip` function

```javascript
let typeGreeting = zip(createInterval(100), forOf('Hello, John'))
```

Our `forOf` broadcaster is not meeting the full requirements that we defined for a broadcaster. Is not returning a way to cancel the behavior. To do that we will use a trick. Will wrap the `for...of` loop with a call to a `setTimeout` with `0` as a second argument, this means that we are requesting to run the callback inside of `setTimeout` in the next tick. By using this trick we can grab the id of the `setTimeout` and use it to return a function to cancel it.

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
