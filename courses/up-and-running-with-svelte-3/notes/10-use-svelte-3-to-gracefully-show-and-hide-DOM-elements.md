# 10. Use Svelte 3 to gracefully show and hide DOM elements

[Video Link](https://egghead.io/lessons/svelte-use-svelte-3-transitions-to-gracefully-show-and-hide-dom-elements?pl=getting-started-with-svelte-3-05a8541a)

- Svelte has built in transitions that you can import from `"svelte/transition"`
- The `svelte/transition` module exports seven functions: `fade`, `blur`, `fly`, `slide`, `scale`, `draw`, and `crossfade`. [Source](https://svelte.dev/docs#svelte_transition)
- You can add a transition to an element by adding the following attribute `transition:slide`
- Transitions take parameters which effect the transition. You can pass those by passing an object in to the transition that has different parameters like `delay` and `duration`
