# Multiple Simultaneous States with Parallel States

[Video link](https://www.egghead.io/lessons/xstate-multiple-simultaneous-states-with-parallel-states)

It's possible to have two states that run in parallel that are mutually exclusive - walking & talking, breathing & sleeping.

Here is a space-heater machine which has two top-level states - poweredOff and poweredOn. Within poweredOn, we are continuing to use heirarchical states (see [lesson 15](./15_xstate-simplify-state-explosion-in-xstate-through-hierarchical-states.md)) to toggle between highHeat and lowHeat. These only are valid when the heater is turned on.

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
      initial: "lowHeat",
      states: {
        lowHeat: {
          on: { TOGGLE_HEAT: "lowHeat" }
        },
        highHeat: {
          on: { TOGGLE_HEAT: "highHeat" }
        }
      }
    }
  }
});
```

The heater has another function, oscillation. This again falls under poweredOn, so our heirarchical paradigm works but the relationship to the highHeat and lowHeat is different.

These groups of states - the heat level and the oscillation - can happen in parallel which XState allows us to declare as `type:'parallel'`. We can then enumerate the states that we want to consider in parallel in the states property.

```js
const spaceHeaterMachine = Machine({
  id: 'spaceHeater',
  initial: 'poweredOff',
  states: {
    poweredOff: {
      on: { TOGGLE_POWER: 'poweredOn' },
    },
    poweredOn: {
      on: { TOGGLE_POWER: 'poweredOff' },
      type: 'parallel',
      states: {
        heated: {},
        oscillation: {}
      }
      ...

    },
  },
})
```

We can move everything we had previously the dealt with the heat level inside the heated state. We have the `initial` value and the various states for that state.

We can control the heat now but not the oscillation.

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
      type: "parallel",
      states: {
        heated: {
          initial: "lowHeat",
          states: {
            lowHeat: {
              on: { TOGGLE_HEAT: "lowHeat" }
            },
            highHeat: {
              on: { TOGGLE_HEAT: "highHeat" }
            }
          }
        },
        oscillation: {}
      }
    }
  }
});
```

Inside of oscillation, we'll have an initial of disabled and states of enabled and disabled.

```js
const spaceHeaterMachine = Machine({
  id: 'spaceHeater',
  initial: 'poweredOff',
  states: {
    poweredOff: {
      on: { TOGGLE_POWER: 'poweredOn' }
    },
    poweredOn: {
      on: { TOGGLE_POWER: 'poweredOff' },
      type: 'parallel',
      states: {
        ...
        oscillation: {
          initial: 'disabled',
          states: {
            enabled: {
              on: { TOGGLE_OSC: 'disabled'}
            },
            disaabled: {
              on: { TOGGLE_OSC: 'enabled'}
            }
          }
        }
      }
    }
  }
})
```

When we power on, we are in lowHeat and disabled oscillation. Toggling the heat level and the oscillation can happen independently. Toggling the power then, will move away from those states and power the heater off.

## Personal take

I can see how this is useful - we now have tools to make complex machines that have hierarchical and parallel states that we can track, order and transition between.
