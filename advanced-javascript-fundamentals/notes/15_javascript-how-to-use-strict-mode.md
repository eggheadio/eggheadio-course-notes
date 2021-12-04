# [How to use 'strict mode'](https://egghead.io/lessons/javascript-how-to-use-strict-mode)

Strict mode is also known as the opposite of sloppy mode. It has different semantics from normal code, for example:

* It does not allow global var // var name is not defined

To enter strict mode, we use "use strict" at the top of our file. Compilers like Bable add this automatically to your code. ES6 JavaScript modules like import and export add this automatically to the code as well.

Strict mode also help us with potential bugs such as trying to mutate a non-writable object property. In the example below we try to mutate a non-writable property. When we try to do so we will get an `Uncaught TypeError`

```js
'use strict'

var obj = {}

Object.defineProperty(obj, 'first', { value: 'clark', writable: false})
name.first = 'tyler'

>Uncaught TypeError: Cannot create property 'first'
```

In the example below `sloppy mode` allows to use reserved keywords such as `undefined` and `Infinity` as var names.

```js
var undefined = 5

var Infinity = 5
```

However, in `strict mode` we get a `Uncaught TypeError`

```js
'use strict'

var undefined = 5

var Infinity = 5

>>Uncaught TypeError: Cannot create property 'first'
```

In `strict mode` we get an error when we try to use the same name in parameters, and the example below demonstrates that we can scope `strict mode` to a function block. 

```js
function myName(first, first) {
  'use strict'
 return first
}

>Uncaught SyntaxError: Duplicate parameter name not allowed in this context
```

Lastly, one of the most common errors that `strict mode` tries to elimiate is the attempt to access the `window` object when using the `this` keyword as we can se blelow. Outside of `stict mode` when we return this we get the `window` object, in strict mode, we get `undefined`. 

```js
function myName(first) {
  return this
}
myName() // Window Object
```

```js
'use strict'
function myName(first) {
  return this
}
myName() // undefined
```
