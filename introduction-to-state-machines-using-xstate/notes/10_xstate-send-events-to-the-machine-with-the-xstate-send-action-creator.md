# Send Events to the Machine with the XState Send Action Creator

[Video link](https://egghead.io/lessons/xstate-send-events-to-the-machine-with-the-xstate-send-action-creator)

We have an echoMachine that has one state (`listening`) and two events (`SPEAK` and `ECHO`).

The aim is for the machine to `ECHO` anytime we `SPEAK`. We do this with a special action called the `send action creator`.

So, on the `SPEAK` event, the action will send `ECHO` on the next tick of the machine. The `ECHO` event the action will console.log.

```js
const echoMachine = Machine({
  id: "echo",
  initial: "listening",
  states: {
    listening: {
      on: {
        SPEAK: {
          actions: send("ECHO")
        },
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

We can also send an object with the type of event rather than just the action string.

```js
const echoMachine = Machine({
  ...
  states: {
    listening: {
      on: {
        SPEAK: {
          actions: send({
            type: 'ECHO'
          })
        },
        ...
      },
    },
  },
})
```

## Personal take

I think I can see how I'd go about using this already. Again, I like the concepts and how they are being built up but it might be helpful to have some examples of where these are useful.

I'm imagining custom event listeners and triggers.
