# Use XState Null Events and Transient Transitions to Immediately Transition States

[Video link](https://www.egghead.io/lessons/xstate-use-xstate-null-events-and-transient-transitions-to-immediately-transition-states)

"If at first you don't succeed, try, try again." - here is that saying in a state machine,

```js
states: {
  idle: {
    on: { TRY: 'trying' }
  },
  trying: {
    entry: ['incTries'],
  },
  success: {}
},
{
  actions: {
    incTries: assign({
      tries: ctx => ctx.tries + 1
    })
  },
  guards: {
    triedEnough: ctx => ctx.tries > 2
  }
}
```

At the moment, when we enter the trying state we just stay there. What we want to happen is to head back to the idle state automatically or progress to the success state if we have tried enough.

In XState, we have the null event. This event is immediately triggered when we enter a state - it is called a transient transition.

```js
trying: {
  entry: ['incTries'],
  on: {
    ''
  }
}
```

We will set the two targets as an array on the null event. The condition, `triedEnough` we'll add in a second.

```js
trying: {
  entry: ['incTries'],
  on: {
    '': [
      { target: 'success', cond: 'triedEnough' },
      { target: 'idle' }
    ]
  }
}
```

Let's get the tries from the context and move to success when it is greater than 2 tried.

```js
{
  actions: {
    incTries: assign({
      tries: ctx => ctx.tries + 1
    })
  },
  guards: {
    triedEnough: ctx => ctx.tries > 2
  }
}
```

The null event is identified with an event name of an empty string '', and is immediately sent to the state upon entry. We can setup multiple targets with conditionals, or fire off actions to set up a future state with this transient transitions.

## Personal take

Using the null event can be really useful for setting up conditional branching.
