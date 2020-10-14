# Organizing Operators and Cleaning Up

[📹 Video](https://egghead.io/lessons/egghead-organizing-operators-and-cleaning-up)

In this lesson we do some cleaning up, we put the `init`, `log` and `thenCombine` operators inside the operators folder.

## Cleaning getWord broadcaster

We also remove the `share` operators because we have a single broadcaster on `getword` (it's the `map` broadcaster)

```js
let getWord = pipe(
  map(head),
  )(getURL(`https://random-word-api.herokuapp.com/word`)
)
```

## Cleaning the game logic

> "The great thing about operators is the ability of creating new ones by piping a couple of them together."

So we will create a `repeatIf` operator that will pipe the `doneIf` and `repeat` operators together.

```js
export let repeatIf = condition =>
  pipe(doneIf(condition), repeat)
```

We can then clean our game logic by using the new `repeatIf` operator

```js
let gameLogic = pipe(
  filter(every(isString)),
  log,
  repeatIf(([word, guess]) =>
  Array.from(word).every(letter => guess.includes(letter))
)
```

We can do a bit more cleaning and take the expression inside our `repeatIf` operator and put it inside a variable

```js
let repeatLogic = ([word, guess]) =>
  Array.from(word).every(letter => guess.includes(letter))

let gameLogic = pipe(
  filter(every(isString)),
  log,
  repeatIf(repeatLogic)
)