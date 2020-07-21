# [Use Implicit and Explicit Coercion in JavaScript](https://egghead.io/lessons/javascript-use-implicit-and-explicit-coercion-in-javascript)

Coersion is the changing of types from primitive to primitive or object to primitive.

In the example below we have a variable `str` with the value of 2. Our goal is to return the variable `str` as a type of `String`. What is happening here is called implicit coercion.

```js
const someNumber = 2
const str = `Hello, I have ${someNumber} eyes`

console.log(str)
```

It is implicit because we are letting JavaScript coerce the number into a string rather than us providing a string by default. Implicit coercion is common and at times considered bad practice because it can be difficult to catch potential bugs.

Below we have another example below. `Array.lenght` is returning a number but the if check requires a `Boolean`. We rely on JavaScript to implicitly coerce our number 0 which becomes a false `Boolean`.

```js
cont arr = []

if(arr.length) {
}

```

There is a difference when working with double equals (==) or triple equals (===). The == will try to coerce implicitly the value to compare first to try to get them to the same type. Once they are the same type then the values will be compared. With === there will no be coercion and values will be compared by type and value

```js
console.log('1' == 1) //true

console.log('1' === 1) //false
```

One group believes that developesr should not try to coerce code and make everything the same type. However, another goup believes coercion is highly valuable and should be used. ONe thing is for sure, it is very difficult to avoid all types of implicit coercion.

When primitive types are autoboxed into an object JavaScript will coerce the value into an object. This proves that it is very difficult to avoid imlicit coercion all the time.

```js
const str = 'hello'

console.log(str.length)
```
Using the original template string example we can show the extra work it will take to avoid implicit coercion. We first explicitly coerce our number into a string so it is ready to be injected into the template string.

```js
const someNumber = String(2)
const str = `Hello, I have ${someNumber} eyes`

console.log(str)
```

As a summary, explicit coercion happens when we are explicitly coercing using built-in methods like strings, number, Boolean, many of the parse methods like parseInt and other methods, instead of relying on JavaScript to just do it for us.
