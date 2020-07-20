# Replace Enumerated States with a State Machine

[Video link](https://egghead.io/lessons/xstate-replace-enumerated-states-with-a-state-machine)

We're going to replace the enumerated states with a state machine.

- Rather than enumerating the states into an object, we create an object for each state and combine this in another object called states.

```js
const lit = {};
const unlit = {};
const broken = {};

const states = { lit, unlit, broken };
```

- We then need to define an initial state, so a variable with the string `unlit`.

```js
const initial = "unlit";
```

- We then combine these into a config object, along with an id key/value pair, that we'll pass into our state machine soon.

```js
const config = {
  id: "lightBulb",
  initial,
  states
};
```

- We define which state nodes respond to which events and what the subsequent state is going to be. In the broken state, the bulb doesn't respond to any event so this is given type `final`. By convention, we capitalize the events that the nodes respond to.

```js
const lit = {
  on: {
    BREAK: "broken",
    TOGGLE: "unlit"
  }
};
const unlit = {
  on: {
    BREAK: "broken",
    TOGGLE: "lit"
  }
};
const broken = {
  type: "final"
};
```

- We're going to import the machine factory function from the XState library. We're using not, so we'll use common JS rather than ES6.

```js
const { Machine } = require("xstate");
```

- We can then create the lightBulbMachine using the factory function with our config object. This will provide a number of useful getters and setters.

```js
const lightBulbMachine = Machine(config);
```

- We can get the initialState by using the relevant getter which gives us quite a lot of information.

```js
console.log(lightBulbMachine.initialState);
```

- We then have the most useful method, the transition method. It is a pure function that takes the state and an event argument and returns the next state object.

```js
console.log(lightBulbMachine.transition("unlit", "TOGGLE"));
console.log(lightBulbMachine.transition("lit", "TOGGLE"));
console.log(lightBulbMachine.transition("lit", "BREAK"));
```

- What happens when you pass a state that the machine can't handle? It throws an error and tells us the child state `on_fire` does not exist on lightBulb.

```js
console.log(lightBulbMachine.transition('on_fire', 'TOGGLE))
```

- What about when we pass it an event that the machine doesn't handle? By default it does nothing but setting `strict: true` in our config object will throw an error in this situation.

```js
console.log(lightBulbMachine.transition("lit", "CHANGE_COLOUR"));
```

## Personal take

This is still the point of complexity that feels less useful than other approaches. I know that as things get more complex this gets to be more useful but we haven't got there yet.
