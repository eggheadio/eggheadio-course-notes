# Map an Error to a Broadcaster Value in React

[📹 Video](https://egghead.io/lessons/egghead-map-an-error-to-a-broadcaster-value-in-react)

In the world of web appplications and in general in any user facing interface, error handling is an important topic, minify the friction for the user is a way to make your application successful.

In this example we are using a Promise to handle the response of the `fetch` call, the promises can fail, in this case we are triggering an error in the Promise by cancelling the call. This errors can be caught by using the `catch` block and writing the handling logic inside of that block

```javascript
let getURL = (url) => (listener) => {
  let controller = new AbortController()
  let signal = controller.signal
  fetch(url, {signal})
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      listener(json)
    })
    .catch((error) => {
      console.log(error)
    })

  return () => {
    controller.abort()
  }
}
```

In this part of the example we are just loggin out the error. but what we want is to be able to handle that in a better way. Following our patterns, we can create an operator that takes care of this value.

The logic for this new operator is to transform or **map** the erro value to a new shape, so we will name the operator as `mapError`. In a similar way as our previous operators this operator takes a `transform` a `broadcaster` and a `listener`.

This operator will receive every value that comes from the `broadcaster` so we need to filter the type of the value so it can act only for errors. That is being done by checking the if the value is instance of `Error` object, in that case the `transform` is applied and pushed back to the `listener`, in other case just push to `listener`

```javascript
let mapError = (transform) => (broadcaster) => (listener) => {
  return broadcaster((value) => {
    if (value instanceof Error) {
      listener(transform(value))
      return
    }

    listener(value)
  })
}
```

Now with this logic for the operator we just need to wrap the call to `getUrl` and define the `tranform` function

```javascript
mapError((error) => ({login: error.message}))(
  getURL('https://api.github.com/users/johnlindquist'),
)(console.log)
```

That is the same as this

```javascript
const transform = (error) => {
  return {
    login: error.message,
  }
}
const response = getURL('https://api.github.com/users/johnlindquist')
mapError(transform)(response)((value) => {
  console.log(value)
})
```

## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/map-error/src/index.js)
