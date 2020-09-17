# Create a Sequence of Broadcasters

**[📹 Video](https://egghead.io/lessons/egghead-create-a-sequence-of-broadcasters)**

By adding the **done** behavior to our broadcasters allow us to perform new operations on it, like create a sequence of broadcasters. This is, fire one broadcaster after the other only if the previous one is **done**

As an axample we use a custom broadcaster call `delayMessage` that fire a **done** status.

```javascript
let delayMessage = message => hardCode(message)(createTimeout(500))
```

this function just log a message after certain time, and also shows the **done** symbol.

Now we can create a broadcaster that chain other broadcasters, we can call this  `sequence`.
The `sequence` broadcaster accepts  N number of broadcasters functions, the argument here is an array, so we can manipulate it and iterate over it.

The implementation here is to loop through the array of broadcasters, perform each of them and fire off the next one after the **done** symbol is captured.

The implementation here is a bit "recursive" so we can read a particular broadcaster from the broadcasters array by using  `Array.shift` that will take the first element of the array **🚨and at the same time will update (mutate) the original array removing the first item of it**.

After we have a reference to a broadcaster, we can just fire up and add the **done** status handle, since this si a recurisve operation we need to take the logic from inside the broadcaster and move it out to enable us to re-use the same function.



The logic is:

1. Take one broadcaster,
2. Trigger it and when is `done` take the next broadcaster
3. Trigger it and when is `done` take the next broadcaster
4. so on and so on until there is no broadcastsers to take.

```javascript
let sequence = (...broadcasters) => listener => {
  let broadcaster = broadcasters.shift()
  let sequenceListener = value => {
		if(value === done && broadcasters.length) {
      let broadcaster = broadcasters.shift()
      broadcaster(sequenceListener)
      return
    }
    listener(value)
  }
  broadcaster(sequenceListener)
}
```

The nice thing about using a sequence broadcasters is that by our definition we can cancel any broadcaster, so we can also cancel the sequence at any time.



>  🔑  Be careful when writing the cancel behavior and the return of the cancel function. If you directly return the cancel function, then you're returning just this first assignment. You want to return a function that knows about the future assignments too.



🚨 If for some reason we need or want to create a sequence with a broadcaster that don't push a **done** status we will need to use our `doneIf` operator to add that logic to it to enable the sequence to work.

## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/done-if/src/index.js#L15)

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/egghead-marking-done-based-on-a-condition)
📹 [Go to Next Lesson](https://egghead.io/lessons/egghead-map-a-sequence-based-on-values)

