# Save Previous States with a History State

- [Video Link](https://egghead.io/lessons/react-save-previous-states-with-a-history-state)
- [Code Link](https://github.com/isaacplmann/sturdy-uis/tree/lesson6-end)


🔑 A _[history](https://xstate.js.org/docs/guides/history.html#history) state_ node is a special kind of state node that, when reached, tells the machine to go to the last state value of that region. There's two types of history states:
- 'shallow', which specifies only the top-level history value.
- 'deep', which specifies the top-level and all child-level history values.


📹 History states explanation [video](https://www.youtube.com/embed/uczggW1PF6I)


⚙️ [Configuration](https://xstate.js.org/docs/guides/history.html#history-state-configuration) for a history state:
  - `type: 'history'`
  - `history`
  - `target`

🔍 History states can be directly accessed by `state.history`

⏱ History states keeps track of any transition that happens in the sibling states.

❌ We never want to transition from a sibling state to its history state
  - Any transition from the history state should come from outside. 