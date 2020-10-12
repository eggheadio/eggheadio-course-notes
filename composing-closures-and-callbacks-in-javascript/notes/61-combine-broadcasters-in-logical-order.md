# Combine Broadcasters in Logical Order

[📹 Video](https://egghead.io/lessons/egghead-combine-broadcasters-in-logical-order)

- `useEffect` is called every time a dependency changes

So on our code from the previous lesson the `let guess = useBroadcaster(guessBroadcaster, "", [word])`, useEffect is being called each time we write a letter on the input field.

So if we use the `cancel` method on our `useBroadcaster`, `useEffect` will call cancel on every second call.

As a workaround, we can move the `[word]` dependency outside our `useBroadcaster` and add it to the `combine` operator.

```js
let App = () => {
  let onInput = useListener()

  let word = useBroadcaster(getWord)
  let guessBroadcaster = guessPipe(onInput)
  let guess = useBroadcaster(guessBroadcaster, "", [word])

  let gameBroadcaster = gameLogic(
    combine(guessBroadcaster, getWord) // we need to get out word and then combine the guessBroadcaster here
  )

  let game = useBroadcaster(gameBroadcaster, "")

  //...
}

```

The logic will be, we will get our word `getWord` and then combine it with the `guessBroadcaster`

```js
let gameBroadcaster = gameLogic(
    thenCombine(guessBroadcaster)(getWord)
)
```

_**Note:** Doing it this way, it's the same as passing word into the `useBroadcaster` dependency array, but allows us more control inside our operators and broadcasters._

## How does `thenCombine` look like?

To create the `thenCombine` broadcaster we will need to use the `mapBroadcaster` operator from [lesson 28](https://egghead.io/lessons/javascript-building-a-word-matching-game-by-composing-callbacks)([lesson notes](28-building-a-word-matching-game-by-composing-callbacks.md)). This operator will:

- Take values from the first broadcaster
- map those values to the second broadcaster

```js
let thenCombine = secondBroadcaster => {
  return mapBroadcaster(word =>
    map(secondValue => [word, secondValue])(
      secondBroadcaster
    )
  )
}
```

_**Note:** We are using `word` as the first value here, to make it clear that this first value, was the same that we were passing as a dependency to the `useBroadcaster`._

Since we will probably want to reuse the `thenCombine` operator, we will renate `word` to `firstValue` instead.

```js
let thenCombine = secondBroadcaster => {
  return mapBroadcaster(firstValue =>
    map(secondValue => [firstValue, secondValue])(
      secondBroadcaster
    )
  )
}
```

## Fixing our game logic

We also need to fix our game logic, this is because on our logic we are using the `guess` first and then the `word` second. As we are expecting `word` to come first in our `thenCombine` operator, we will swap them around.

```js
let gameLogic = pipe(
  filter(every(isString)),
  map(([word, guess]) => // it was [guess, word] before
    Array.from(word)
      .map(letter =>
        guess.includes(letter) ? letter : "*"
      )
      .join("")
  ),
  doneIf(guess => guess && !guess.includes("*")),
  repeat
)

```

## Resources and References

- mapBroadcaster [lesson 28](https://egghead.io/lessons/javascript-building-a-word-matching-game-by-composing-callbacks) [lesson notes](28-building-a-word-matching-game-by-composing-callbacks.md)