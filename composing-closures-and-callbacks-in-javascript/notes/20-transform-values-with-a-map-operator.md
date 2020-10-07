# Transform Values with a Map Operator 

**[📹 Video](https://egghead.io/lessons/egghead-transform-values-with-a-map-operator)**

Now we can create a new operator that will add a new behavior to oru typing function. 
The new operator will be named  `map` and will apply a simple `toUpperCase()` to the incoming value. This is similar to the previous `modify` operator.

```javascript
let map = curry((broadcaster, listener) => {
    return broadcaster(value => {
        if(value === done) {
            listener(done)
            return 
        }
        listener(value.toUpperCase())
    })    
})
```

we can wrap our  `typeGreeting` call with this new operator 

```javascript
let typeGreeting = map(modify(zip(
    createInterval(100),
    forOf("Hello, John")
)))
```

But, this is lot of copy & paste, what happen if we want to implement another type of transformation to the value?, we can make this `map` operator more reusable by adding a configuration parameter to it.
Let's add a new parameter on front of it that we name `transform` because that is the behavior that `map` is capturing. and then just wrap the `value` that is passed down to the `listener` with the `transform` function. 

```javascript
let map = curry((transform,broadcaster, listener) => {
    return broadcaster(value => {
        if(value === done) {
            listener(done)
            return 
        }
        listener(transform(value))
    })    
})
```

Now we can define the `transform` parameter to be whatever function we want, just be aware that the transformation is being done with the `value` that is being passing through.


```javascript
let typeGreeting = map((value) => value.toUpperCase(), modify(zip(
    createInterval(100),
    forOf("Hello, John")
)))
```
Now with this implementation we can add any transformation to the chain like using some `lodash` utilities like `toLower`

```javascript
c
```

This pattern that wraps our broadcaster is what we will call through the lessons as **operator** and as we did with the broadcasters, is a ✅ good practice to move this to its own module.



## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/returning-functions/src/index.js)

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/egghead-create-an-operator-function-to-modify-behaviors)
📹 [Go to Next Lesson](https://egghead.io/lessons/egghead-prevent-certain-values-with-a-filter-operator)

