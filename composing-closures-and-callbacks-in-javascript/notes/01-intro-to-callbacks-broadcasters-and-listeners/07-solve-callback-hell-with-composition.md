# Solve Callback Hell with Composition

[📹 Video](https://egghead.io/lessons/egghead-solve-callback-hell-with-composition)

[Callback hell](http://callbackhell.com) is a concept used to describe a situation that happens when there are too many callbacks nested inside of each other, this results in _"spagetti code"_ a piece of code that is hard to read, maintain and difficult to reason about. The composition patterns that we saw here can help to avoid this situation by creating flexibility with how the callbacks are managed.

The first step to solve this callback hell is to figured out what can be extracted as a function, in this example the is easy to see that there are at least 3 main function that can be created:

- one for the `fetch` callback

```javascript
let getURL = () => {
  fetch(`https://api.github.com/user/36073`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
}
```

- one for `setTimeout` call

```javascript
let timeout = () => {
  setTimeout(() => {}, 1000)
}
```

- and one for the click event

```javascript
let click = () => {
  document.addEventListener('click', (event) => {})
}
```

🔑 At this step we just **captured the behaviors** described by the original code in different functions

The next step is to figured out how to wire up this functions.

First, we define the behavior that we need to capture, the relationship of nesting is essentially to invoke an outer function that accepts a callback that calls an inner function that also takes a callback, this behavior can be described by a function

```javascript
let nest = (inner) => (outer) => (listener) => {
  outer((value) => {
    inner(listener)
  })
}
```

So, by using the functions that we defined, this will look like:

```javascript
nest(getURL)(nest(timeout)(click))((data) => {
  console.log(data)
})
```

Is important to notice the pattern here, this code is hard to read and have multiple parenthesis that make it also hard to write and easy to mess, but this is a pattern that we already know and solve by composition in [lesson 4](4-compose-closures-and-callbacks-to-create-new-functions.md)

We can use `pipe` from `lodash/fp` package and refactor our code

```javascript
let timeoutURL = pipe(
  nest(timeout),
  nest(getURL)
)

timeoutURL(click)((data) => {
  console.log(data)
})
```

## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/solve-callback-hell/src/index.js)
