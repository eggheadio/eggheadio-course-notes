# [Working with var, let, const, and block scopes](https://egghead.io/lessons/javascript-working-with-var-let-const-and-block-scopes)

Scope is what determines where/when you can access a variable or function in your code. Block scope is a scope area that is usually defined by `if`, `switch`, or loops (eg. `for` or `while`).
More on the different types of scope in Ming-Shiuan's [JavaScript: Introduction to Scope (function scope, block scope)](https://dev.to/sandy8111112004/javascript-introduction-to-scope-function-scope-block-scope-d11).

Block scope can also be defined by declaring variables within open and closed curly braces, `{ }`. This is an overload of the object literal syntax.

It's important to note, there will not be any block scope until an assignment is made within that block.

## Block scope
```js
var firstName = 'zac'
{
  var firstName = 'jones'
  console.log(firstName) // jones
}
console.log(firstName) // jones
```

Objects are not scoped, so simply looking for curlies will not completely help you when determining block scope.

Up above you can see an assignment and curlies which makes it a block scope

_Why doesn't the console logs respect the block scope then? We know it's valid._

**`var` only cares about function execution scopes, not block scopes.** The global namespace is the function execution scope for the example above so both assignments are mutating the same variable.

## Function Execution Scope
```js
var firstName = 'zac'
function foo() {
  var firstName = 'jones'
  console.log(firstName) // jones
}
console.log(firstName) // zac
foo()
```

To make the code work as we would expect it to, you can make the block scope a function and see that the `console.logs` will log out different variable values.

**`var` declarations are hoisted to the top of their execution context with an initial value of `undefined`.**

The code will look like this under the hood during execution time
## Function Execution Scope under the hood
```js
var firstName = undefined
firstName = 'zac'
function foo() {
  var firstName = undefined
  firstName = 'jones'
  console.log(firstName) // jones
}
console.log(firstName) // zac
foo()
```

Any vars declared in a global function context are placed on the `window` object.
So in the browser console, `window.firstName` will be `zac` for me.

## Block Scope with let
```js
let firstName = 'zac'
{
  let firstName = 'jones'
  console.log(firstName) // jones
}
console.log(firstName) // zac
```
**`let` scopes to block scope as well as function execution scope.**

`let` is only initialized when the parser evaluates it. It doesn't get hoisted to the top like `var` does. Finally, if we tried to re-declare let within the same scope, it would throw an error while using a var would not. 

`const` has the same rules as `let` does. 

The difference is that it `const` cannot be redefined to a different value. The thing to watch out for here is that `const` only does a shallow compare so if you change a value of a property in an object or an item in an array, `const` will not complain.

## Block Scope with const
```js
const firstName = 'zac'
{
  const firstName = 'jones'
  console.log(firstName) // jones
  firstName = 'not jones' // error!!
}
console.log(firstName) // zac
```
