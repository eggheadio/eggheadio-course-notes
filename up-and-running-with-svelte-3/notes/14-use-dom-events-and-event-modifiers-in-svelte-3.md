# 14. Use DOM events and event modifiers in Svelte 3

[Video Link](https://egghead.io/lessons/svelte-use-dom-events-and-event-modifiers-in-svelte-3?pl=getting-started-with-svelte-3-05a8541a)

- In order to create an alert that displays the name we enter in the form we will need to attach input handlers onto the input and the button.

```
<input type="text" on:change={handleInput}/>
<button on:click={handleClick}>Click me</button>
```

- You can pass in modifiers to the input handlers by using the `|` character to chain modifiers that alter DOM event behavior.
- In this video we went over the modifiers `once` and `preventDefault` but you can find the full list of Svelte modifiers [in the Svelte documentation](https://svelte.dev/docs#on_element_event).
