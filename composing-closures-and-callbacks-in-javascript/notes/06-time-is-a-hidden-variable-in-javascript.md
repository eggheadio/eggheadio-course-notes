# Time is a Hidden Variable in javascript

[📹 Video](https://egghead.io/lessons/egghead-time-is-a-hidden-variable-in-javascript-f724e184)

Another type of function that we will often use is call **operator** An operator is just a function that calls the broadcaster but in some particular way.

In the example, the first operator that we see is a timeout operator. A function that calls the broadcaster based on some time function, in this case it use the `setTimeout` call to orchestrate how the broadcaster will be executed.

The first example shows us how the time definition affect the behavior of the broadcaster but more important it shows how we can use a closure inside the operator to change this behavior

```javascript
let operator = (broadcaster) => (listener) => {
  let currentValue = 0
  broadcaster((value) => {
    currentValue += value
    setTimeout(() => {
      // this call closes over currentValue
      listener(currentValue)
    }, currentValue * 1000)
  })
}
```

In the example the line `currentValue += value` is run immediately and by the definition of the broadcaster function, that line was call 3 times, then the value of `currentValue` is _"trap"_ inside the `setTimeout` call as a closure.

🔑 The key of an operator is to give it a good name to represent what is the actual behavior captured by the function definition

## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/time-the-hidden-variable/src/index.js)
