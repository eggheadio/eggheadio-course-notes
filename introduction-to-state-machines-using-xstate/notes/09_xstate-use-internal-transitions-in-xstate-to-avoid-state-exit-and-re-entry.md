# Use Internal Transitions in XState to Avoid State Exit and Re-entry

[Video link](https://egghead.io/lessons/xstate-use-internal-transitions-in-xstate-to-avoid-state-exit-and-re-entry)

Occasionally, we want to transition to the same state without leaving the state node itself. Here is a contrived example to show it.

```js
const idleMachine = Machine(
  {
    id: "idle",
    initial: "idle",
    states: {
      idle: {
        entry: ["logEntry"],
        exit: ["logExit"]
      }
    },
    on: {
      DO_NOTHING: "idle"
    }
  },
  {
    actions: {
      logEntry: () => {
        console.log("entered");
      },
      logExit: () => {
        console.log("exited");
      }
    }
  }
);
```

At the moment, passing the `DO_NOTHING` action will trigger the entry and exit side effects.

To be able to avoid these, we add a dot before the new state we want to transition to.

```js
const idleMachine = Machine(
  {
    ...
    on: {
      DO_NOTHING: '.idle',
    },
  },
  {
    ...
  }
)
```

With that one character change, we will not leave the node with the `DO_NOTHING` action.

## Personal take

Cool - so, what? Good to know this but it would be interesting to have a real-world example to go along with this.
