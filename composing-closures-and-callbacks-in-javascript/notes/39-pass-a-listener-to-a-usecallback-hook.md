# Pass a Listener to a useCallback Hook

*[📹 Video](https://egghead.io/lessons/egghead-pass-a-listener-to-a-usecallback-hook)*


## useCallback Hook

The `useCallback` hook allows you to

> Pass an inline callback and an array of dependencies
> [React Documentation](https://reactjs.org/docs/hooks-reference.html#usecallback)

This Hook:

- Takes a function as the first argument - the callback
- Takes an array of dependencies as the second argument

You can use this hook like this:

```javascript
import {useCallback} from "react"

let App = () => {
  let onInput = useCallback(() => {
      console.log("Hello")
  })
  
  return (
      <div>
        <input type="text" onInput={onInput} />
      </div>
  )
}

```

## Creating a custom listener

The custom listener will be both a

- listener
  - To listen for anything passed to it
- broadcaster
  - To be used on our `useBroadcaster` Hook

We will follow the pattern of the course and create a custom listener where we can create a listener for the callback passed on `useCallback` hook.

```javascript
let listener

let callbackListener = value => {
    // Check if value is the `useState` function
    if (typeof value === "function") {
        listener = value
        return
    }
    listener(value)
}

```

We also need to use the `targetValue` operator from [lesson 28](https://egghead.io/lessons/egghead-building-a-word-matching-game-by-composing-callbacks) to map the event of the target value.

**Why?**

Since the code on this lesson is using an Input, we are getting the event back. By using `targetMap` we get the value of that target.

`targetMap` is returning

```javascript
event => event.target.value
```

Value is whatever we type on the input field.

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/egghead-create-a-broadcaster-in-react-with-usestate-and-useeffect-hooks)
📹 [Go to Next Lesson](https://egghead.io/lessons/egghead-create-a-custom-uselistener-hook-around-usecallbackk)