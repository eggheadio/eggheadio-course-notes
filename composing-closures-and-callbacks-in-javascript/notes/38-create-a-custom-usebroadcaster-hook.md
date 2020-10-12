# Create a Custom useBroadcaster Hook

**[📹 Video](https://egghead.io/lessons/eghead-create-a-custom-usebroadcaster-hook)**

- creating a custom hook, is basically extracting all the "logic" from your component to a meaningful and more semantic function
- you can add a more descriptive name to it
- you can change the shape of the values this new function will return, to make it simpler to use it in your component

### Before our custom hook

```js
let App = () => {
  let [state, setState] = useState("Hi")
  useEffect(() => {
    createInterval(1000)(setState)
  }, deps)

  return <div>{state}</div>
}
```

### After our custom hook

```js
let useBroadcaster = (broadcaster, deps = []) => {
  let [state, setState] = useState("Hi")
  useEffect(() => {
    broadcaster(setState)
  }, deps)

  return state
}

let App = () => {
  let state = useBroadcaster(createInterval(1000))
  return <div>{state}</div>
}
```

### And you may ask, why this is better?

glad you ask! ;)

- functions are easier to reuse
- function are easy to test, compared to test the whole component behavior, you can just test your function or custom hook in isolation
- and the most important to me, you end up with a much more readable codebase, you can communicate what the code is doing by naming your custom hooks and functions correctly!

