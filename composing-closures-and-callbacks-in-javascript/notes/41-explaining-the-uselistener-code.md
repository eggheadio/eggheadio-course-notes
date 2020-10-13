# Explaining the useListener code

**[📹 Video](https://egghead.io/lessons/egghead-explaining-the-uselistener-code)**

- as we saw how the useListener logic works in the previous [two](https://egghead.io/lessons/egghead-pass-a-listener-to-a-usecallback-hook) [lessons](https://egghead.io/lessons/egghead-create-a-custom-uselistener-hook-around-usecallback), the main job of this hook is to capture the function that will be used as a listener in the first pass (first execution), captures it and then call it with the values that later will be called with (values coming from the `onInput` event)
- remember that the first time the `onInput` will be called (specifically the `callbackListener` function inside the `useListener`) will be inside the `useBroadcaster` (`broadcaster(setState)`). the next time this function will be called, is when the user types something on the input, and will be called with the value of the input.
- again, this is a "clever" solution, but is one that let you see how this can work in the React model.

