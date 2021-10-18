# Conditionally Transition to States with Guards in XState

[Video link](https://egghead.io/lessons/xstate-conditionally-transition-to-states-with-guards-in-xstate)

In this example vending machine machine, we have two states - idle and vending. At the moment, the event `SELECT_ITEM` will transition to vending but this isn't how vending machines work.

```js
const vendingMachineMachine = Machine(
  {
    id: "vendingMachine",
    initial: "idle",
    context: {
      deposited: 0
    },
    states: {
      idle: {
        on: {
          SELECT_ITEM: "vending",
          DEPOSIT_QUARTER: {
            actions: ["addQuarter"]
          }
        }
      },
      vending: {}
    }
  },
  {
    actions: {
      addQuarter: assign({
        deposited: context => context.deposited + 25
      })
    }
  }
);
```

We want to add a guard to make sure that we have paid enough money before we vend.

We replace the string `vending` with an object which as the same target. We can then use the `cond` property in this object to add a condition or predicate function. This function will return a Boolean.

Guard functions like these receive the context and the event as arguments. We only need to context in this instance. We want this condition to return true when `context.depositied` is greater than or equal to 100.

Our machine will not transition if we pass the `SELECT_ITEM` event while this condition is false.

```js
const vendingMachineMachine = Machine(
  {
    ...
    states: {
      idle: {
        on: {
          SELECT_ITEM: {
            target: 'vending',
            cond: context => context.deposited >= 100
          },
          DEPOSIT_QUARTER: {
            actions: ['addQuarter'],
          },
        },
      },
      vending: {},
    },
  },
  {
    ...
  }
)
```

Another way to set the condition is to pass a string reference to the required condition and pass the condition in the options object.

These are gathered in the `guard` property of the options object. We can use the exact same function as we did in line.

```js
const vendingMachineMachine = Machine(
  {
    ...
    states: {
      idle: {
        on: {
          SELECT_ITEM: {
            target: 'vending',
            cond: 'depositedEnough'
          },
          ...
        }
      },
      vending: {}
    }
  },
  {
    actions: {
      addQuarter: assign({
        deposited: context => context.deposited + 25
      })
    },
    guards: {
      depositedEnough: context => context.deposited >= 100
    }
  }
)
```

Now, if we `DEPOSIT_QUARTER` 4 times or more, we will be able to select an item from our vending machine.

## Personal take

Some vocabulary here. We use `cond` to set `guards` that are `predicate` functions. Need to make sure that I'm on top of that when it comes to referencing it. The mental model for those is pretty clear (I think) but good to disambiguate and use the correct vocab.
