# Match Function Requirements with Lodash Partial and Flip

**[📹 Video](https://egghead.io/lessons/egghead-match-function-requirements-with-lodash-partial-and-flip)**



[`partial`](https://lodash.com/docs/#partial) is a function from `lodash` package that can be used to supply arguments one at a time and return functions with one argument.

`partial` is a functional programming implementation of the concept of partial application of functions.
It accepts two arguments:
* a function  `func` 
* and an list of `n` arguments to be partially applied call `partials`

This method creates a new function that invokes `func` with  `partials` arguments prepended to it.

🚨Be aware that using `partial` will not meet **our requirements** of the definition of the broadcaster as a function that accepts a listener **and returns a function** to cancel the behavior.

Another utility offered by lodash is [`flip`](https://lodash.com/docs/4.17.15#flip) This utility accepts a function `func` and creates a new function that invokes `func` with the arguments reversed, this is useful to **force** a particular function to meet our requirements. In our case, we defined a broadcaster as a function that **accepts a listener** but the signature of our definition takes the listener as a last argument. There are functions that doesn't work like that, for example `setInterval` 

```javascript
setInterval(() => {

}, time)
```
For `setInterval` the listener is the first argument, if we want to partially apply arguments to `setInterval` by using  `partial` and use this as a broadcaster we need to change the signature of the function, and `flip` can help with that.

```javascript
partial(flip(setInterval), 1000) // returns setInterval(1000)(listener) a function that accepts the listener 
```

🔑 This utility functions helps when working with apis that we don't have control so we can make it work with our mental models and requirements.

## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/lodash-partial/src/index.js)

