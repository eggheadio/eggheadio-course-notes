# Create a Buffer to Pairs Values Together with Zip

**[📹 Video](https://egghead.io/lessons/egghead-create-a-buffer-to-pair-values-together-with-zip)



✅ Is a good practice to store related code inside same file or module and export only what is required. In this example we move all the broadcasters functions to it's own module and exported a few of them to be able to use it in our main `index.js` file.

In the [previous lesson](15-match-function-requirements-with-lodash-partial-and-flip.md) we created a broadcaster that implement an `or` behavior, accepting two broadcasters and runnning one or the other. Now, we want to implement an `and` behavior, meaning that we will create a new broadcaster function that will accept two functions with a broadcaster signature and run both of them, we will call this type of broadcaster function `zip`

As we learnt in previous lessons we can use the [**curry**](https://javascript.info/currying-partials) pattern by using the (curry)[https://lodash.com/docs/#curry] utility from (lodash)[https://lodash.com] library, by using this wrapper function we can write our new zip broadcaster in a simple way by just listing the arguments of the function and keeping the same signature as always: A broadcaster is a function that accepts a listener and returns a function to cancel the behavior.

```javascript
let zip = curry((broadcaster1, broadcaster2, listener) => {

})
```

For this `and` behavior we want to pass the result of both broadcasters to the listener, so the listener passed to `zip` will receive an array with the value from the first broadcaster and the one from the second broadcaster to actually act based on the results of the `and` operation.

To do this we need to change the way we are calling the broadcasters, currently we are doing 

```javascript
broadcaster1(listener)
broadcaster2(listener)
```

Now we need to capture the value that comes through each of the broadcasters and passed that to the listener, to do that we simple write a new listner for each of the broadcaster to describe a new behavior to finally call the original listener 

```javascript
broadcaster1(value => {
    // describe some logic or behavior 
    listener(value)
})
broadcaster2(value => {
    // describe some logic or behavior 
    listener(value)
})
```

We mentioned that the idea of the `and` behavior is to pass the value from both broadcaster to the `listener` as an array,*or group the values together*, to implement that requirement we will add a `buffer` logic.
Buffer is just an auxiliary variable that will hold the data created for each broadcaster to enable the listener to read it and sent it back.
We will add two buffers, one for each broadcaster, each broadcaster will push data to the buffer each time is triggered and then will check if there is data in the partner buffer to then group the data and send it to the listener.

```javascript
let zip = curry(( broadcaster1, broadcaster2, listener) => {
    let buffer1 = []
    broadcaster1(value => {
        buffer1.push(value)
        if(buffer2.length) {
            listener([buffer1.shift(), buffer2.shift()])
        }
    })
    let buffer2 = []
    broadcaster2(value => {
        buffer2.push(value)
        if(buffer1.length) {
            listener([buffer1.shift(), buffer2.shift()])
        }
    })
})
```
Each broadcaster check the buffer of the partner and if there is any data there will send it to the buffer. We use the method [`Array.shift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) to retrieve the oldest value of each buffer and at the same time clear both of them.

> 🔑 This zip behavior is a way of using these two buffers together. If either of the buffers had values inside of it, they will be pushed out into a listener the next time an event came through

## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/zip/src/index.js)

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/egghead-match-function-requirements-with-lodash-partial-and-flip)
📹 [Go to Next Lesson](https://egghead.io/lessons/egghead-pass-an-array-to-a-callback-with-a-forof-function)


