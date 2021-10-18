# Marking Done Based on a Condition

[📹 Video](https://egghead.io/lessons/egghead-marking-done-based-on-a-condition)

The current use case of the `repeat` and `repeatWhen` operators in the course is to implement a game like situation, in this case we need to be able to stop and restart the game when the score hits.

The logic for this example is just to check if the `state` of the game is equal to `0` meaning that the game is over or **done**.

The basic behavior can be described as a state operator

```javascript
let state = (broadcaster) => (listener) => {
  let state = 3
  broadcaster((value) => {
    state--
    listener(state)
  })
}
```

Now we will implement a new behavior that describe how to handle the **done** status of the game, when the `state` equals `0`.

For that a new operator is build, `doneIf`. The idea of this operator is to check for a condition and if that condition is true then send the `done` value through the `listener`

```javascript
let doneIf = (condition) => (broadcaster) => (listener) => {
  broadcaster((value) => {
    listener(value)
    if (condition(value)) {
      listener(done)
    }
  })
}
```

This operator add the **done** behavior to any broadcaster based in whatever condition we require, in our case, the condition is a function that check if the value is equals `0`

```javascript
let score = pipe(
  state,
  doneIf((value) => value === 0),
)
```

🔑 Dont forget to handle the cancellation of each of the behaviors wrapped with this new functions. In this case the cancellation will handle the removal of the event listener used.

Another piece of the game logic is to `restart` the game when the player request it, or repeat the game when the user ask for it, in this case, when the user press the `enter` key on the input. To enable this behavior we can just import the already known `repeatWhen` operator and passed to the pipe collection.

We also need to define the behavior of the Enter key, for that we can use the `addListener` broadcaster to add a new event listener to the input and use the `filter` operator to only get the `Enter` key event.

```javascript
let inputEnter = filter((event) => event.key === 'Enter')(
  addListener('#input', 'keydown'),
)
let score = pipe(
  state,
  doneIf((value) => value === 0),
  repeatWhen(inputEnter),
)
```

This implementation enable the user to request to repeat the game, but it has a bug, they `keydown` event is not clear out so if for some reason the user press the enter key repeated times, the game will be restart that same number of times.

The error comes from the `repeatWhen` operator.

```
if(cancelWhen) cancelWhen()
```

that line it cancel the input enter event the next time a `done` comes. So if the click happens the 3 times the click event is gone but the keydown can't be cancelled.

To fix that behavior will be enough to just call `cancelWhen` every time a `done` is received.

> 🔑 When working with asynchronous code, it's always good to poke at your UI with lots of clicks, lots of keyboard presses, and make sure that addEventListeners, removeEventListeners, the timings, and everything fire appropriately when someone does something unexpected with your UI.

## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/done-if/src/index.js#L15)
