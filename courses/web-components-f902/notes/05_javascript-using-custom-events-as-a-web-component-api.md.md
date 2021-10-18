# Using Custom Events as a web component API

[Video link](https://egghead.io/lessons/javascript-using-custom-events-as-a-web-component-api)

<TimeStamp start="0:16" end="0:25">

Our existing code shows personalized 'Welcomes' given user input, but doesn't log input in console for user to verify input.

This lesson shows how we can log and display this information.

</TimeStamp>

<TimeStamp start="0:34" end="0:42">

We create a `CustomEvent()`, passing `eventName` and the `payload` to be the detail from the method's parameters (in order to log the entered value), then dispatch the event from the custom element itself.

</TimeStamp>

<TimeStamp start="1:12" end="1:21">

We add an event listener for logging the event detail to the console to verify our custom event is working properly.

```jsx
myWelcomeComponent.addEventListener('username-changed', (event) => {
  console.log(event.detail);
})
```

</TimeStamp>
