# Use an Interpreter to Instantiate a Machine

[Video link](https://egghead.io/lessons/xstate-use-an-interpreter-to-instantiate-a-machine)

Using machine.transition is a tedious way to update the state. We're going to use the interpreter that XState provides for us. We can destructure this along with Machine at the top of our file.

```js
const { Machine, interpret } = require("xstate");
```

A return value from an interpreted machine is known as a service, so we will call this a service. This will maintain our machine as it transitions from state to state but it won't do anything until we start the service.

```js
const service = interpret(lightBulbMachine).start();
```

Once we start the service, we can send events. This returns the nextState, so we can see how it changes.

```js
const nextState = service.send("TOGGLE");
console.log(nextState);
```

We don't need to save the value every time, we can use the state getter to achieve the same result.

```js
service.send("TOOGLE");
console.log(service.state);
```

This again isn't the most useful approach. There are many methods that could be used and, for us, the most useful is the onTransition method. This take a listener function that receives a state argument. This is always sent the next state of the machine and we can move our logging action to there.

```js
service.onTransition(state => {
  console.log(state); // or state.value for more useful logging.
});

service.send("TOOGLE");
```

We can use logic in here based on the state object itself to limit the logging. For example, only logging when the state has changed.

```js
service.onTransition(state => {
  if (state.changed) {
    console.log(state);
  }
});
```

Or, only logging if a particular state is achieved.

```js
service.onTransition(state => {
  if (state.matches("broken")) {
    console.log("I'm broke!");
  }
});
```

## Personal take

I like the build up from most straight-forward and 'bare-metal' up to the more useful. This helps with the understanding of the concepts in action.
