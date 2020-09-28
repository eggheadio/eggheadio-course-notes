# Create a Broadcaster in React with useState and useEffect Hooks 

*[📹 Video](https://egghead.io/lessons/egghead-create-a-custom-usebroadcaster-hook)*


- Hooks are just functions that we can reuse on our code.

We can create our custom hook by grabbing the code of the previous lesson and move both the `useState` and `useEffect` code into our custom hook.

```javascript
let useBroadcaster = (broadcaster, deps = []) => {
  let [state, useState] = useState("Hi")

  useEffect(() => {
    broadcaster(setState)
  }, deps)
}
```

A few things that are important to note:

- Our previous `useEffect()` was setting the state to whatever was being returned to us from the `createInterval` broadcaster - [Lesson 12](https://egghead.io/lessons/egghead-create-a-utility-function-to-control-setinterval)
- We need to set the `deps` argument like `deps = []` to default deps to that empty array, otherwise we would get the same re-render effect as seen on the previous lesson.
- We want to set the `deps` argument, because we might want to add some dependencies to this hook in the future.



```javascript
import { createInterval } from "./broadcasters"

import React, { useState, useEffect } from "react"
import { render } from "react-dom"

let App = () => {

  return <div>{state}</div>
}

render(<App></App>, document.querySelector("#root"))

```

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/egghead-create-a-broadcaster-in-react-with-usestate-and-useeffect-hooks)
📹 [Go to Next Lesson](https://egghead.io/lessons/egghead-pass-a-listener-to-a-usecallback-hook)