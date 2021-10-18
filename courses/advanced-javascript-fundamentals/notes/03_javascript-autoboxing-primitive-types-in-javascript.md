# [Autoboxing Primitive Types in JavaScript](https://egghead.io/lessons/javascript-autoboxing-primitive-types-in-javascript)

"Everything in JavaScript is an Object" is something that you've probably been told sometime in your career. As was discussed in the previous lesson, [Working with Primitive Types](https://egghead.io/lessons/javascript-working-with-primitive-types), this is clearly not true. So what is really happening?

## Method used on Primitive Type
```js
const str = 'foo'

console.log(typeof str) // string
console.log(str.length) // 3
```

We should see an error when we try to use a 'dot' method on a string right? By rule, Primitive Types don't have any properties or methods on them. But as seen above, `str.length` returns a number, which means we just used a method on a string. 🧐

JavaScript uses a process called Autoboxing. **Autoboxing wraps Primitive Types in an object so that we have the convenience of objects when dealing with Primitive Types in JavaScript.** 

When a Primitive Type is wrapped, it will connect that Type with a built-in object prototype that corresponds with the Primitive Type. This is where you get `string.length`, `string.includes`, or `string.toUpperCase`. ([Methods documented on MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype)).

But because of autoboxing we treat primitive types like objects due to JavaScript wrapping those primitives into objects, now you can see why this misconception has started and is here today.
