# 7. Compose components with slots in Svelte 3

[Video Link](https://egghead.io/lessons/svelte-compose-components-with-slots-in-svelte-3?pl=getting-started-with-svelte-3-05a8541a)

- If we have a Box component, but we want to put any content we want inside of it we'll need to use a `slot`.
- A slot allows a Svelte component to have children of any sort.
- You can define default children by putting content with the slot

  ```
  <slot>
      Hey, I am the default text!
  </slot>
  ```
