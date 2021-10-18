# Track Infinite States with with XState Context

[Video link](https://egghead.io/lessons/xstate-track-infinite-states-with-with-xstate-context)

Sometimes, we have states that are not finite but infinite. In XState, these are considered `context` or called `extended state`.

Let's create a lightbulb machine that has a colour changing bulb. The initial state of the colour is captured as a key/value pair in the context property of the machine.

This has no effect on the operation of the machine but, if we are using a visualisation tool, we'd see that there is now state held in the context.

```js
const multiColoredBulbMachine = Machine({
  id: 'multiColoredBulb',
  initial: 'unlit',
  context: {
    color: '#fff'
  },
  ...
})
```

Now, to change the colour. Here we can add the event CHANGE_COLOR and in the actions property use the assign function we've seen before.

In this case, we could set the colour directly - changing it to red for example.

```js
const multiColoredBulbMachine = Machine({
  id: 'multiColoredBulb',
  initial: 'unlit',
  context: {
    color: '#fff'
  },
  states: {
    lit: {
      on: {
        BREAK: 'broken',
        TOGGLE: 'unlit',
        CHANGE_COLOR: {
          actions: assign({
            color: '#f00'
          })
        }
      },
    },
    ...
  },
})
```

We can also use this key/value pair to provide a function toe the value that receives the current context and the event object. We can assign the colour based on values passed through the context.

In the event, we'd pass a new property `color` that will have the value of the colour we want to change to.

```js
const multiColoredBulbMachine = Machine({
  ...
  states: {
    lit: {
      on: {
        BREAK: 'broken',
        TOGGLE: 'unlit',
        CHANGE_COLOR: {
          actions: assign({
            color: (context, event) => event.color
          })
        }
      },
    },
    ...
  },
})
```

Assign can also take a function as an argument and so we can refactor our machine like this. It is generally preferred to call assign with the object signature, so this refactor shows what is possible but not what is preferred.

```js
const multiColoredBulbMachine = Machine({
  ...
  states: {
    lit: {
      on: {
        BREAK: 'broken',
        TOGGLE: 'unlit',
        CHANGE_COLOR: {
          actions: assign((context, event) => ({
            color: event.color
          }))
        }
      },
    },
    ...
  },
})
```

The last way we can add this action to the machine is to use the second argument to the machine constructor, the option object.

In this case, we'd create a method that will have the same code we'd previously had in-line. Then, we use a string to refer to that method in the event we want to use it. The benefit of this is that we can reuse the change colour logic without having to recreate it.

```js
const multiColoredBulbMachine = Machine({
 ...
  states: {
    lit: {
      on: {
        BREAK: 'broken',
        TOGGLE: 'unlit',
        CHANGE_COLOR: {
          actions: ['changeColor']
        }
      },
    },
    ...
  },
}, {
  actions: {
    changeColor: assign((context, event) => ({
            color: event.color
          }))
  }
})
```

## Personal take

I mostly am trying to imagine using state to modify and work with user objects. I can see more clearly how this would work with the introduction of context here.
