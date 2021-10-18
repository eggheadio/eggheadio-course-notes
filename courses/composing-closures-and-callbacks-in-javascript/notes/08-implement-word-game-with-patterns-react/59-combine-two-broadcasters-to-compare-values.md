# Combine Two Broadcasters to Compare Values

**[📹 Video](https://egghead.io/lessons/egghead-combine-two-broadcasters-to-compare-values)**

- let's add some comments to the new `combine` broadcaster

```js
export let combine = (broadcaster1, broadcaster2) => (listener) => {
  let value1
  let value2

  let cancel1 = broadcaster1((value) => {
    value1 = value
    listener([value1, value2])
  })
  let cancel2 = broadcaster2((value) => {
    value2 = value
    listener([value1, value2])
  })

  return () => {
    cancel1()
    cancel2()
  }
}
```

- the `combine` function goal is to use two broadcasters, and modify the value that will be passed to the listener, by _combining_ them.
- you see that both broadcasters are called as normal, but the value passed to the `listener` is not the actual value, but _an Array_ of both the value from the `broadcaster1` and the value of `broadcaster2`.
- we need to store the values (closure) outside them so we can reference both values inside both broadcasters
- here's the `merge` broadcaster, which also accepts two broadcasters, but behaves differently, since it will call both broadcasters with the same listener, and does not modify its behavior.

```js
export let merge = curry((broadcaster1, broadcaster2, listener) => {
  let cancel1 = broadcaster1(listener)
  let cancel2 = broadcaster2(listener)

  return () => {
    cancel1()
    cancel2()
  }
})
```


