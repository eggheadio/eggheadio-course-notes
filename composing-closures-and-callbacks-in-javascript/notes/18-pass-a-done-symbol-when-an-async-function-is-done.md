# Pass Done Symbol when an Async Function is Done

*[📹 Video](https://egghead.io/lessons/egghead-pass-a-done-symbol-when-an-async-function-is-done)**

We should pass a key of done to our functions to make sure that our buffers don't keep growing.

- In the example: We are pushing values every 10th of a second, filling out one of the buffers while the other was done and remained empty

The best way to send a done key to an interable is by using `Symbol("done")`

**Why?**

By using `Symbol.("done")` it makes sure that this value is unique.

**How?**

We can add the `Symbol` on a variable

```javascript
let done = Symbol("done") // Become unique value

```

Then use that to pass it to a listener. Let's get our `forOf` function that we created on the [previous lesson]()

```javascript
let forOf = curry((iterable, listener) => {
	let id = setTimeout(() => { // set id so we can cancel
		for (let i of iterable) {
			listener(i)
		}
		listener(done) // Pass unique symbol to cancel buffer
	}, 0) 
	
	return () => {
		clearTimeout(id)
	}
})

```

Now if we run the `zip` function, the buffer will stop after we received the done symbol.

## Canceling 

We probably don't care about getting back the done symbol, so we can refactor the `zip` function to cancel both broadcasters if we return done.

**The Return of of zip**

Since we want to cancel both broadcasters at the same time, we can

- Create a functinon that calls both `cancel1` and `cancel2`
- return that function to cancel both at the same time

**Before**

```javascript
let zip = curry((broadcaster1, broadcaster2, listener)) {
	let buffer1 = []
	let cancel2 = broadcaster1(value => {
	
		if (buffer2.lenght) {
			listener([buffer1.shift(), buffer2.shift()]) 
		}

	})
	
	let bugger2 = []
	let cancel2 = broadcaster2(value => {
		if (buffer1.lenght) { 
			listener([buffer1.shift(), buffer2.shift()])
		}
	})
	
	return () => {
		cancel1()
		cancel2()
	}
}
```

**After**

```javascript
let zip = curry((broadcaster1, broadcaster2, listener)) {
	let cancelBoth // We need to declare cancelBoth before we can use it
	let buffer1 = []
	let cancel2 = broadcaster1(value => {
	
		if (buffer2.lenght) {
			listener([buffer1.shift(), buffer2.shift()]) 
		}

	})
	
	let bugger2 = []
	let cancel2 = broadcaster2(value => {
		if (buffer1.lenght) { 
			listener([buffer1.shift(), buffer2.shift()])
		}
	})
	
	cancelBoth = () => {
		cancel1()
		cancel2()
	}
	
	return cancelBoth
}
```

So now we can check in a buffer, if the value received is the symbol `done`

- If value is not the symbol `done`
	- Keep iterating
- If value is symbol `done`
	- Call `cancelBoth()` to cancel both broadcasters

```javascript
let zip = curry((broadcaster1, broadcaster2, listener)) {
	let cancelBoth 
	let buffer1 = []
	
	let cancel2 = broadcaster1(value => {
	
		if (buffer2.lenght) { 
			listener([buffer1.shift(), buffer2.shift()]) 
			
			if (buffer1[0] === done || buffer2[0] === done) {
				cancelBoth()
			}
		}

	})
	
	let bugger2 = []
	let cancel2 = broadcaster2(value => {
		if (buffer1.lenght) { 
			listener([buffer1.shift(), buffer2.shift()])
		}
	})
	
	cancelBoth = () => {
		cancel1()
		cancel2()
	}
	
	return cancelBoth
}
```


Let's break down that if statement:

```javascript
	if (buffer1[0] === done || buffer2[0] === done) {
		cancelBoth()
	}
```

The if statement checks if:

- The value at index 0 is the `Symbol` done on buffer1

or

- The value at index 0 is the `Symbol` done on buffer 2

If that is the case, we will call `cancelBoth()` to cancel both broadcasters.

>Note: The buffers are Arrays and we are always getting the last value of the array, so the Symbol done will always be the last thing added and that means that the buffer will become shorter and shorter until the only thing inside is the `Symbol` done at index 0.

---

- [MDN Iteration protocols documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) shown on the video

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/egghead-pass-an-array-to-a-callback-with-a-forof-function)
📹 [Go to Next Lesson](https://egghead.io/lessons/egghead-create-an-operator-function-to-modify-behaviors)