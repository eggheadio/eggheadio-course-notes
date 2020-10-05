# Remember to Check for Done

[📹 Video](https://egghead.io/lessons/egghead-remember-to-check-for-done)

```javascript
export let waitFor = time => broadcaster => listener => {
  let cancelTimeout
  let cancel = broadcaster(value => {
    if (cancelTimeout) cancelTimeout()
    cancelTimeout = createTimeout(time)(timeoutValue) => {
      if (timeoutValue === done) return
      listener(value)
    }
  })
}
```

We see how important is to check for done when using things such `createTimeout` - doing this check will prevent our application to make two requests:

- The normal request
- an extra one when we have finished the timeout

It's also important to note that we never want the `waitFor` function to be done, because we are using things that can't be done inside other operators.

By adding the done inside the `createTimeout` this will pass that value up.

> **Remember**: done is a `Symbol`

---

**References:**

- [Lesson 18 - Pass a Done Symbol when an Async Function is Done](https://egghead.io/lessons/egghead-pass-a-done-symbol-when-an-async-function-is-done)
- [Lesson 33 - Marking Done Based on a Condition](https://egghead.io/lessons/egghead-marking-done-based-on-a-condition)
- [Lesson 44 - Creating a deBounce Operation to Limit Listener Calls - `waitFor` function ](https://egghead.io/lessons/egghead-creating-a-debounce-operator-to-limit-listener-calls)
