# Delay XState Events and Transitions

[Video link](https://www.egghead.io/lessons/xstate-delay-xstate-events-and-transitions)

Time can be represented as an event in XState. Rather than having to wait for a user to send an event, we can use the XState `after` property to automatically trigger an event after a given amount of time.

Here is a traffic light machine: GREEN->YELLOW->RED->GREEN->... At the moment it relies on the user to transition from state to state.

```js
const stoplightMachine = Machine({
  id: "stoplight",
  initial: "red",
  states: {
    green: {
      after: {
        TIMER: "yellow"
      }
    },
    yellow: {
      after: {
        TIMER: "red"
      }
    },
    red: {
      after: {
        TIMER: "green"
      }
    }
  }
});
```

We can replace the `on` property with `after`, have the delay in milliseconds as the key and the next transition as the value.

```js
const stoplightMachine = Machine({
  id: "stoplight",
  initial: "red",
  states: {
    green: {
      after: {
        3000: "yellow"
      }
    },
    yellow: {
      after: {
        100: "red"
      }
    },
    red: {
      after: {
        400: "green"
      }
    }
  }
});
```

Rather than pass through the numeric time values, we can use string shorthand and pass through the delays in the options object of the constructor.

```js
const stoplightMachine = Machine({
  id: 'stoplight',
  initial: 'red',
  states: {
    green: {
      after: {
        GREEN_TIMER: 'yellow'
      }
    },
    yellow: {
      after: {
        YELLOW_TIMER: 'red'
      }
    },
    red: {
      after: {
        RED_TIMER: 'green'
      }
    }
  }, {
    delays: {
      GREEN_TIMER: 3000,
      YELLOW_TIMER: 1000,
      RED_TIMER: 4000
    }
  }
})
```

We could set the individual timers to be results of functions, allowing our timers to be more dynamic. In this case, we have a rush hour multiplier.

```js
delays: {
  GREEN_TIMER: ctx => ctx.rushHourMultiplier * 3000,
  YELLOW_TIMER: ctx => ctx.rushHourMultiplier * 1000,
  RED_TIMER: ctx => ctx.rushHourMultiplier * 4000
}
```

Now, we can add this to context. By default, we'll set it to one.

```js
initial: 'red',
context: {
  rushHourMultiplier: 1
},
```

If we update our machine. We'll see that the time doesn't change because we're multiplying by one.

We could add an event to top level of our machine, allowing each of the states to be able to respond to it. This event can then be consumed by each of the timer functions.

```js
const stoplightMachine = Machine({
  id: 'stoplight',
  initial: 'red',
  context: {
    rushHourMultiplier: 1
  },
  on: {
    INC_RUSH_HOUR: {
      actions: ['incRushHour']
    }
  },
  states: {
    green: {
      after: {
        GREEN_TIMER: 'yellow'
      }
    },
    yellow: {
      after: {
        YELLOW_TIMER: 'red'
      }
    },
    red: {
      after: {
        RED_TIMER: 'green'
      }
    }
  }, {
    actions: {
      incRushHour: assign({
        rushHourMultiplier: ctx => ctx.rushHourMultiplier + 1
      })
    }
    delays: {
      GREEN_TIMER: ctx => ctx.rushHourMultiplier * 3000,
      YELLOW_TIMER: ctx => ctx.rushHourMultiplier * 1000,
      RED_TIMER: ctx => ctx.rushHourMultiplier * 4000
    }
  }
})
```

We can track the state and see the multiplier changes when the events are sent and the timings increase as expected.

```json
{
  "value": "green",
  "context": {
    "rushHourMultiplier": 2
  }
}
```

## Personal take

I can see how being able to send events automatically between delays is valuable for user interactions.
