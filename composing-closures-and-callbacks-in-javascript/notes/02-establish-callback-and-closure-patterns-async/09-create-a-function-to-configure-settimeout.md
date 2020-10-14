# Create a Function to Configure setTimeout

[📹 Video](https://egghead.io/lessons/egghead-create-a-function-to-configure-settimeout)

Every function calls can be configurable by extracting the pieces that conforms the execution of it. In this example we are using the `setTimeout` function that have two arguments:

- a callback that holds the definition of the action that will happen
- a number that represents the time in milliseconds that the function will wait to be executed.

By extracting pieces of the function we can gain more control over how the function behaves, in this example there a 3 pieces that we can control:

- the time amount
- the function that is being passed as callback
- and the fact that `setTimeout` is being called immediately.

All of this can be controlled by putting the `setTimeout` call into a function of our own. This will allow us to extract the pieces that we defined earlier as arguments of this function and pass that arguments as the parameters of the `setTimeout` call.

By creating this function named `createTimeout` we gain control over the arguments of the `setTimeout` call but there is still the problem of the function being immediately executed, to avoid this we can, again, wrap the `setTimeout` call in a function. This is really simply to do by using the fat arrow syntax, just add a new function definition to the right side of the first one like this:

```javascript
let createTimeout = (time) => () => {
```

Here the first piece of the function definition is the one that accepts the arguments that we defined in the first step, the second one is just a wrapper to ensure that if we call `createTimeout(1000)` the setTimeout will not be invoke. This is because `createTimeout` is in fact returning a function instead of executing the function body. To execute the timeout we need to do a second call.

```js
let oneSecond = createTimeout(1000)
let twoSeconds = createTimeout(1000)
let threeSeconds = createTimeout(1000)
oneSecond()
twoSeconds()
threeSeconds()
```

This implementation give us the ability to define functions to different scenarios based on the arguments used to invoke to inner function.

## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/wrap-settimeout/src/index.js)
