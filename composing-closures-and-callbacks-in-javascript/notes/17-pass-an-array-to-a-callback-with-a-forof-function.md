# Pass an array to callback with forof function

*[📹 Video](https://egghead.io/lessons/egghead-pass-an-array-to-a-callback-with-a-forof-function)*

What is an iterables?

- Anything that we can put inside a for of loop
	- An Array
	- A String
	- Anything that implemented the method `Symbol.iterator`

> Note: You can learn more about iterables on John's lesson [Generators in Javascript](https://egghead.io/playlists/generators-in-javascript-4b5f)

We can create a broadcaster that iterates throught a String

```javascript
let forOf = curry((iterable, listener) => {
	for (let i of iterable) {
		listener(i)
	}
})

```

Now we can use our `zip` function created on the [previous lesson](https://egghead.io/lessons/egghead-create-a-buffer-to-pair-values-together-with-zip) and delay the log by using the `createInterval` to delay the logging.

```javascript
let typeGreeting = zip(
	createInterval(100),
	forOf("Hello, John")
)
```

We just need to call `typeGreeting` to log each character inside the string `Hello, John`

```javascript
typeGreeting(value => {
	console.log(value)
})
```


## Cancelling the function
 Canceling `typeGreeting` doesn't work since our `forOf` function doesn't implement the cancel method.
 
 To cancel the `forOf` loop we need to do a little trick with the `setTimeout()` method.
 
 -  Use `setTimeout()` to  run on after 0 seconds
	 -  Add the for loop inside this method to run after 0 seconds
 -  use `ClearTimeout` to cancel the `setTimeout` so the code inside it won't run
 
 ```javascript
let forOf = curry((iterable, listener) => {
	let id = setTimeout(() => { // set id so we can cancel
		for (let i of iterable) {
			listener(i)
		}
	}, 0) // Run after 0 seconds
	
	return () => {
		clearTimeout(id)
	}
})

```

> Note: You can read more about how to cancel a timeout by watching the [ lesson 9 - Create a Function to Configure setTimeout](https://egghead.io/lessons/egghead-time-is-a-hidden-variable-in-javascript-f724e184), or [read the notes](./9-create-a-function-to-configure-settimeout.md).


---

📹 [Go to Previous Lesson](https://egghead.io/lessons/egghead-create-a-buffer-to-pair-values-together-with-zip)
📹 [Go to Next Lesson](https://egghead.io/lessons/egghead-pass-a-done-symbol-when-an-async-function-is-done)