# Create an Operator Function to Modify Behaviours

*[📹 Video](https://egghead.io/lessons/egghead-create-an-operator-function-to-modify-behaviors)**



*Operators are functions that modify behaviours.*

Let's grab the `typeGreeting` function from [lesson 17](https://egghead.io/lessons/egghead-pass-an-array-to-a-callback-with-a-forof-function) and console log either

- The value passed is the `Symbol` done
- The character inside the string passed to the `forOf` function


```javascript
string = ""

typeGreeting(value => {
	if (value === done) {
		console.log("Shutting Down") // Received Symbol done
		return
	}
	
	console.log(string += value[1]) // Remember value is an array containing [interval, character]
})
```

We can now create our operator to modify this code:

```javascript
let modify = curry((broadcaster, listener) => {
	let string = ""
	
	return broadcaster(value => {
		if (value === done) {
			listener(done)
			return
		}
		
		listener(string += value[1])
	})
})
```

> Note: Since the operator function takes a listener, we don't need to log anything since the listener callback is already doing that.

## Understand what happened so far

Since the lessons are getting more and more complex, I hope this image will help you understand what is happening so far.

![[19-operators.png]](../images/19-operators.png)

On any function where we are using a broadcaster and a listener we can return the broadcaster with a new listener to do something with those values - similar to what we have done on [Lesson 16](https://egghead.io/lessons/egghead-create-a-buffer-to-pair-values-together-with-zip)

Things we can do with this modify pattern:

- Capture variables
- Delaying things in time
- Only allowing certain values
- Mapping to different values

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/egghead-pass-a-done-symbol-when-an-async-function-is-done)
📹 [Go to Next Lesson](https://egghead.io/lessons/egghead-transform-values-with-a-map-operator)