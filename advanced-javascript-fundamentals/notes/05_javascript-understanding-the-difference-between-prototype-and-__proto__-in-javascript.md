# [Understanding the difference between .prototype and .__proto__ in JavaScript](https://egghead.io/lessons/javascript-understanding-the-difference-between-prototype-and-__proto__-in-javascript)

## Add property to function
```js
function foo() {}

foo.firstName = 'zac'

console.log(foo.firstName) // zac
```

**Functions are first class objects in JavaScript which means they can have their own properties and methods like any other plain object could.** You wouldn't typically find people adding properties to a function though, this is for demonstration purposes.

Every time a function is created, JavaScript will add a property to that function called `prototype`. This `prototype` property has two things on it. a constructor property which points back to the function itself and the `__proto__` property.

_Why does the `prototype` property exist if we already have __proto__?_ 
_What purpose does `prototype` serve?_

This `prototype` property is not used in the prototype chain look-up if we were to "dot" onto the `foo` function when looking up a property.

`__proto__` is also automatically created when a function is created and that is what JavaScript will use to look up methods it doesn't find immediately.

##
```js
function foo() {}

foo.prototype.test = 'hello world'

console.log(foo.prototype) // foo { test: 'hello world'}

const name = new foo()

console.log(name.test) // hello world
```

`name.test` is found on the `name` object because it is a new instance of the `foo()` function. Whatever `prototype` that currently lives on a function when a new instance is created with the `new` keyword will also be present on that new variable (`name`) as well.

_Is the `prototype` that's passed to the new instance passed by reference? In other words, can it be mutated?_
## Origininal prototype is immutable
```js
$ name
  foo {}
    __proto__: 
      test: "hello world"
      constructor: ƒ foo()
      __proto__: Object
$ name.test = "hey"
  "hey"
$ name
  foo {test: "hey"}

$ foo.prototype.test
  "hello world"
```

The keyword `Object` is actually a function in JavaScript. `Array`, `Map`, and `Set` also have global functions like `Object`.

These global functions are connected to the `__proto__` property to every instance of the object it corresoponds to. These functions are where many methods you use actually live.

In other words, you're using prototype inheritance every time you use any kind of object within your code.

## Global prototype function is equal to the instance method
```js
Array.prototype.map === [].map // true
```
