# Block a State Transition with a Guard

- [Video Link](https://egghead.io/lessons/react-block-a-state-transition-with-a-guard)
- [Code Link](https://github.com/isaacplmann/sturdy-uis/tree/lesson3-end)

What do we do when we want state transitions to only occur when a certain condition is met?

- We can add [guards](https://xstate.js.org/docs/guides/guards.html#guards-condition-functions)

A good use-case to add guards is when we can be faced with two new states.

- If the data structure returns with data inside
- If the data structure returns empty

📝Guards can and should be [serialized](https://github.com/isaacplmann/sturdy-uis/tree/lesson5-end) as a string or object with the `{ type: '' }` property
  - The guard logic can also be serialized in a [custom guard](https://xstate.js.org/docs/guides/guards.html#custom-guards).

First, we need to tell `xstate` what are the possible states:

```js
// informs state of the possible successful states
successful: {
    on: {
        FETCH: 'pending' 
    },
    states: {
        withData: {}, 👈
        withoutData: {} 👈
    }
}
```

* On `successful` response, from `pending` state, `xstate` will decide to which state to move into based on if the response has `data` or not.

We can achieve this by adding an array of the possible outcomes to our `pending` state, as such:

```js
pending: {
	invoke: {
		src: 'fetchData',              👇
        onDone: [{ target: 'successful.withData', actions: ['setResults'], cond:
        👉 'hasData' }. { target: 'successful.withoutData', actions: ['setResults'] }], 
		onError: [{ target: 'failed', actions: ['setMessage'] }]
	}
},
```

A [cond](https://xstate.js.org/docs/guides/guards.html#guards-condition-functions) function returns a boolean which determines whether the transition should be allowed to take place.
  - When the condition is met it will proceed to the corresponding state, in this case the `cond` would be `hasData` and if the response has data the condition would be met.

```js
actions: {
    ....
},
guards: { 👈// we need to the add the guards key to our machine
    hasData: (ctx, event) => {
        return event.data && event.data.length > 0
}
```

Instead of having the `pending` state know about all the sub-states inside of the `successful` state, it is better for that `successful` state to be in charge of its own sub-states.
    - This can be achieved by adding a third state, which in this case will be called `unknown`

```js
...
successful: {
    states: {
        unknown: {}; 👈 // we inform our state of a new piece of state
        withData: {};
        withoutData: {}
    }
},
...
```

🚙 _[Automatic or transient transition](https://xstate.js.org/docs/guides/transitions.html#transient-transitions) is a transition that is immediately taken without a triggering event as long as any condition is met. It can be specified as a single transition, or an array of condition transitions. If no condition transiitons or transient transitions are met, the machine stays in the same state_
