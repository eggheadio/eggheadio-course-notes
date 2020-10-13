# Walkthrough the Data Flow of the Word Game

[📹 Video](https://egghead.io/lessons/egghead-walkthrough-the-data-flow-of-the-word-game)

## First steps

First, we set up our initial values, state and listener.

![](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1602630305/transcript-images/javascript-walkthrough-the-data-flow-of-the-word-game-initial_steps.png)

## Setting our game

Now the broadcaster that we set up in `useBroadcaster` is the game broadcaster that starts with a word, obtained from `getWord` that fetches a random word from an API endpoint.

![](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1602630305/transcript-images/javascript-walkthrough-the-data-flow-of-the-word-game-fetching_word.png)

## Feeding word to thenCombine and combine with the input word

![](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1602630305/transcript-images/javascript-walkthrough-the-data-flow-of-the-word-game-combine.png)

Then the second broadcaster which is the `onInput` will be passed to the `guessPipe` which gets the targetValue and when it repeats, it sets that input into an empty string.

## The game logic

In our game logic, we are repeating if it matches some repeat logic, which is if every letter of the guess word, was used we win the game and it should repeat the same logic with a new word.

![](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1602630306/transcript-images/javascript-walkthrough-the-data-flow-of-the-word-game-repeatif_logic.png)

All the logic of hitting the condition inside `repeatLogic` will tear everything down, do another fetch request and set everything up again is contained in the `repeatIf` operator

```js
let repeatLogic = ([word, guess]) =>
  Array.from(word).every(letter => guess.includes(letter))
```