# Use Buffers to Store Values Until-a Condition is Met

**[📹 Video](https://egghead.io/lessons/egghead-use-buffers-to-store-values-until-a-condition-is-met)**

We can create any type of operators and use any tool available for that purposse, one of the tool that we already saw in the course is the use of `buffers` to store some data, we will use that same idea to implement a split operator.

The idea of the split operator is to divide the data at certain point based on some marker. In our case the data is a string and the marker will be a character. Our split operator then will receive an argument that define that marker, we will call it `splitter` and is passed in the same way as the `transform` and  `predicate` function, before the  `createOperator` call

```javascript
let split = splitter => createOperator((broacaster, listener) => {
  return broadcaster(value  => {
    
  })
})
```

We will use our operator template here, that allow us to implement every logic we need inside the listener.

To split the string that we operator receives we will create a buffer, that is no more than a simple array to push some data to it and to retrieve it from there based on teh  `splitter` value.

```javascript
let split = splitter => createOperator((broacaster, listener) => {
  let buffer = []
  return broadcaster(value  => {
    if(value === splitter) {
      listener(buffer)
      buffer = []
    }else{
      buffer.psuh(value)
    }
  })
})
```

The logic implemented is as follows:

1. Check if the current value (the character) read is same as the `splitter` value
2. if is the same value, then, pass the whole `buffer` to the `listener` to be logged out and clear the buffer 
3. if is **not** the same value, then add the `value` (the character) to the buffer to be used later.

This almost works, but since we have pre-define `done` behavior, the `split` operator stops before sending back the last piece of the buffer, to fix that we can just implemente a custom `done` behavior, by not using the `createOperator` wrapper.

```javascript
let split = splitter => curry((broacaster, listener) => {
  let buffer = []
  return broadcaster(value  => {
    if(value === done){
      listener(buffer)
      buffer = []
      listener(done)
    }
    if(value === splitter) {
      listener(buffer)
      buffer = []
    }else{
      buffer.psuh(value)
    }
  })
})
```

The custom done bahavior here is just:

1. Check if the value is done
2. If is true, then pass the whole buffer back to the listener, clear and mark as done
3. otherways just pass and run the `splitter` comparison.

## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/split/src/operators.js#L31)

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/egghead-building-a-counter-ui-by-composing-callbacks)
📹 [Go to Next Lesson](https://egghead.io/lessons/egghead-define-a-function-to-set-common-behaviors-in-operators)


