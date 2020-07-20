# Trigger Actions When Entering and Exiting a XState State

[Video link](https://egghead.io/lessons/xstate-trigger-actions-when-entering-and-exiting-a-xstate-state)

```js
const { Machine } = require("xstate");

const lightBulbMachine = Machine(
  {
    id: "lightBulb",
    initial: "unlit",
    states: {
      lit: {
        on: {
          BREAK: {
            target: "broken",
            actions: ["logBroken"]
          },
          TOGGLE: "unlit"
        }
      },
      unlit: {
        on: {
          BREAK: {
            target: "broken",
            actions: ["logBroken"]
          },
          TOGGLE: "lit"
        }
      },
      broken: {}
    }
  },
  {
    actions: {
      logBroken: (context, event) => {
        console.log(`yo I am broke in the ${event.location}`);
      }
    }
  }
);
```

Adding the break transitions twice is a little tedious and unnecessary. We can also trigger an action when we enter a state, using the property `entry`.

`Entry` is exactly like `action`, it can take a single function that receives the context and an event object. It can also take array of functions and these functions can be strings referencing actions from the options object.

Now, I can remove the object on `BREAK` for the lit and unlit states and return it to just the destination state. In their place, I will use the entry property to call the logBroken function instead.

```js
const { Machine } = require("xstate");

const lightBulbMachine = Machine(
  {
    id: "lightBulb",
    initial: "unlit",
    states: {
      lit: {
        on: {
          BREAK: "broken",
          TOGGLE: "unlit"
        }
      },
      unlit: {
        on: {
          BREAK: "broken",
          TOGGLE: "lit"
        }
      },
      broken: {
        entry: ["logBroken"]
      }
    }
  },
  {
    actions: {
      logBroken: (context, event) => {
        console.log(`yo i am broke in the ${event.location}`);
      }
    }
  }
);
```

If we pass the location with the event object, we will log out the message with where the bulb is broken.

We can also trigger actions when we leave a state and we do that with the exit property.

```js
const { Machine } = require('xstate')

const lightBulbMachine = Machine(
  {
    id: 'lightBulb',
    initial: 'unlit',
    states: {
      lit: {
        exit: () => {
          console.log('it is so dark and cold')
        }
        on: {
          BREAK: 'broken',
          TOGGLE: 'unlit',
        },
      },
      ...
    },
  },
  { ... })
```

What happens when we call exit transition actions and entry actions all in sequence? In what order do they occur?

If we add an action to the `BREAK` event on `lit`, we'll have an event in all three places for the `lit` state (entry, exit, transition). If we do this in the visualising tool we'll be able to see.

```js
const { Machine } = require('xstate')

const lightBulbMachine = Machine(
  {
    id: 'lightBulb',
    initial: 'unlit',
    states: {
      lit: {
        on: {
          BREAK: {
            target: 'broken',
            actions: () => {
              console.log('transitioning to broken')
            }
          },
          TOGGLE: 'unlit',
        },
      },
      ...
    },
  },
  { ... }
)
```

It will always be `exit` from the state we're in, followed by transition actions (those declared in the state block of the new state) and finally the `entry` action of the new state.

## Personal take

Another interesting abstraction of the process. Now, we can add events at exit, entry and transition between states. I imagine conceptualizing the ordering of these will be important and could be the source of bugs if not considered carefully.
