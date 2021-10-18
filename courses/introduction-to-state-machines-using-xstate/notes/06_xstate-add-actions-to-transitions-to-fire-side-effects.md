# Add Actions to Transitions to Fire Side Effects

[Video link](https://egghead.io/lessons/xstate-add-actions-to-transitions-to-fire-side-effects)

If we want to send an action after our event has fired, then we need to refactor our code. Rather than having a string, `broken` we will replace this with an object.

```js
const lightBulbMachine = Machine({
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
    broken: {}
  }
});
```

This object has a target property with the desired state, `broken`, but it also has an actions property. The value for actions can be a single function or an array of functions.

Each function receives the context of the state machine and the event object that triggered the transition.

```js
const lightBulbMachine = Machine({
    id: 'lightBulb',
    initial: 'unlit',
    states: {
    ...
    unlit: {
      on: {
        BREAK: {
          target: 'broken',
          actions: [(context, event) => {
            console.log(context, event)
          }]
        },
        TOGGLE: 'lit'
      }
    },
    ...
  }
})
```

An alternative approach is to pass a second argument to the Machine factory known as the options object. On this object, we can define the actions as methods. Then, where we want that action to be taken, we can simply refer to that action with a string.

```js
const lightBulbMachine = Machine({
    id: 'lightBulb',
    initial: 'unlit',
    states: {
    ...
    unlit: {
      on: {
        BREAK: {
          target: 'broken',
          actions: ['logBroken']
        },
        TOGGLE: 'lit'
      }
    },
    ...
  }
}, {
  actions: {
    logBroken: () => { console.log('yo I am broke') }
  }
})
```

Equally, these functions can be passed the context and event. Now, we can pass more information along with the event and have it be used by the action.

If our event was:

```js
{
  type: 'BREAK',
  location: 'office'
}
```

We can get the logged message to give more helpful information about the breakage.

```js
const lightBulbMachine = Machine({
   ...
}, {
  actions: {
    logBroken: (context, event) => { console.log(`yo I am broke in the ${event.location}`) }
  }
})
```

The benefit of using the actions object, is that the same action can be repeated in multiple places without repeating the code.

```js
const lightBulbMachine = Machine({
    id: 'lightBulb',
    initial: 'unlit',
    states: {
    lit: {
      on: {
        BREAK: {
          target: 'broken',
          actions: ['logBroken']
        },
        TOGGLE: 'unlit'
      }
    }
    ...
  }
}, {...})
```

## Personal take

Again, appreciating Kyle's style of looking at the fundamental of passing a function with each state change and then building up to using the options object way.

Kyle uses the vizualising tool explored last lesson here. This is helpful to explore the machine in isolation.
