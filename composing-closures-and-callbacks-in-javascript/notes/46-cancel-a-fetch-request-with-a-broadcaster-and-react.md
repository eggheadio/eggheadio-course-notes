# Cancel a Fetch Request with a Broadcaster and React

[📹 Video](https://egghead.io/lessons/egghead-cancel-a-fetch-request-with-a-broadcaster-and-react)

```javascript
let getURL = (url) => (listener) => {
  let controller = new AbortController()
  let signal = controller.signal // <== our controler's signal!!
  fetch(url, {signal})
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      listener(json)
    })

  return () => {
    controller.abort() // <== Cancel the Fetch! (thanks to the signal attached)
  }
}
```

- We use the `AbortController` to get access to a signal we need to pass to our `fetch` inside the second parameter of it (fetch options).
- With the signal we can cancel our fetch call by calling `controller.abort()`.

## Resources and References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/fetch-broadcaster-cancel/src/index.js)
- [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
- [fetch syntax](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Syntax)
