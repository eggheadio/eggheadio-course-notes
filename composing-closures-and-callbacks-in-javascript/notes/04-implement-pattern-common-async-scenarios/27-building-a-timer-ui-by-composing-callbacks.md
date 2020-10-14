# Building a Timer UI by Composing Callbacks

[📹 Video](https://egghead.io/lessons/egghead-building-a-timer-ui-by-composing-callbacks)

- you see a pattern on most of the function we are writing. We are always capturing values and _rewiring_ them with the new logic we need.
- this is useful because you can see how you can reorganize the logic you need on your apps in a more composable way, that also helps you reuse pieces of your codebase.

```javascript
import {addListener, createInterval} from './broadcasters'

let startClick = addListener('#start', 'click')
let stopClick = addListener('#stop', 'click')

let timer = createInterval(100)

// this login you see here
startClick(() => {
  timer((value) => {
    console.log(value)
  })
})

// can also be represented like this:
let startWhen = (whenBroadcaster) => (mainBroadcaster) => (listener) => {
  whenBroadcaster(() => {
    mainBroadcaster((value) => {
      listener(value)
    })
  })
}

startWhen(startClick)(timer)(console.log)

/**
 * whenBroadcaster === startClick
 * mainBroadcaster === timer
 * listener === console.log
 */
```

- The code above is not handling any cancellation behavior, so keep in mind that.
- Because all the broadcasters return a function to cancel them, its easier to assign your inner broadcasters to values and cancel them at any point you need/want.
- After the `stopWhen` operator is added, you see that the order you passed your broadcasters is important, because you may be canceling things you are not able to restart (startClick example).
- The final API looks very simple and much more readable than all the logic behind it. this has multiple benefits from code readability to more testable code.
