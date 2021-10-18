# Invoke Callbacks to Send and Receive Events from a Parent XState Machine

[Video link](https://www.egghead.io/lessons/xstate-invoke-callbacks-to-send-and-receive-events-from-a-parent-xstate-machine)

We can invoke a callback as a service when we enter a state in XState. This gives us the ability to trigger various functionality by responding to events sent to the service, and allows us to send events back to the parent machine.

Here is an echo machine:

```js
const echoMachine = Machine({
  id: "echo",
  initial: "listening",
  states: {
    listening: {
      on: {
        SPEAK: {},
        ECHO: {
          actions: () => {
            console.log("echo, echo");
          }
        }
      }
    }
  }
});
```

The idea of this machine is when the event SPEAK is called, we set up a callback that'll send ECHO events back to the machine if, and only if, the right type of event is sent. We can do this by invoking a callback as a service.

To start, we add the invoke property on the listening state. Invoke takes an `id` and a source (`src`). This source should be a callback handler.

```js
listening: {
  invoke: {
    id: 'echoCallback',
    src: echoCallbackHandler
  }
}
```

echoCallbackHandler is a function that receives the context and event that invoked the service. In this case, it'd be the initial context of our machine, which is undefined. The event would be the initialization of the machine.

This function returns another function. This is where we manage our callback service. This function receives two arguments, a callback function that we can use to send events back to the parent machine, and an onEvent function that we can use to respond to specific events in the machine.

To start with, we will respond to any event that is received by the handler.

```js
const echoCallbackHandler = (context, event) => (callback, onEvent) => {
  onEvent(e => {
    callback("ECHO");
  });
};
```

How do we send events to our callback service? On SPEAK, we add the actions property and use the `send` action creator. This is a function that receives an event. In this case, it can be anything. What's important is that we add the options object, the second argument, and say where to send it to.

We're going to send it to the ID of my callback service, EchoCallback.

```js
SPEAK: {
  actions: send("FOO", {
    to: "echoCallback"
  });
}
```

This will send the Event Foo to the service EchoCallback. That'll be received by this onEvent function. onEvent will trigger the callback of ECHO back, which will lead to the ECHO event being handled in the listening state, which should log out 'echo, echo'.

To take this a step further, we can respond with this EchoCallback only when the event is of a certain type.

```js
const echoCallbackHandler = (context, event) => (callback, onEvent) => {
  onEvent(e => {
    if (e.type === "HEAR") {
      callback("ECHO");
    }
  });
};
```

## Personal take

Using callbacks to conditional respond and move state forward feels like a really useful feature and I can see where that could be used elsewhere.
