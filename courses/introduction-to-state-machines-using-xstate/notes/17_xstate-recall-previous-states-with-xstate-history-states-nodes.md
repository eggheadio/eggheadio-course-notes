# Recall Previous States with XState History States Nodes

[Video link](https://www.egghead.io/lessons/xstate-recall-previous-states-with-xstate-history-states-nodes)

State machines don't have a sense of time - they are intended to be pure functions that receives a state and event and return the next state.

It is sometimes useful to return to a previous state and we do that with history nodes.

The spaceheater below will always turn on to an initial of low heat. I may want it to remember the setting I was using when I turned it off last.

We can do that by adding a history state node by defining the type as history.

```js
const spaceHeaterMachine = Machine({
  id: "spaceHeater",
  initial: "poweredOff",
  states: {
    poweredOff: {
      on: { TOGGLE_POWER: "poweredOn" }
    },
    poweredOn: {
      on: { TOGGLE_POWER: "poweredOff" },
      initial: "low",
      states: {
        low: {
          on: { TOGGLE_HEAT: "high" }
        },
        high: {
          on: { TOGGLE_HEAT: "low" }
        },
        hist: {
          type: "history"
        }
      }
    }
  }
});
```

This creates a state node that when transitioned to will return to the previous state of this area of the machine.

We will then change the poweredOn transition to the particular node, `poweredOn.hist`.

```js
poweredOff: {
on: { TOGGLE_POWER: 'poweredOn.hist' }
},
```

By default, this is a `shallow` history and that is all we need.

Let's look at a more complex example that requires a slightly different approach.

```js
const spaceHeaterMachine = Machine({
  id: "spaceHeater",
  initial: "poweredOff",
  states: {
    poweredOff: {
      on: { TOGGLE_POWER: "poweredOn.hist" }
    },
    poweredOn: {
      on: { TOGGLE_POWER: "poweredOff" },
      type: "parallel",
      states: {
        heated: {
          initial: "low",
          states: {
            low: {
              on: { TOGGLE_HEAT: "high" }
            },
            high: {
              on: { TOGGLE_HEAT: "low" }
            }
          }
        },
        oscillating: {
          initial: "disabled",
          states: {
            disabled: {
              on: { TOGGLE_OSC: "enabled" }
            },
            enabled: {
              on: { TOGGLE_OSC: "disabled" }
            }
          }
        },
        hist: {
          type: "history"
        }
      }
    }
  }
});
```

In this case, the oscillating and heated states are parallel states within poweredOn. However, the history node doesn't track the state of the children. To do this we set the history property to `deep`.

```js
hist: {
  type: 'history',
  history: 'deep'
}
```

Now our history node will track the parallel states and revert to those when reentering the poweredOn state.

## Personal take

When a user returns to a page it is good to have the application in the same state that it was when they left. I think this would be useful for this but having it persist through sessions would probably still need to be handled by a database.
