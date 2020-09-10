# 11. Use reactive declarations to compute component state in Svelte 3

[Video Link](https://egghead.io/lessons/svelte-use-reactive-declarations-to-compute-component-state-in-svelte-3?pl=getting-started-with-svelte-3-05a8541a)

- Svelte automatically updates the DOM when the component's state changes.
- If part of the state need to be computed from other parts we can use _reactive declarations_
- The syntax for a reactive declarations is `$:` in front of the variable name

  ```js
  let count = 0
  $: squared = count ** 2
  ```

- You can also easily have reactive declarations based off other reactive declarations.
