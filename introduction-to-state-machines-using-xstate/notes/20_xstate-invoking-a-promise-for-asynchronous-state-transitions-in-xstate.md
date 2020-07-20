# Invoking a Promise for Asynchronous State Transitions in XState

[Video link](https://www.egghead.io/lessons/xstate-invoking-a-promise-for-asynchronous-state-transitions-in-xstate)

Unknown to many, promises are state machines. They exist on one of four states, `idle`, `pending`, `resolved` or `rejected`.

We can invoke promises when we enter a state by using the `invoke` property on a state node.

Here is a cute animals machine:

```js
const cuteAnimalMachine = Machine({
  id: "cuteAnimals",
  initial: "idle",
  context: {
    cuteAnimals: null,
    error: null
  },
  states: {
    idle: {
      on: { FETCH: "loading" }
    },
    loading: {},
    success: {
      type: "final"
    },
    failure: {
      on: {
        RETRY: "loading"
      }
    }
  }
});
```

Here is a promise, that returns some cute animals from Reddit.

```js
const fetchCuteAnimals = () => {
  return fetch("https://www.reddit.com/r/aww.json")
    .then(res => res.json())
    .then(data => data.data.children.map(child => child.data));
};
```

When we transition to loading, we will invoke our promise. We give this invocation an `id` and source (`src`).

Promises will respond to two specific events, onDone when they resolve and onError when they reject.

```js
loading: {
  invoke: {
    id: 'fetchCuteAnimals',
    src: fetchCuteAnimals,
    onDone: {},
    onError: {}
  }
}
```

For the `onError` event, we will transition to `failure` and get the error message from the `event.data` property that is returned.

```js
onError: {
  target: 'failure',
  actions: assign({
    error: (context, event) => event.data
  })
}
```

For the `onDone` event we will transition to `success`. We'll also assign to `cuteAnimals` the data that is returned on `event.data`.

```js
onDone: {
  target: 'success',
  actions: assign({
    cuteAnimals: (context, event) => event.data
  })
}
```

## Personal take

I didn't know that most Reddit routes can be suffixed with .json to get a JSON object representing the contents of the page. That makes me think of some fun projects I could do!

This clear link to Promises immediately makes me see functions of XState in my own work. Maybe I needed all this build up to this but this might have been good to know earlier on.
