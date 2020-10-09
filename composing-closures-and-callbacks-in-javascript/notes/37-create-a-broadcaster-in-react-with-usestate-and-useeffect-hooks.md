# Create a Broadcaster in React with useState and useEffect Hooks

*[📹 Video](https://egghead.io/lessons/egghead-create-a-broadcaster-in-react-with-usestate-and-useeffect-hooks)*

This lesson talks about **useState** and **useEffect** hooks, if you don't know about them, you can watch these lessons:

- [Introduction to Reusable State and Effects with React Hooks lesson](https://egghead.io/lessons/react-introduction-to-reusable-state-and-effects-with-react-hooks)
- [Reusable State and Effects with React Hooks course](https://egghead.io/courses/reusable-state-and-effects-with-react-hooks)

## useState Hook

> "`useState` is a Hook that lets you add React state to function components.
> [React Documentation](https://reactjs.org/docs/hooks-state.html)

You can use this hook like this

```javascript
import {useState} from "react"

let App = () => {
  let [sate, useState] = useState(null)
}
```

_Note: `state` and `useState` can be called whatever you want._

- The `useState` hook allows you to pass something to it - this will be the initial value of `state`
  - In the example, we setting the initial value of  `state` to null


## useEffect Hook

> By using this Hook, you tell React that your component needs to do something after render.
> [React Documentation](https://reactjs.org/docs/hooks-effect.html)

This Hook:

- Takes a function as the first argument
- Takes an array of dependencies as the second argument
  - Tells when it should update

You can use this hook like this

```javascript
import {useEffect} from "react"

let App = () => {

  useEffect(() => {
    document.title = "My awesome App!"
  })
}

```

On the course example:

```javascript
import { createInterval } from "./broadcasters"

import React, { useState, useEffect } from "react"
import { render } from "react-dom"

let App = () => {
  let [state, useState] = useState("Hi")

  useEffect(() => {
    createInterval(1000)(setState)
  }, []) // Passing this empty array prevents the re-rendering whenever the state changes
  return <div>{state}</div>
}

render(<App></App>, document.querySelector("#root"))
```

