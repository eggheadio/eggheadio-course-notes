# [Working with Primitive Types](https://egghead.io/lessons/javascript-working-with-primitive-types)

Within JavaScript, there's a concept of a **primitive value or a primitive data type**. You may have heard or might hear that everything in JavaScript is an object. As we look at these primitive values, we can see that this is not true. **There are in fact seven current types within JavaScript that are definitely not objects.**

## typeof operator

```js
// output of log shown as comment
console.log(typeof 'hello world') // string
console.log(typeof 1) // number
console.log(typeof false) // boolean
console.log(typeof 42n) // bigint
console.log(typeof Symbol()) // symbol
console.log(typeof null) // object
console.log(typeof undefined) // undefined
```

The difference between primitive types and Arrays or Objects is that they can't be mutated. The are immutable.

Primitive types don't have methods or properties on them either, they are not objects. They are the lowest level implementation in JavaScript.

_So why can we use methods on primitive types like string.toUpperCase?_

The `typeof` operator in JavaScript evaluates a statement to it's right and tells you what the type of that statement is. It will be a primitive or an object. 

`"Hello World"` is a `string`
`1` is a `number`
`false` is a `boolean`
`42n` is how we define `bigint` in JavaScript.

There's also another literal form for creating a symbol in JavaScript so you use `Symbol()` which is it's constructor. 

Because of a bug that hasn't been fixed in JavaScript early on, `null` will show as an object when passed in to the `typeof` operator.

`undefined` is the seventh and final primitive type.

Primitive types are treated differently than objects. First we'll see how an object can be successfully mutated.

## Mutate an Object
```js
let obj = { a : 1}

function addTwo(obj) {
  obj.a = 2
}

addTwo(obj)

console.log(obj) // {a: 2}
```

When an object is passed into a function (`addTwo(obj)`), it will be passed by memory reference. That means that we are working with the same variable. 

## Mutate a Primitive Type
```js
let num = 1

function addTwo(num) {
  num = num + 2
  console.log(num) // 3
}

addTwo(num)

console.log(num) // 1
```

This is the same situation as we had with passsing the object into the `addTwo` function but you'll see a difference in output. Because primitive types are immutable, num inside of `addTwo` will log out 3 after being changed while the original variable defined at the top of the file (see example above) remains 1.

**Primitive Types are passed by value which keeps them immutable while Objects are passed by memory reference that results in mutation.**

This is the same behavior for all Primitive types as seen below.

```js
let num = 'str'

function addTwo(num) {
  num = num + num
  console.log(num) // strstr
}

addTwo(num)

console.log(num) // str
```
