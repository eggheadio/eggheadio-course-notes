# Use Activities in XState to Run Ongoing Side Effects

[Video link](https://egghead.io/lessons/xstate-use-activities-in-xstate-to-run-ongoing-side-effects)

So far, our states have had point in time actions but not ones that have repeated over time when in a particular state.

The example below is an alarm clock which doesn't beep.

```js
const alarmClockMachine = Machine({
  id: "alarmClock",
  initial: "idle",
  states: {
    idle: {
      on: { ALARM: "alarming" }
    },
    alarming: {
      on: { STOP: "idle" }
    }
  }
});
```

If we want an action that is ongoing while in a particular state, we need to use `activities`.

The definition for activities is exactly the same as actions, they can be declared inline, we can use a single activity or an array of activities or we can use string references to activities passed in through the options object.

```js
const alarmClockMachine = Machine({
  id: 'alarmClock',
  initial: 'idle',
  states: {
    idle: {
      on: { ALARM: 'alarming' },
    },
    alarming: {
      /*
      Single function:
      activities:  (context, event) => {}

      Array of functions
      activities:  [(context, event) => {}, (context, event) => {}, ...]

      */
      activities:  ['beeping']
      on: { STOP: 'idle' },
    },
  },
  {
  activities: {
    beeping: (context, event) => {
      const beep = () => {
        console.log('beep')
      }

      beep()
      setInterval(beep, 1000)
    }
  }
})
```

Now that we have an alarm clock that beeps, we've introduced a new problem. Namely, once it's started it won't stop. We've created a memory leak. We currently have no way of cleaning up the interval when the machine leaves the `alarming` state.

```js
const alarmClockMachine = Machine({
  ...
}, {
  activities: {
    beeping: (context, event) => {
      const beep = () => {
        console.log('beep')
      }

      beep()
      setInterval(beep, 1000)
    }
  }
})
```

Activities can return a function that will perform any cleanup that we need. In this case, setInterval will return an interval ID. So, if we assign that to a value on creation, we can clear the interval as the machine leaves the `alarming` state.

```js
const alarmClockMachine = Machine({
  ...
}, {
  activities: {
    beeping: (context, event) => {
      const beep = () => {
        console.log('beep')
      }

      beep()
      const intervalID = setInterval(beep, 1000)

      return () => clearInterval(intervalID)
    }
  }
})
```

## Personal take

Another helpful pre-emptive bug stopper. Love this! Appreciate that we're seeing where we might slip up and what to do about it before we get there.
