# Create an Operator Function to modify behaviors

**[📹 Video](https://egghead.io/lessons/egghead-create-an-operator-function-to-modify-behaviors)**

In this lesson we can see the birth of a new pattern. 
The requirement is to create a typing behavior: log the string to the console as it's being typed. To do that we need to take a string and add the values to it. Instead of just logging out the value fo the listener in our `typeGreeting` broadcaster we will log the  `string +=` the letter that comes into the value.

```javascript
let cancelTypeGreeting = typeGreeting(value => {
    let string = ""
    if(value === done) {
        console.log('Shutting down')
        return
    }
    console.log(string += value[1])
})
```
Instead of putting the behavior inside the final callback we can create a reusable piece of code that can be used to wrap any broadcaster.
We have a well defined pattern to create broadcasters, every function that we want to behave as a broadcaaster take a listener as their final argument and returns a cancellation function to stop the behavior. Now we can create a new pattern that involve the mix of a broadcater and a listener. Again we will use curry to create this new function that we call `modify`

```javascript
let modify = curry((broadcaster, listener) => {
    //define the new behavior     
})
```

Through the lessons we notice that in order to capture some behavior or re-define it we need to create a new listener that can take the value and do something with it and then passing it down the the listener defined in the arguments of the function.

```javascript
let modify = curry((broadcaster, listener) => {
    return broadcaster(value => {
        //this is the new listener to define the new behavior
        listener(value)
    })    
})
```

Our new behavior is just append the letters that come through to a string and send that string back to the listener.

```javascript
let modify = curry((broadcaster, listener) => {
    let string = ""
    return broadcaster(value => {
        if(value === done) {
            listener(done)
            return 
        }
        listener(string += value[1])
    })    
})
```

Now since we wrap our `typeGreeting` with our new `modify` opeator 

```javascript
let typeGreeting = modify(zip(
    createInterval(100),
    forOf("Hello, John")
))
```

We can just keep our old code that define the listener for the `typeGreeting` function as a function that just console.log the value that comes in. This `value`  is the one created by the `modify` operator it.


```javascript
let cancelTypeGreeting = typeGreeting(value => {
    let string = ""
    if(value === done) {
        console.log('Shutting down')
        return
    }
    console.log(string += value[1])
})
```

If you check the [previous lesson](18-pass-a-done-symbol-when-an-async-function-is-done.md) you can see that our call to `typeGreeting` is still the same.

> 🔑Any function we create where we pass in a broadcaster and a listener, we can then override the behavior by returning the broadcaster with a new listener, taking those values, and doing something different with them.


## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/operator/src/index.js)

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/egghead-pass-a-done-symbol-when-an-async-function-is-done)
📹 [Go to Next Lesson](https://egghead.io/lessons/egghead-transform-values-with-a-map-operator)


