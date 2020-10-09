# Create a Win Condition with a mapDone Operator

[📹 Video](https://egghead.io/lessons/egghead-create-a-win-condition-with-a-mapdone-operator)

- the `doneCondition` is an operator that accepts a condition (our win condition) and only will invoke our listener if the condition is met.
- some key ideas about the `doneCondition` and `mapDone`:

```javascript
let doneCondition = (condition) => (broadcaster) => (listener) => {
  let cancel = filter(condition)(broadcaster)((value) => {
    listener(done)
    cancel()
  })

  return cancel
}

let mapDone = (doneValue) => (broadcaster) => (listener) => {
  broadcaster((value) => {
    if (value === done) {
      listener(doneValue)
    } else {
      listener(value)
    }
  })
}

let winPipe = pipe(
  doneCondition((string) => !string.includes('*')),
  //            |________________________________|
  //                                ☝️
  // the function passed is the `condition` argument
  mapDone('You win!'), // <== "You win!" == doneValue
)
```

- `doneCondition` will only send the `done` value if the condition is met.
- Nothing will happen if the condition is not met, and when it happens, it will send `done` to the listener and also cancels everything (the `filter` operator)

```javascript

```

- `mapDone` is doing something similar, but it ignores all the values except of the `done` value.
- it checks if the actual value (the `value` argument) is equal to the `done` symbol. if that's true, then it will send the value passed to the operator (`doneValue` = "You win!")
- the last piece was creating a `cancelWhen` operator, which help us to assign the result of both broadcasters (cancel functions) and let us cancel all the broadcasters (play and win) when all the conditions are met.

```javascript
let winPipe = pipe(
  doneCondition((string) => !string.includes('*')),
  mapDone('You win!'),
)

let play = hangman(inputValue)
let win = winPipe(play)

let cancelWhen = (cancelBroadcaster) => (broadcaster) => (listener) => {
  /*
  - cancelBroadcaster => win => doneCondition
  - broadcaster == mapDone
  */

  let cancel = broadcaster(listener)

  let cancel2 = cancelBroadcaster((value) => {
    cancel()
  })

  return () => {
    cancel()
    cancel2()
  }
}

let rules = pipe(cancelWhen(win))
let playWithWin = rules(play)

playWithWin(console.log)
win(console.log)
```

## Resources and References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/hangman-win/src/index.js)
- [Remember what the Filter operator does](https://egghead.io/lessons/egghead-prevent-certain-values-with-a-filter-operator)
