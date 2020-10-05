# Create a Buffer to Pair Values Together with Zip

[📹 Video](https://egghead.io/lessons/egghead-create-a-buffer-to-pair-values-together-with-zip)

- the main concept here is that in order to capture values between listeners, you can always wrap your original listener into a new one, do whatever you need with the value and then pass it to the original listener

```javascript
// no way to intercept the value passed to the listener
broadcaster(listener)

// now you are intercepting the valueand you can do anything you need/like with the it before you pass it to the listener
broadcaster((value) => {
  // do something awesome
  listener(value)
})
```

- the `buffers` helps to capture the values and return the values of both broadcasters together to the listeners (you can see the result when the button is clicked multiple times and some seconds are buffered)

## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/zip/src/index.js)
