# How Action Order Affects Assigns to Context in a XState Machine

[Video link](https://egghead.io/lessons/xstate-how-action-order-affects-assigns-to-context-in-a-xstate-machine)

Here is a counter machine which counts twice and console.logs before and after (at least that what the code suggests!).

If you run the machine, you'll see that Before and After both report the same value - uh oh!

```js
const doubleCounterMachine = Machine(
  {
    id: "doubleCounter",
    initial: "idle",
    context: {
      count: 0
    },
    states: {
      idle: {
        on: {
          INC_COUNT_TWICE: {
            actions: [
              context => {
                console.log(`Before: ${context.count}`);
              },
              "incCount",
              "incCount",
              context => {
                console.log(`After: ${context.count}`);
              }
            ]
          }
        }
      }
    }
  },
  {
    actions: {
      incCount: assign({ count: context => context.count + 1 })
    }
  }
);

// Before: 2
// After: 2
```

We can use some pseudocode to help see what is going on here.

Machine.transition is a pure function - that means the same starting point should always give us the same finishing point for any particular event.

It does this by filtering out any assigns that happen in the actions and merging them into the the next context object. So all of the assigns are batched together to give us the nextContext object. Only then are the none-assigned actions (for us the console.log) executed.

```js
Machine.transition(state, event) {
  context: nextContext,
  actions: [
    ...state.exit,
    ...actions,
    ...nextState.entry
  ].filter(action => {
    if(assignAction) {
      mergeIntoNextContext()
      return false
    }

    return true
  })
}
```

Knowing this, we need to introduce a previousCount that is assigned at the start of the operation and use that in our logging.

As the assigns happen in the order they are declared, our previousCount will be set to 0 before the additions are applied.

```js
const doubleCounterMachine = Machine(
  {
    id: "doubleCounter",
    initial: "idle",
    context: {
      count: 0,
      previousCount: undefined
    },
    states: {
      idle: {
        on: {
          INC_COUNT_TWICE: {
            actions: [
              context => {
                console.log(`Before: ${context.previousCount}`);
              },
              "setPreviousCount",
              "incCount",
              "incCount",
              context => {
                console.log(`After: ${context.count}`);
              }
            ]
          }
        }
      }
    }
  },
  {
    actions: {
      incCount: assign({ count: context => context.count + 1 }),
      setPreviousCount: assign({
        previousCount: context => context.count
      })
    }
  }
);

// Before: 0
// After: 2
```

## Personal take

I'm filing this one away as a bug generator! I can imagine having no idea why this was happening in other code - I'm really happy to have another possible diagnosis to investigate for future bugs. Woohoo!
