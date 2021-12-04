# [Private Variables with IIFEs](https://egghead.io/lessons/javascript-private-variables-with-iifes)

Immediately Invoked Function Expressions are `functions` that are called right after they are declared they are put in the global space like the `Window` object. However IIFEs (Immediately Invoked Function Expressions) are not.

What makes an IIFE spacial is the wrapping of the function within the open/close parenthesis (grouping operator) which makes it an expression because the groupoing operator returns what is inside of the parenthesis.

```js
js(function findName() {
return 'hello'
})()
```
Because it is an expression you cannot access the IIFE in the global namespace such as variables or functions within the IIFE. Anything defined within the grouping operator is not accessible from outside and act like a private methods or variables.

IIFEs are used a lot when working with code that is private and we dont want other scopes to access its state. We can also create IIFEs with an arrow function and the same scoping rules apply. 

```js
js(() => 'hello')()
```
