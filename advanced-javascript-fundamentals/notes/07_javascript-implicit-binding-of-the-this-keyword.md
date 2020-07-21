# [Implicit Binding of the "this" Keyword](https://egghead.io/lessons/javascript-implicit-binding-of-the-this-keyword)

`this` keyword references the execution context of a function's call, which just determine how that function was called and a non-strict mode is always a reference to an object.

**`this` keyword can be different depending how the function is called.**

The context can change after you declare a function so you can't just look at the declaration to know exactly what `this` will be. You need to look at the call during runtime as well.
 
```js
const person = {
  firstName: 'zac',
  getName() {
    return `${this.firstName} is my first name`
  }
}

console.log(person.getName()) // zac is my first name
```

This is true for all functions besides arrow functions.

Three things to look for when determining `this`:
- Was the function invoked?
- How was it invoked?
- What context was it invoked in?

`getName` is invoked through implicit binding (one of three ways you can invoke a function). That means in the console log, `getName()` invokes the function. [Read Function invocation with the apply() and call() methods](https://dev.to/cesareferrari/function-invocation-with-the-apply-and-call-methods-2o8p) for more info on other ways to invoke a function.

Often times when invoking a function, you can look at the object to the left of the invocation to determine the context of the `this` keyword. In our case above, `person` is the context for `this`.

## nested object and this
```js
const person = {
  value: {
    firstName: 'zac',
    getName() {
      return `${this.firstName} is my first name`
    }
  }
}

console.log(person.value.getName()) // zac is my first name
```

When dealing with a nested object, the value of `this` will change. `this` no longer refers to `person` (because `person` is no longer directly to the left of the function invocation) but `value`. `value` is now the context, not `person`.

## move firstName out of context
```js
const person = {
  firstName: 'zac',
  value: {
    getName() {
      return `${this.firstName} is my first name`
    }
  }
}

console.log(person.value.getName()) // undefined is my first name
```

You'll see in the example above how `this` can start affecting your code. Because `value` is the context for the function call and not `person`, `this` does not have access to `firstName` when it's at the root level of the `person` object.

```js
function getName() {
  return `${this.firstName} is my first name`
}
```

_What is the `this` context for `getName` when the function is moved outside of an object?_

The object to the left is window. This is added implicitly. That's why you don't get an error when trying to access this. You'll get `undefined`. If you add a `firstName` property to `window`, you'll get that value back when accessing `this` in the function defined above (You could do that with the `var` keyword if it wasn't declared in a function scope).

## redefined getName function affects `this`
```js
const person = {
  firstName: 'zac',
  getName() {
    return `${this.firstName} is my first name`
    }
  }

const anotherPerson = {}

anotherPerson.getName = person.getName

console.log(anotherPerson.getName())
```

You might expect that `getName` here would have a `this.firstName` value of `zac` which isn't the case here.
Even though `person`'s `getName` is assigned to `anotherPerson`, `getName` is being invoked on the `anotherPerson` object so `anotherPerson` is the context of `this`. And as you can see, there is no values other than `getName` assigned to `anotherPerson`.
