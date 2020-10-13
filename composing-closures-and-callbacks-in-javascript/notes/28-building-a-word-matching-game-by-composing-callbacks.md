# Building a Word Matching Game by Composing Callbacks

[📹 Video](https://egghead.io/lessons/egghead-building-a-word-matching-game-by-composing-callbacks)

- whenever you find repeating a pattern write a few times, consider creating a new utility about that particular operation (the `targetValue` example)

```javascript
inputValue((value) => {
  let result = ''
  word((letter) => {
    if (letter === done) {
      console.log(result)
      return
    }
    if (value.includes(letter)) {
      //         ⬆️ THIS IS NEW!! (Let's talk about it below...)
      result += letter
    } else {
      result += '*'
    }
  })
})
```

- The fact that we have logic based of the inputs from the outside broadcaster (`inputValue`) and the value from the inside broadcaster (`word`) is a new concept/idea to us!
- Let's break down all these logic and refactor it using reusable functions

```javascript
let mapBroadcaster = (createBroadcaster) => (broadcaster) => (listener) => {
  broadcaster((value) => {
    let newBroadcaster = createBroadcaster(value)
    newBroadcaster(listener)
  })
}

mapBroadcaster((value) => word)(inputValue)(console.log)
```

- `mapBroadcasters` takes a function (`value => word`) that the return of that function returns a new broadcaster!. The _magic_ here is that we are using a function to help us define what the broadcaster will be getting, we are inverting the way we are defining our values!
- The function we are passing to `broadcaster` is a new listener (I would call it modifier listener, because it captures the original listener and transforms the value it will receive)
- Now that we create `newBroadcaster` with the original listener value, we can now pass that to the original `listener` to obtain the result we want (which is map over the word we passed to `inputValue`)
- Let's continue to add all the logic to the listener...

```javascript
mapBroadcaster((value) => {
  return map((letter) => (value.includes(letter) ? letter : '*'))(word)
})(inputValue)(console.log)
```

- For this part, take a look on how we are calling `word`. Because we are calling the returned function of the previous one, that means we can take it out and compose it in a different function, let's do that:

```javascript
mapBroadcaster(operator => operator(word))(map(value) => {
  return map((letter) => (value.includes(letter) ? letter : "*"))
})(inputValue)(console.log)
```

// TODO: ask about this change!

- If you pay attention to the inner function (the function passed to the `map` function), you notice that this is our actual hangman logic which we can extract into our own function!

```javascript
let hangmanLogic = (value) => {
  return map((letter) => (value.includes(letter) ? letter : "*"))
}

// and pass it to our whole function
mapBroadcaster(operator => operator(word))(map(hangmanLogic)(inputValue)(console.log)
```

- let's name another function we are using:

```javascript
let hangmanLogic = (value) => {
  return map((letter) => (value.includes(letter) ? letter : "*"))
}

// applyOperator is getting a broadcaster and passing it to our operator, this is the same thing we did with `inputValue` (abstract a piece of functionality to its own function)
let applyOperator = broadcaster => mapBroadcaster(operator => operator(broadcaster))

applyOperator(word)(map(hangmanLogic)(inputValue)(console.log)
```

and finally let's `pipe` all the functions and add the last piece of functionality (concatenate all letters):

```javascript
let stringConcat = (broadcaster) => (listener) => {
  let result = ''
  broadcaster((value) => {
    if (value === done) {
      listener(result)
      result = ''
      return
    }
    result += value
  })
}

let hangman = pipe(map(hangmanLogic), applyOperator(word), stringConcat)

hangman(inputValue)(console.log)
```

- If you compare both versions, you can see the huge benefit both in readability and reusability of our code! 🌟
- You can also add/remove/reorder all the game logic depending on your needs, like for example if you want to debounce the input or you are interacting with an API and need to wait for some results... the possibilities are endless.
