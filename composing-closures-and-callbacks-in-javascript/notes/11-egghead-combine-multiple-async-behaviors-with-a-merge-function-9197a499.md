# Combine Multiple Async Behaviors with a Merge Function

**[📹 Video](https://egghead.io/lessons/egghead-combine-multiple-async-behaviors-with-a-merge-function-9197a499)**

- stablish consistency
- all function expects the same type of arguments (pattern)
  - that let you combine functions because you Know what is expected

<CODE HERE>

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
```

📹 [Go to Previous Lesson](https://egghead.io/lessons/egghead-create-a-utility-function-to-control-setinterval)
📹 [Go to Next Lesson](https://egghead.io/lessons/egghead-use-lodash-curry-when-functions-return-functions)
