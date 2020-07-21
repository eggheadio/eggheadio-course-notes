# [Understanding Prototypal Inheritance within JavaScript](https://egghead.io/lessons/javascript-understanding-prototypal-inheritance-within-javascript)

ProtoTypes are the way that JavaScript powers inheritance. This mimicks some behavior that you would expect out of a class in another language like C# or Java, but JavaScript does not have classes.

JavaScript adds a `__proto__` property on your object that links other methods and properties (which themselves can be objects).

Open up your console and create an empty object `let a = {}`. If you log that variable, you'll see that `__proto__` was automatically added even though the object is 'empty.'

**This __proto__ key is also called Dunder proto.** 

That Dunder proto property is what prototypes and inheritance is in JavaScript.

Every time you work with an object within JavaScript, as long as you don't mutate it later, will automatically be linked through this Dunder proto property to the global object prototype.

## toString an Empty Object
```js
const a = {}

a.toString()

console.log(a) // "[object Object]"
```

Even though this object is empty, when I call `toString` on `a`, JavaScript will first look on the object for the `toString` method. When it doesn't find that method there, it will step into `__proto__` and look for `toString` inside that object. In this case, it finds the `toString` method and calls it.

You could think of this method call as being called like this: `a.__proto__.toString()`.

## Nested Dunder Properties in Objects
```js
const a = {}

const b = Object.create(a)

console.log(b)
/*
{}
  __proto__:
    __proto__: Object
*/
```

`Object.create` will create an object and set the first argument that you pass it as the `__proto__` for that variable, in this case, the object `b` will have the empty object `a` set as its prototype.

You can see from above that prototypes can be nested. In this case, we have an empty object (`b`), it's prototype is also empty because it was set to `a`, and then `a`'s prototype is set to the Global Object ProtoType that all objects are given when no prototype is specified or mutated otherwise. 

## b prototype returns true
```js
const a = {}

a.toString = function() { return true }

const b = Object.create(a)

console.log(b.toString()) // true
```

The nearest prototype property wins when JavaScript is looking for a function. In this case, `b` is looking for a `toString` property. It doesn't find it in it's own object so it starts looking up the chain. The object `a` is set as the next prototype and it has a `toString` function. That function gets called. It doesn't matter that the Global Object Prototype has a `toString` property because JavaScript quits looking up the chain as soon as it finds something that matches.

## b prototype in the console
```js
console.log(b)
/*
{}
  __proto__:
    toString: f()
    __proto__:
      constructor: f Object()
      toString: f toString()
*/
```

A method call will return `undefined` if it never finds the method called after going all the way up the prototype chain.

All types of objects within JavaScript have their own global built-in prototype objects that get connected whenever a new instance is created.

**Plain Objects, Arrays, Maps, Sets, and Functions have their own Global Prototype Object.**
