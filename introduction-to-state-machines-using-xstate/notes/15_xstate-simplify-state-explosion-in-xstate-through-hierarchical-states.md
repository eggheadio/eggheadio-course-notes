# Simplify State Explosion in XState through Hierarchical States

[Video link](https://www.egghead.io/lessons/xstate-simplify-state-explosion-in-xstate-through-hierarchical-states)

Here is a state machine that represents a door without any transitions or events.

```js
const door = Machine({
  id: "door",
  initial: "locked",
  states: {
    locked: {},
    unlocked: {},
    closed: {},
    opened: {}
  }
});
```

These states interact in a number of ways that can be complex to keep straight if they are all on the same level. For example, a locked door is also closed whereas a closed door could be locked or unlocked.

This is where hierarchical states can help.

We could put closed and open as states that the machine can be in when it is unlocked and we can give an initial states within this subset.

```js
const door = Machine({
  id: 'door',
  initial: 'locked',
  states: {
    locked: {},
    unlocked: {
      initial: 'closed'
      states: {
        closed: {},
        opened: {}
      }
    }
  }
})
```

We can then fill in some events - closed doors can open, open doors can close and locked doors can unlocked.

What about going from our unlocked state back to our locked state? We have the issue here that we don't want to be able to lock an open door.

```js
const door = Machine({
  id: 'door',
  initial: 'locked',
  states: {
    locked: {
      on: {
        UNLOCK: 'unlocked'
      }
    },
    unlocked: {
      initial: 'closed',
      states: {
        closed: {
          on: {
            OPEN: 'opened'
          }
        },
        opened: {
          on: {
            CLOSE: 'closed'
          }
        }
      }
    }
  }
})
```

If we try to go directly from unlocked to locked we will get an error because locked doesn't exist as a state in unlocked.

To handle this we have two possible options.

We can use the id of the door and dot notation to reference the state we want to get to, starting at door and working down.

```js
const door = Machine({
  id: 'door',
  initial: 'locked',
  states: {
    ...
    unlocked: {
      initial: 'closed',
      states: {
        closed: {
          on: {
            LOCK: '#door.locked',
            OPEN: 'opened'
          }
        },
        ...
      }
    }
  }
})
```

The alternative is to give the target state an id and reference that as the destination state.

```js
const door = Machine({
  id: 'door',
  initial: 'locked',
  states: {
    locked: {
      id: 'locked',
      on: {
        UNLOCK: 'unlocked'
      }
    },
    unlocked: {
      initial: 'closed',
      states: {
        closed: {
          on: {
            LOCK: '#locked',
            OPEN: 'opened'
          }
        },
        ...
      }
    }
  }
})
```

[Online Vis demo](https://xstate.js.org/viz/?gist=d87ef45197e075dca7cba55ad594d160)

## Personal take

It's interesting to visualise some more complex state machines and to think about how quickly they can get complex. A door! I can see that having a diagram can help explore the relevant states and we can ignore the irrelevant states.

Open/Closed and Locked/Unlocked produce four possible states but for us only 3 of them are relevant - locked & open being meaningless. We save dealing with one irrelevant state here but this will grow exponentially.
