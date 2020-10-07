# Create a Utility Function to Control setInterval

[📹 Video](https://egghead.io/lessons/egghead-create-a-utility-function-to-control-setinterval)

Continuing with the broadcaster pattern we can wrap the `setInterval` function.

`[setInterval` ](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) is a native method offered by the `Window` object. This will repeatedly call the function defined as callback with a fixed time delay between each call.

It will return an id for the interval that can be used to clear or cancel the calls 

> 🚨 Notice that this method have the arguments in the other way around, the callback is the first one

```javascript
let id = setInterval(() => {}, 1000)
clearInterval(id)
```

We can wrap this behavior with our own broadcaster where:

* the first argument `time` represents the delay in ms used in `setInterval`
* the listener (at the end of the arguments chain) represent the callback argument of `setInterval`

```javascript
let createInterval = time => listener => {
  let id = setInterval(listener, time)
	return () => {
    clearInterval(id)
  }
}
```

Now we can use the new broadcaster as always, creating differnt functions since the first call to `createInterval` returns a function that accepts a `listener` and at the same time this last function returns a cancellation function.



## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/create-interval/src/index.js)