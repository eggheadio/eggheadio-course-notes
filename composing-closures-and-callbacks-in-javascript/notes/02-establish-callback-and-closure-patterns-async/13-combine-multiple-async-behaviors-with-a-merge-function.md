# Combine Multiple Async Behaviors with a Merge Function

[📹 Video](https://egghead.io/lessons/egghead-combine-multiple-async-behaviors-with-a-merge-function-9197a499)

- establish consistency
- all function expects the same type of arguments (pattern)
  - that let you combine functions because you _Know_ what is expected

```javascript
let createTimeout = (time) => (listener) => {
  let id = setTimeout(listener, time)

  return () => {
    clearTimeout(id)
  }
}

let addListener = (selector) => (eventType) => (listener) => {
  let element = document.querySelector(selector)
  element.addEventListener(eventType, listener)

  return () => {
    element.removeEventListener(eventType, listener)
  }
}

let createInterval = (time) => (listener) => {
  let id = setInterval(listener, time)
  return () => {
    clearInterval(id)
  }
}

let addButtonListener = addListener('#button')
let addButtonClickListener = addButtonListener('click')

let oneSecond = createInterval(1000)

//broadcaster = function that accepts a listener
let merge = (broadcaster1, broadcaster2) => (listener) => {
  let cancel1 = broadcaster1(listener)
  let cancel2 = broadcaster2(listener)

  return () => {
    cancel1()
    cancel2()
  }
}

let clickOrTick = merge(addButtonClickListener, oneSecond)
let cancelClickOrTick = clickOrTick(() => {
  console.log('click or tick')
})

cancelClickOrTick()
```

- because both broadcasters (`addButtonClickListener` & `oneSecond`) expects a listener, we are able to create a wrapper function that accepts a listener too and explicitly pass it to both broadcasters, which in this example we call it `merge`
- and also we can follow the same pattern as before, because we control the broadcasters we are getting as parameters in `merge`, so we can return another function that cancels both of them

- For the sake of comparison and help with readability, here's a representation of the functions both using ES6 syntax and ES5 syntax (using the function keyword)

```js
// same function
let createInterval = (time) => (listener) => {
  // ...do something
}

function createInterval(time) {
  return function (listener) {
    // ...do something
  }
}

// also, is common to see the above function call when you have functions that return functions
let foo = (a) => (b) => {
  console.log(a, b)
}

foo('Hello')('World') // <== two calls on the same line
```

## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/merge/src/index.js)
