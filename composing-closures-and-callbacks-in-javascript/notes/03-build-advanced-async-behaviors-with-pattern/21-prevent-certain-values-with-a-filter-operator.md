# Prevent Certain Values with a Filter Operator

[📹 Video](https://egghead.io/lessons/egghead-prevent-certain-values-with-a-filter-operator)

We can re-use our new `map` operator to accomplish the same behavior of typewriting but by using our new patterns, we can move some logic out of our `modify` operator into the `transform` argument of the `map` operator.

```javascript
let typeGreeting = map(
  toLower,
  modify(map((x) => x[1], zip(createInterval(100), forOf('Hello, John')))),
)
```

Now is easy to see that in the `transform` argument of `map` we are taking the value identify by `x` and performing an operation on it. With that notion we can create a new kind of operator, a **filter**, an operator that can skip or remove a value based on some condition.

The common use case for this is that the filter accepts a function named `predicate` that evaluates certain condition and if the `predicate` function returns `true` then the value is "added" or "removed" otherwise.

```javascript
let filter = curry((predicate, broadcaster, listener) => {
  return broadcaster((value) => {
    if (value === done) {
      listener(done)
      return
    }
    if (predicate(value)) {
      listener(value)
    }
  })
})
```

This operator is very similar to our `map` operator, it operates over each value of the iterator but instead of **transform** the value it filters out some of them based on the result of the `predicate` function.

## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/filter/src/index.js)
