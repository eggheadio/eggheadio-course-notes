# Execute Code when Entering and Exiting States using Activities

[Video Link](https://egghead.io/lessons/react-execute-code-when-entering-and-exiting-states-using-activities)
[Code Link](https://github.com/isaacplmann/sturdy-uis/tree/lesson7-end)

### Activities
💰 An [activity](https://xstate.js.org/docs/guides/activities.html#activities) is an actio that occurs over time, and can be started and stopped
  - Activities are great place for observables, which need to be subscribed and unsubscribed, or a `setInterval` which needs to be connected, or a `websocket` that needs to be connected and disconnected, etc.
  - In `xstate` actvities are specified on the `activities` key of a machine state.
  - Transitioning within the same parent state will not restart its activities, but be mindful that it might start new activities.