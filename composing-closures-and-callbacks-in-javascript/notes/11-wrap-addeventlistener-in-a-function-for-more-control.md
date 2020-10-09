# Wrap addEventListener in a Function for More Control

[📹 Video](https://egghead.io/lessons/egghead-wrap-addeventlistener-in-a-function-for-more-control)

Based in the same pattern used in the [lesson 9](https://egghead.io/lessons/egghead-create-a-function-to-configure-settimeout) we will create a thin wrapper around the function `addEventListener`.

[`addEventListener` ](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener) is a function that attach a function that will be call when some event happens in the related element.

To start we need an element to use with `addEventListener` for that purposes we just add a button element inside the html file. 

Then, to grab the button we use `document.querySelector` to retrieve the element and then add the listener to it.

```javascript
button.addEventListener('click', () => {
  
})
```

We can split this code in different pieces to use our broadcaster pattern by replacing the original code with different arguments where:

* `button` becomes the `element` argument
* `click` becomes the `eventType` argyment
* and the `console.log` that is triggered inside the original callback is now wrapped by the `listener` argument

```javascript
let addListener = element => eventType => listener => {
  element.addEventListener(eventType, listener)
}
```

This new broadcaster can be used in the same way as the other broadcasters.

> 🚨 Remember that when this pattern is call with only few arguments it will return another function

```javascript
let addButtonListener = addListener(button) // this returns a function
let addButtonClickListener = addButtonListener('click') //This is another function that expected a listener that is a function
addButtonClickListener(() => {
  console.log('Button clicked')
})
```

And just for convenience, we can move the `querySelector` call into the broadcaster and change the type of the first argument, instead of receive an element will receive a selector

```javascript
let addListener = selector => eventType => listener => {
  const element = document.querySelector(selector)
  element.addEventListener(eventType, listener)
}
let addButtonListener = addListener('#button') // this returns a function
```

The event listener can also be removed, and one part of the broadcaster pattern is not be able to cancel the behavior by returning a function that perform that task, for this purpose we add a return function inside the `addListener` function.

```javascript
let addListener = selector => eventType => listener => {
  const element = document.querySelector(selector)
  element.addEventListener(eventType, listener)
  return () => {
    element.removeEventListener(eventType, listener)
  }
}

```

This change means that we we call to `addButtonClickListener` we will receive a function that can be call to remove the behavior.

> 🔑 To know information about the event listener attached to some element you can use the Chrome Developer Tools like described in [this article](https://www.stanleyulili.com/javascript/how-to-find-event-listeners-on-a-dom-node-when-debugging/)

## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/add-listener/src/index.js)