# Comparing Repeat to Start

[📹 Video](https://egghead.io/lessons/egghead-comparing-repeat-to-start)

In the current implementation of the `startWhen` broadcaster there is no logic to handle the `done` status so need to be manually added as we commonly do by just wrapping the logic with a condition block and pass the `done` value to the listener

```javascript
export let startWhen = whenBroadcaster => mainBroadcaster => listener => {
  ...
  ..
  cancelWhen = whenBroadcaster(() => {
    ..
    cancelMain = mainBroadcaster(value => {
      if(value === done) {
        listener(done)
        return
      }
      listener(value)
    })
  })
  ...
  ..
}
```

but this is not enough to prevent the `done` symbol to be pushed into the console, why is that? Is because of the way the `startWhen` broadcaster was built. It wraps the logic of two broadcasters where the inner one, `mainBroadcaster` is controlled by the outer one `whenBroadcaster`, and if the inner broadcaster found the `done` value it will immediately stop even tho the outer broadcaster is not done yet.

The solution to avoid the `done` symbol to be logged is to check the `done` status in all of the broadcasters, in this case, two of them. Will check if all of the broadcasters are **done** and at that moment send the `done` value to the listener.

But we will keep the `return` guard in the same spot to avoid going outside of the conditional block if the inner broadcaster is **done**

```javascript
...
...
cancelWhen = whenBroadcaster(whenValue => {
  cancelMain = mainBroadcaster(value => {
    if(value === done) {
      if(whenValue === done) {
				listener(done)
      }
      return
    }
    listener(value)
  })
})
...
..
```

🔑 Don't forget that when writing nested broadcasters, where the outer one can control the inner broadcasters, you need to add the logic to handle the **done** status of all of them and also the cancellations.

We can compare the logic of the `repeatWhen` and `startWhen` by checking how the values are logged out.

In the case of the `startWhen` there is nothing logged to the console on load, but the event listener is immediately attached to the input.

`repeatWhen` log to the console immediately on load, but the event listener is not attached until the inner broadcaster is `done`.

The **repeat** logic, that resembles a recursive behavior is almost the opposite of the `startWhen` broadcaster, so even tho the UI/UX experience looks similar, the implementation details of both broadcasters differ.

`startWhen` is an scenario where the outer broadcaster controls the inner broadcaster

`repeatWhen` implementation is capture the initial behavior and wait until that is done to allow the outer broadcaster to work.

## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/repeat-when-vs-start-when/src/index.js)
