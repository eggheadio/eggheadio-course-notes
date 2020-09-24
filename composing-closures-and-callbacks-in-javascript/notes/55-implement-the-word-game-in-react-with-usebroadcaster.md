# Fix Race Conditions Due to Caching and Canceling

*[📹 Video](https://egghead.io/lessons/egghead-fix-race-conditions-due-to-caching-and-canceling)*
 
On this lesson, we implement the [word game from lesson 22](https://egghead.io/lessons/egghead-building-a-word-matching-game-by-composing-callbacks) in react.

We also use a few operators that we have created on previous lessons:

- `forOf` from [lesson 12](https://egghead.io/lessons/egghead-pass-an-array-to-a-callback-with-a-forof-function)
- `mapBroadcaster` from [lesson 22](https://egghead.io/lessons/egghead-building-a-word-matching-game-by-composing-callbacks)
- `stringConcat` from [lesson 22](https://egghead.io/lessons/egghead-building-a-word-matching-game-by-composing-callbacks)


```javascript
let game = pipe(
    mapBroadcaster(value => {
        return map(letter => value.includes(letter) ? : "*")(forOf("honeycomb"))
    })
    stringConcat
)
```

- The `value` is the word we want the player to guess
  - This is the word inside `forOf`
- The `forOf` will loop through each letter of the word to be guessed
- The `stringConcat` will just add the letter or * to the letters added to the input field.

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/egghead-save-network-requests-by-using-a-cache)

📹 [Go to Next Lesson](https://egghead.io/lessons/egghead-implement-the-word-game-in-react-with-usebroadcaster)