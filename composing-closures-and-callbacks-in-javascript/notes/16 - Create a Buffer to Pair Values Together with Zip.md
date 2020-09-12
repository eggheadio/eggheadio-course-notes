# Lesson 16 - Create a Buffer to Pair Values Together with Zip

Create a broadcaster that can group two values together, the function will take:

- Two broadcasters as arguments
-  Returns a function that takes a listener
	-  This function will return an array containing the values of both broadcasters

We are using the `curry` method from `lodash` to build this function.

> Note: [Read the lesson 14 notes]() on using curry if you need a reminder of what curry does

```javascript
let zip = curry((broadcaster1, broadcaster2, listener)) {
	broadcaster1(listener)
	broadcaster2(listener)
}
```

When building broadcasters we probably want to do something inside it, before passing the value to the listener.

So we can write a new listener called `value` to do something and then return it

```javascript
let zip = curry((broadcaster1, broadcaster2, listener)) {
	broadcaster1(value => {
		// Things we want to do
		listener(value) // this will be returned
	})
	broadcaster2(listener)
}

```

The `broadcaster1` might look different than `broadcaster2`, but they are both doing the same. 

**Why?**

- On `broadcaster2` we can't do anything with the value being passed as a listener.
- By passing a value to `broadcaster1` first, we are intercepting the value so we can do something before returning it back with `listener(value)`

## Using Buffers

We can create a buffer for each of our broadcasters by creating an array for each of them.

**Why?**

We want to create buffers, because our zip function is grouping the two broadcasters together and sending them at the same time.


```javascript
let zip = curry((broadcaster1, broadcaster2, listener)) {
	let buffer1 = []
	broadcaster1(value => {
		buffer1.push(value) // add to buffer

		listener(value)
	})
	
	let bugger2 = []
	broadcaster2(value => {
		buffer2.push(value) // add to buffer
		
		listener(value)
	})
}

```

Now that we have our buffers and we are adding values to them we need to do a two things:

- Check the lenght of each buffer
	- We do this so we can let the one with more values catch up
- Get the last value of each buffer
	- We can get the last value of the array by using the `Array.prototype.shift()` method

```javascript
let zip = curry((broadcaster1, broadcaster2, listener)) {
	let buffer1 = []
	broadcaster1(value => {
	
		if (buffer2.lenght) { // Does our buffer has values in it?
			listener([buffer1.shift(), buffer2.shift()]) // Return the last values of the two buffers
		}

	})
	
	let bugger2 = []
	broadcaster2(value => {
		if (buffer1.lenght) { 
			listener([buffer1.shift(), buffer2.shift()])
		}
	})
}
```


**Stopping the buffer**

It's a good idea to implement the `cancel` method on our zip function in case we need to cancel the running code at any time.

```javascript
let zip = curry((broadcaster1, broadcaster2, listener)) {
	let buffer1 = []
	let cancel2 = broadcaster1(value => {
	
		if (buffer2.lenght) { // Does our buffer has values in it?
			listener([buffer1.shift(), buffer2.shift()]) // Return the last values of the two buffers
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

Let's take a look at the code of [lesson x]()

```javascript
let clickAndTick = zip(
	addListener("#button", "click")
	createInterval(1000)
)
```

If we call the function `clickAndTick` it will run normally:

```javascript
clickAndTick(value => {
	console.log(value) // This will be logged into the console
})
```

To cancel the function we need to return `clickAndTick`

```javascript
let cancelClickAndTick = clickAndTick(value => {
	console.log(value) // We cancelled the function, nothing is logged
})
```

### Use Case

Let's assume you are writing a chatbot for Twitch. Your bot will trigger animations depending on two commands:

- command `!hello` will trigger an animation showing a hand waving
- command `!thumbsup` will trigger an animation showing thumbs up

If you have a lot of people triggering animations, a lot of these animations won't play because when an animation is playing it won't trigger others.

But if you use buffers, you could keep a queue of commands and iterate over each command, displaying each animation in time.