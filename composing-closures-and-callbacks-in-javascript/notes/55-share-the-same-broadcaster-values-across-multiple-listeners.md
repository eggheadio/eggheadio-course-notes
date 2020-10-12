# Share the Same Broadcaster Values Across Multiple Listeners

**[📹 Video](https://egghead.io/lessons/egghead-share-the-same-broadcaster-values-across-multiple-listeners)**

- let's discuss the new `share` function (or operator)

```js
let share = () => {
  let cancel
  let listeners = []
  return (broadcaster) => {
    cancel = broadcaster((value) => {
      listeners.forEach((listener) => listener(value))
    })
    return (listener) => {
      listeners.push(listener) // this listener is all the getUrl calls. Because we are calling it twice (one for `word` & another one for `anotherWord`) that's why we needed our `share` operator

      return () => {
        cancel()
      }
    }
  }
}
```

- the `cancel` variable is needed to cancel the broadcaster passed. we set the variable and assigned it to thte result of the broadcaster call.
- we then store all the `listeners` passed to this broadcaster. this is the important part here because by storing the listeners, we can call all of them with the value passed, and effectively _share_ the same value with all the listeners.
- another important piece here, is that we are _calling_ this function when we pass it to `pipe`, that wau it will capture the listener first and share the same value with all the next calls.

```js
let getWord = pipe(
  map(head),
  share() // <== Important!! this function is being called here!!, this is needed to capture the value from `getURL`, store it and share it!
)(getURL(`https://random-word-api.herokuapp.com/word`))

let App = () => {
  let word = useBroadcaster(getWord)
  let anotherWord = useBroadcaster(getWord)
  return (
    <div>
      <p>{word}</p>
      <p>{anotherWord}</p>
    </div>
  )
}

render(<App></App>, document.querySelector("#root"))
```

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-fix-race-conditions-due-to-caching-and-canceling)
📹 [Go to Next Lesson](https://egghead.io/lessons/egghead-limit-to-a-single-shared-broadcaster-each-new-event)
