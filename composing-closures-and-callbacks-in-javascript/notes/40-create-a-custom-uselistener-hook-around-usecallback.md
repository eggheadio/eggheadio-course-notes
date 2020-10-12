# Create a Custom useListener Hook Around useCallback

**[📹 Video](https://egghead.io/lessons/egghead-create-a-custom-uselistener-hook-around-usecallback)**

- this is another example of how you can encapsulates and wrap a piece of functionallity to make it shareable throw out your application code.

### Before

```js
let listener
let callbackListener = (value) => {
  if (typeof value === "function") {
    listener = value
    return
  }
  listener(value)
}

let App = () => {
  let onInput = useCallback(callbackListener)
  let state = useBroadcaster(targetValue(onInput))
  return (
    <div>
      <input type="text" onInput={onInput} />
      <p>{state}</p>
    </div>
  )
}
```

### After

```js
export let useListener = (deps = []) => {
  let listener // Now this value is not attatch to the global scope of your module, but to this hook!
  let callbackListener = (value) => {
    // same here with this function
    if (typeof value === "function") {
      listener = value
      return
    }
    listener(value)
  }
  return useCallback(callbackListener, deps)
}

let App = () => {
  let onInput = useListener()
  let state = useBroadcaster(targetValue(onInput))

  return (
    <div>
      <input type="text" onInput={onInput} />
      <p>{state}</p>
    </div>
  )
}
```

- One thing that is important to clarify, is that we need to pass a dependencies array to our `useCallback` call inside the `useListener`, because that way we can hold on to the listener value being set to `setState` or the function passed at the beginning of our App render.
