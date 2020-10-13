# Compose Operators to Implement Game Logic

**[📹 Video](https://egghead.io/lessons/egghead-compose-operators-to-implement-game-logic)**

- let's break down our `gameLogic` broadcaster:

```js
let gameLogic = pipe(
  filter(every(isString)),
  map(([guess, word]) =>
    Array.from(word)
      .map((letter) => (guess.includes(letter) ? letter : "*"))
      .join("")
  )
)
```

- we can see how we brak all the logic into two

```js
// PART 1
filter(every(isString))

// PART 2
map(([guess, word]) =>
  Array.from(word)
    .map((letter) => (guess.includes(letter) ? letter : "*"))
    .join("")
)
```

- Part 1 is responsable of checking that all values in the array are strings. for that we are using `every` (call a callback with every value of an array) and `isString` (check if a calue is a string) from `lodash`
- Part 2 is responsable of compare each letter from the `word` to all the letters from what the user types (`guess`).

- finally we are setting our game into our React app using `useBroadcaster`

```js
let gameBroadcaster = gameLogic(combine(targetValue(onInput), getWord))

let game = useBroadcaster(gameBroadcaster, "")
```


