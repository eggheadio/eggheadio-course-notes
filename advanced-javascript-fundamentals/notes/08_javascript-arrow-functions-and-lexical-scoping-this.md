# [Arrow Functions and Lexical Scoping "this"](https://egghead.io/lessons/javascript-arrow-functions-and-lexical-scoping-this)

`this` is not respected as a keyword in arrow functions, it is treated as any other variable.

## `this` with a function declaration
```js
const person = {
  firstName: 'zac',
  getName: function() {
    console.log(`${this.firstName} is my first name`)
  }
}

setInterval(person.getName, 3000)
```

When you use a `setInterval`, you'll notice that `getName` is not being invoked. It is invoked internally when `setInterval` is ran. The context that `setInterval` is run in is `window` which has no `firstName` so you'll get `undefined` back even if you expected `zac` here.

## `this` with a function declaration
```js
const person = {
  firstName: 'zac',
  getName: function() {
    console.log(`${this.firstName} is my first name`)
  }
}

setInterval(person.getName, 3000) // undefined is my first name
```

## arrow functions don't solve this problem
```js
const person = {
  firstName: 'zac',
  getName: () => {
    console.log(`${this.firstName} is my first name`) // undefined is my first name
  }
}

setInterval(person.getName, 3000)
```

Arrow functions don't immediately solve this problem for you. The answer lies in Lexical Scope.

**Lexical scope references author time of our code and not run time and creates a new scope for every function.**

In other words, Lexical scope is the next non-arrow function scope at author time.

The opposite of lexical scope is the `this` keyword, it is dynamic and absolutely depends on the run time to determine what it's value is.

The `this` in `getName` didn't take `firstName` in the `person` object because `person` is an object and not a function scope. `this` remains `undefined`. The next scope is the globabl `window` object which doesn't have a `firstName` property on it.

```js
const person = {
  firstName: 'tyler',
  getName() {
    return () => {
      console.log(`${this.firstName} is my first name)
    }
  }
}

setInterval(person.getName(), 3000)
```

To fix the Lexical Scope issue, you can wrap the arrow function itself in a function context. Above, `getName` is now the Lexical Scope of the arrow function so you can invoke `getName` in the `setInterval` and `this.firstName` will have a defined value which is set on the `person` object.
