# Create an Initialize Operator to Clear an Input Field

[📹 Video](https://egghead.io/lessons/egghead-create-an-initialize-operator-to-clear-an-input-field)

Our guess game doesn't allow us to delete the text of the input field because we have removed the listener once we have guessed the word.

On the previous lesson, we have seen how to get a new word after we have successfully guessed the word. So we must clear the input field and allow users to continue guessing the new fetched word.

## Updating the input field

```js
let App = () => {
  let onInput = useListener()

  let word = useBroadcaster(getWord)

  let gameBroadcaster = gameLogic(
    combine(targetValue(onInput), getWord) // The guess is the broadcaster targetValue
  )

  let game = useBroadcaster(gameBroadcaster, "")

  return (
    <div>
      <input type="text" onInput={onInput} />
      <p>{word}</p>
      <p>{game}</p>
    </div>
  )
}
```

We need to do a few changes on the input field:

- Add a value field that will contain our guessed letters
  - This `guess` is the broadcaster `targetValue(onInput)`
- change `onInput` for `onChange`

```html
    <div>
      <input type="text" onChange={onInput} value={guess} />
      <p>{word}</p>
      <p>{game}</p>
    </div>
```

## Some refactoring on the broadcasters logic

Since we are using the broadcaster `targetValue(onInput)`, John refactored the logic a bit more and split this broadcaster and then passed it to the `useBroadcaster` hook.

```js
let App = () => {
    let onInput = useListener()

    let word = useBroadcaster(getWord)
    let guessBroadcaster = targetValue(onInput)
    let guess = useBroadcaster(guessBroadcaster, "") // We need to pass an empty string to make sure the value is not null

    let gameBroadcaster = gameLogic(
        combine(guessBroadcaster, getWord) // Note this is the same as using targetValue(onInput)
    )
    // ...
}
```

## Deleting the contents of the input field

Since we remove the listeners when we guess a word correctly - and the `repeat` operator is sending a cancel - we lose the listener inside the `useBroadcaster`.

> Because the listener inside `useBroadcaster` was thrown down, we can't use the `useEffect` hook, because `useEffect` is operating outside our composition of operators.

**How to make `useEffect` work again?**

Our `useBroadcaster` allows you to pass an array of dependencies.

```js
export let useBroadcaster = (
  broadcaster,
  initial = null,
  deps = []
) => {
  let [state, setState] = useState(initial)
  useEffect(() => {
    broadcaster(value => {
      if (value === done) {
        return
      }

      setState(value)
    })
  }, deps)
```

This allows us to pass `word` as a dependency, so when the word changes we will be able to use `useEffect` again.

```js
let App = () => {
  let onInput = useListener()

  let word = useBroadcaster(getWord)
  let guessBroadcaster = guessPipe(onInput)
  let guess = useBroadcaster(guessBroadcaster, "", [word]) // passing word as dep allow us to use useEffect again

  let gameBroadcaster = gameLogic(
    combine(guessBroadcaster, getWord)
  )

  let game = useBroadcaster(gameBroadcaster, "")

  //...
}

```

Now when we guess the right word, we can delete the previous input.

## Reseting the value to an empty string

We have seen how we can delete the contents inside the input field by passing the word as a dependency to allow the use of `useEffect`, but we need to do something more.

The input field should be cleared when a new word is generated.

**Why?**

Otherwise, we will use the letters of the previous guess against the new word and we will see some letters and some *.

**Fixing the issue - clearing the input value**

We can start by setting up an empty operator.

```js
let init = value => broadcaster => listener => {
  listener(value)
  return broadcaster(listener)
} 
```

Then we can create a pipe to get the value from the input field and use the init operator with an empty string to turn the value into an empty string.

```js
let guessPipe = pipe(targetValue, init(""))
```

We also need to update the `guessBroadcaster` to use the `guessPipe`

```js
let init = value => broadcaster => listener => {
  listener(value)
  return broadcaster(listener)
}

let guessPipe = pipe(targetValue, init(""))

let App = () => {
  let onInput = useListener()

  let word = useBroadcaster(getWord)
  let guessBroadcaster = guessPipe(onInput)
  let guess = useBroadcaster(guessBroadcaster, "", [word])

  let gameBroadcaster = gameLogic(
    combine(guessBroadcaster, getWord)
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

## Resources and References

- useBroadcaster [lesson 38](https://egghead.io/lessons/egghead-create-a-custom-usebroadcaster-hook) [lesson notes](38-create-a-custom-usebroadcaster-hook.md)
 