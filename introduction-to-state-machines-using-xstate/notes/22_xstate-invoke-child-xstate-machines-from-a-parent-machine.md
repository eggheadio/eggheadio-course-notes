# Invoke Child XState Machines from a Parent Machine

[Video link](https://www.egghead.io/lessons/xstate-invoke-child-xstate-machines-from-a-parent-machine)

Multiple nested machines can get overly complex and confusing. It is possible to delegate behaviour and decisions to child machines.

Here was have a `parentMachine` and we want to invoke a childMachine to handle the active state.

```js
const parentMachine = Machine({
  id: "parent",
  initial: "idle",
  states: {
    idle: {
      on: { ACTIVATE: "active" }
    },
    active: {
      // invoke another machine
    },
    done: {}
  }
});
```

Where is the childMachine which has three steps.

```js
const childMachine = Machine({
  id: "child",
  initial: "step1",
  states: {
    step1: {
      on: { STEP: "step2" }
    },
    step2: {
      on: { STEP: "step3" }
    },
    step3: {
      type: "final"
    }
  }
});
```

To invoke the childMachine within the parent, we use the invoke property. We pass the `id` and the source(`src`) of the childMachine. When we enter the active state, it will invoke this child and it will start in _its_ initial state.

```js
active: {
  invoke: {
    id: 'child',
    src: childMachine
  }
}
```

To be able to send events to the child machine, we need to create a new event on the parentMachine. On the action property, we assign the send function with the event we want to send and, in the second variable, where we want to send it to.

```js
on: {
  STEP: {
    actions: send("STEP", {
      to: "child"
    });
  }
}
```

We now have the problem that we have no mechanism to pass from the `final` state of the childMachine back to the parentMachine. To deal with this, we set the `onDone` property inside the invoke method. The value is the state we want to transition to when the childMachine has completed.

```js
active: {
  invoke: {
    id: 'child',
    src: childMachine,
    onDone: 'done'
  }
}
```

## Personal take

To be able to split up behaviours and think about how to compose machines would make these machines more reusable. Love it!
