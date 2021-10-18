# Refactor Game State to a Single Repeating Broadcaster

[📹 Video](https://egghead.io/lessons/egghead-refactor-game-state-to-a-single-repeating-broadcaster)

Every time we guess one word, the setup broadcaster is being triggered multiple times. Which means that we probably have some

> "runaway listeners, which means listeners are being set up which are not being cancelled".

What we want our game to do is to trigger a single repeating broadcaster whenever we guess a word correctly and get a new word.


## Resetting listeners after cancellation

If we go to the share operator, when we are cancelling this operator, we are setting cancel to null, but we are not resetting the listeners to an empty array again.

```js
export let share = () => {
  let cancel
  let listeners = []
  return broadcaster => {
    return listener => {
      if (!cancel) {
        console.log(`setup broadcaster`)
        cancel = broadcaster(value => {
          listeners.forEach(listener => listener(value))
        })
      }
      listeners.push(listener)

      return () => {
        cancel()
        cancel = null
        listeners = [] // Make sure to reset the listeners
      }
    }
  }
}
```

Now when we guess a word correctly, we can see that only one _"setup broadcaster"_ is fired on the console, but the word itself isn't updated with a new word for us to guess.

**Why?**

The word is not updated because it lives outside our `repeat` broadcaster.

```js
let App = () => {
  let onInput = useListener()

  let word = useBroadcaster(getWord) // getWord Doesn't have the repeat broadcaster
  let guessBroadcaster = guessPipe(onInput)
  let guess = useBroadcaster(guessBroadcaster, "")

  // gameBroadcaster has the repeat broadcaster
  let gameBroadcaster = gameLogic(
    thenCombine(guessBroadcaster)(getWord) //  this getWord will be repeated
  )

  let game = useBroadcaster(gameBroadcaster, "")

  return (
    <div>
      <input type="text" onChange={onInput} value={guess} />
      <p>{word}</p>
      <p>{game}</p>
    </div>
  )
}
```

If we look at the `getWord` we can see that we have a `share` but no `repeat`

```js
let getWord = pipe(
  map(head),
  share()
)(getURL(`https://random-word-api.herokuapp.com/word`))
```

That means that the `getWord` inside `let word = useBroadcaster(getWord)` will run out of sync with the `getWord` inside of `thenCombine(guessBroadcaster)(getWord)`.

**The Fix**

We can remove _word_ and _guess_ and handle the logic inside the game `useBroadcaster`.

```js
let App = () => {
  let onInput = useListener()

//   let word = useBroadcaster(getWord)
  let guessBroadcaster = guessPipe(onInput)
//   let guess = useBroadcaster(guessBroadcaster, "")

  // gameBroadcaster has the repeat broadcaster
  let gameBroadcaster = gameLogic(
    thenCombine(guessBroadcaster)(getWord)
  )

  let game = useBroadcaster(gameBroadcaster, "") // handle word and guess here!

  return (
    <div>
      <input type="text" onChange={onInput} value={guess} />
      <p>{word}</p>
      <p>{game}</p>
    </div>
  )
}
```

Since we are using our game broadcaster `let game = useBroadcaster(gameBroadcaster, "")` to handle both the word and guess, we need the game broadcaster to return both the word and the guess.

```js
  // was:let game = useBroadcaster(gameBroadcaster, "") // handle word and guess here!
  let [word, guess] = useBroadcaster(gameBroadcaster, ["",""])
```

_**Note:** Since we are returning both _word_ and _guess_, we need to replace the empty string with an array of empty strings, this will be passed to both word and guess._

## Fixing the game logic

```js
let gameLogic = pipe(
  filter(every(isString)),
  map(([word, guess]) =>
    // This map will move into our <div>
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

We also need to fix our game logic. We have to remove the map from `gameLogic` and use it inside the `<p>` tag in our JSX - what the `App` returns.

We also need to update our `doneIf` operator to handle the new game logic. Because our game broadcaster is not returning an array `[word, guess]`.

_**Note:** our game broadcaster is: ` let [word, guess] = useBroadcaster(gameBroadcaster, ["",""])`_


### Updating the `doneIf` logic as well

Other than making `doneIf` accept an array, we also need to change the logic to check if every letter of the guess is in the word.

```js
  doneIf(([word, guess]) =>
    Array.from(word).every(letter => guess.includes(letter))
  ),
```


So our refactored logic and App will look like this:

```js
let gameLogic = pipe(
  filter(every(isString)),
  doneIf(([word, guess]) =>
    Array.from(word).every(letter => guess.includes(letter))
  ),
  repeat
)

let App = () => {
  let onInput = useListener()

  let guessBroadcaster = guessPipe(onInput)

  let gameBroadcaster = gameLogic(
    thenCombine(guessBroadcaster)(getWord)
  )

  let [word, guess] = useBroadcaster(gameBroadcaster, [
    "",
    "",
  ])

  return (
    <div>
      <input type="text" onChange={onInput} value={guess} />
      <p>{word}</p>
      <p>
        {Array.from(word)
          .map(letter =>
            guess.includes(letter) ? letter : "*"
          )
          .join("")}
      </p>
    </div>
  )
}
```