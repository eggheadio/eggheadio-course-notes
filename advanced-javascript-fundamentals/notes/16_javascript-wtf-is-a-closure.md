# [WTF is a Closure?](https://egghead.io/lessons/javascript-wtf-is-a-closure)


In order to understand closure we are going to examine some code. In the example below we have a `parent` function that has a variable `par` and we return another function called `child` which also has a variable inside called `chi`.

Inside the `child` function we are going to `console.log` the global variable `workshop`, the parent variable `par`, and the child variable `chi`. With the declaration of `me` we will invoke the parent function when we invoke the `me` variable.

```js
const workshop = 'JavaScript'

function parent() {
  const par = 'tyler'
  return function child() {
    const chi = 'clark'
    console.log(workshop, par, chi)
  }
}

const me = parent()

me()
```

A closure is an innner function that has access to its lexican scopes, which includes its own scope, its parent scope, and the global scope. The `child()` function is a closure and it has access to its own `const`, the parent `const`, and the global `const`.


When code `const me = parent()` is executed the `parent` function still retains access to the `parent`'s const.

Closures do not close over a value, they only close over variables. If the global `const` value changes, a child function reference to it will change as well. Closures only keep their connection to variables alive even though its surrounding function executes.

Closures also make variables privite from the outside scope. There is no wa to access the `const` `chi` from anywhere else except from inside its function, this hides implementation details which change while programming towards interfaces.

We use closures almost everyday, a common implementation of a clousre is a callback function like `array.prototype.map` function.

```js
[1].map((a)) => a)
111
```

Its callback is a closure because it's a nested function within a function that has access to its parent's scopes.
