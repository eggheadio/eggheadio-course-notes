# Can a Function be a Closure and a Callback?

*[📹 Video](https://egghead.io/lessons/egghead-can-a-function-be-a-closure-and-a-callback)*

We can create a function that can be both

- A closure
- A callback

```javascript
let i = 0

let callback = event => {
    console.log(i++)
}

let anotherFunction = fn => {
    fn()
    fn()
    fn()
}

anotherFunction(callback)

```

We can see that `callback` is being passed to `anotherFunction` making it 

- a callback because is being passed as an argument to another function
- a closure because it's capturing the variable `i` outside of it


---

📹 [Go to Previous Lesson](https://egghead.io/lessons/egghead-what-is-a-callback-in-javascript)
📹 [Go to Next Lesson](https://egghead.io/lessons/egghead-compose-closures-and-callbacks-to-create-new-functions)
