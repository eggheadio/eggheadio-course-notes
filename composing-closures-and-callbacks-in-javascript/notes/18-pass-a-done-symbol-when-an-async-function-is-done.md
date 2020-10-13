# Pass a Done Symbol when an Async Function is Done 

**[📹 Video](https://egghead.io/lessons/egghead-pass-a-done-symbol-when-an-async-function-is-done)**

Is a good practice to mark when an loop finish it works, there is a common pattern used in the [iterator protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#Built-in_iterables) that is using a `done` key that can be true or false to let the caller that the iteration was done. Currently we done have that behavior implemented and we can easily notice that by not having this we can create a problem.

The `typeGreeting` function calls a `setInterval` that is pushing data into the buffer of the `zip` function every 10th of a second, by logging that buffer the problem makes visible, the interval is not stopping even tho, the other broadcaster, the `forOf` function was done.

The Iterator protocol is using objects as the  `value` where one of the key is the boolean `done`. In this implementation we are just passing the  `value` so we can use that to just pass a value of `done` when the loop ends.

Here we will introduce the usage of `Symbol` as a way to hold an unique value. 
[`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) is a primitive data type, that has static properties that expose some built-in objects. Is similar to the object class.
We will use `Symbol` here to guarantee that the value is unique, like a constant.

```javascript 
let done = Symbol('done')
```

Now we can use this Symbol to mark when the loop ends.

```javascript
let forOf = curry((iterable, listener) => {
    let id = setTimeout(() => {
        for(let i of iterable) {
            listener(i)
        }
        listener(done)
    }, 0)
    return () => {
        clearTimeout(id)
    }
})

```

Now we need to update the  `zip` broadcaster to check for the `done` symbol and stop the buffering. To do that we will add some conditional logic. We will heck if the buffers have the `done` Symbol and if that is true, will shutdown the broadcaster. 
We already have a way to cancel the broadcasters action, we are returning the cancel function, we need to move that up in the code to be able to call it when the condition of `done` is true. 

We implement the cancellation of both broadcasters to allow the caller of the `zip` function to add an `iterable` in any place in the argument list.

We also add a `done` value to the listener before cancel both broadcasters to enable any chained listener to get the `done` to be used.


```javascript
let zip = curry(( broadcaster1, broadcaster2, listener) => {
    let cancelBoth
    let buffer1 = []
    let cancel1 = broadcaster1(value => {
        buffer1.push(value)
        if(buffer2.length) {
            listener([buffer1.shift(), buffer2.shift()])
            if(buffer1[0] === done || buffer2[0] === done) {
                listener(done)
                cancelBoth()
            }
        }
    })
    let buffer2 = []
    let cancel2 = broadcaster2(value => {
        buffer2.push(value)
        if(buffer1.length) {
            listener([buffer1.shift(), buffer2.shift()])
            if(buffer1[0] === done || buffer2[0] === done) {
                listener(done)
                cancelBoth()
            }
        }
    })
    cancelBoth = () => {
        cancel1()
        cancel2()
    }
    return cancelBoth
})
```

Finally we can change the implementation of our final callback to handle the `done` value in a nicer way. In this case, we will show a message

```javascript
let typeGreeting = zip(
    createInterval(100),
    forOf("Hello, John")
)

let cancelTypeGreeting = typeGreeting(value => {
    if(value === done) {
        console.log('Shutting down')
        return
    }
    console.log(value)
})
```

## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/returning-functions/src/index.js)

