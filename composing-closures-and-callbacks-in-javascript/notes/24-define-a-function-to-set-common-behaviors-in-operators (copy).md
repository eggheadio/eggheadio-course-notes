# Define a Function to Set Common Behaviors in Operators

[📹 Video](https://egghead.io/lessons/egghead-define-a-function-to-set-common-behaviors-in-operators)

🔑 Keep in mind that one of the key takeaways of this course is to be able to identify a pattern and wrap it in a function to be used later.

The operators that we being using are a clear example of a pattern evolving. Each of the operators use the same logic to handle the `done` status, so this can easily be extracted to a function to be call inside the operator.

Now instead of just removing the logic to handle `done` we can go a little step further and create a function that handle the creation of operators, since every operator have the same signature and behaves in the same way for the `done` case.

The original logic to handle `done` status happens inside a `listener` created to be passed to the `broadcaster`. This new `listener` ends by calling the original `listener` argument. In this `createOperator` function we need to do something similar and modify how the `broadcaster` works, to do that we will wrap the original broadcaster in a new broadcaster function, since **a broadcaster is a function that accepts a listener as an argument** we can write the new broadcaster as shown below

```javascript
let createOperator = curry((operator, broadcaster, listener) => {
  return operator((behaviorListener) => {}, listener)
})
```

Here the `behaviorListener` is a listener function. This can also be written as

```javascript
let createOperator = curry((operator, broadcaster, listener) => {
  const behaviorBroadcaster = (behaviorListener) => {}
  return operator(behaviorBroadcaster, listener)
})
```

Is easy to see here that the `operator` call is still receiving a `broadcaster` and a `listener`.

the `behaviorBroadcaster` here is in fact the original behavior described in the operator, in the case of the `modify` operator, this function will call `listener(string += value)`

Now, since we want to override the behavior of the original listener, our new `behaviorBroadcaster` will return the call to the original `broadcaster` with the addition of the `done` case handle

```javascript
let createOperator = curry((operator, broadcaster, listener) => {
  const behaviorBroadcaster = (behaviorListener) => {
    return broadcaster((value) => {
      if (value === done) {
        listener(done)
        return
      }
      behaviorListener(value)
    })
  }
  return operator(behaviorBroadcaster, listener)
})
```

Remember that in this piece of code, `behaviorListener` refers to the listener used inside the original operator

```javascript
return broadcaster((value) => {
  listener((string += value))
})
```

The last step is replace our operators to use `createOperator` but in the case of our `map` and `filter` the signature is slitghly different. The operator that we are passing have different arguments, in the case of `map` it have a `transform` function as first argument and `filter` have a `predicate` function that `createOperator` doesn't know how to handle.

Fix this is easy since the rest of the signature is the same, we just take the `transform` and `predicate` function out of the `createOperator` call.

## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/create-operator/src/operators.js#L4)
