# Defining the broadcaster and Listener Relationship

**[📹 Video](https://egghead.io/lessons/egghead-defining-the-broadcaster-and-listener-relationship)**

There are two concepts that will be used through the course, **listener** and **broadcaster**. This concepts holds a strong relationship.

This are common names used to define the behavior of this functions.
* **listener** refers to a callback function, a function meant to be passed as argument to another function
* **broadcaster** refers to a function that accepts a Listener (a callback) and triggers it to perform certain task.

In this scenario, the **broadcast** function is the one that initiate the data flow. The broadcaster starts the communication performing a task and calling the **listeners** asking them to perform certain task.
🔑 In general words, the **listeners** function are not meant to be used directly.

```javascript
let listener = value => {
    console.log(vale)
}

let broadcaster = callback => {
    callback(1)
    callback(2)
    callback(3)
}

broadcaster(listener)
```

## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/broadcaster-listener-relationship/src/index.js)
